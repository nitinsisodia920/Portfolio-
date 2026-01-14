
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Terminal, X, Zap, Cpu, Scan } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';

// Implement decoding/encoding helpers as per guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const AIAssistant: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('IDLE');
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const toggleAssistant = () => setIsOpen(!isOpen);

  const startLiveSession = async () => {
    try {
      setStatus('INIT_LINK');
      const ai = new GoogleGenAI({ apiKey: (process.env.API_KEY as string) });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsLive(true);
            setStatus('ACTIVE_LIAISON');
            
            const source = audioContextRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = audioContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob: Blob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && outputAudioContextRef.current) {
              const ctx = outputAudioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            if (message.serverContent?.outputTranscription) {
              const text = message.serverContent.outputTranscription.text;
              setTranscription(prev => [...prev.slice(-10), `[AI]: ${text}`]);
            } else if (message.serverContent?.inputTranscription) {
              const text = message.serverContent.inputTranscription.text;
              setTranscription(prev => [...prev.slice(-10), `[USER]: ${text}`]);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onclose: () => {
            setIsLive(false);
            setStatus('IDLE');
          },
          onerror: (e) => setStatus('LINK_ERROR')
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          systemInstruction: "You are NITIN's Neural Proxy. A highly advanced, minimalist AI. You speak in a precise, futuristic manner. Answer inquiries about Nitin's stack (React, Rust, AWS) with deep technical precision. Keep it concise."
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      setStatus('AUTH_ERROR');
    }
  };

  const stopLiveSession = () => {
    if (sessionRef.current) sessionRef.current.close();
    setIsLive(false);
    setStatus('IDLE');
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 50 }}
            className="absolute bottom-24 right-0 w-[400px] glass-card rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border-l-2 border-l-[#bef264]"
          >
            {/* Terminal Header */}
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-white">NEURAL_PROXY_V2.0</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 border border-white/20" />
                <button onClick={toggleAssistant} className="text-white/40 hover:text-[#bef264]">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Display / Logs */}
            <div className="p-6 h-[350px] overflow-y-auto font-mono text-[11px] space-y-3 bg-[#020617]/80">
              <div className="text-slate-500 mb-6">
                [SYSTEM]: ESTABLISHING SECURE HANDSHAKE...<br />
                [SYSTEM]: LOADING_PERSONALITY_CORE...<br />
                [SYSTEM]: PROXY_ONLINE. STATUS: {status}
              </div>
              
              {transcription.map((line, i) => (
                <div key={i} className={`${line.includes('[AI]') ? 'text-[#bef264]' : 'text-slate-400'}`}>
                  {line}
                </div>
              ))}
              
              {isLive && (
                <div className="flex items-center gap-2 text-[#bef264] animate-pulse mt-4">
                  <Scan size={12} /> LISTENING_FOR_INPUT...
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-6 border-t border-white/5">
              <button
                onClick={isLive ? stopLiveSession : startLiveSession}
                className={`w-full py-4 font-heading text-[10px] font-black tracking-[0.3em] flex items-center justify-center gap-3 transition-all ${
                  isLive 
                  ? 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/30' 
                  : 'bg-[#bef264] text-slate-950 shadow-[0_0_20px_rgba(190,242,100,0.2)] hover:shadow-[0_0_30px_rgba(190,242,100,0.4)]'
                }`}
              >
                {isLive ? <><MicOff size={16} /> DISCONNECT_LINK</> : <><Mic size={16} /> SYNC_VOICE_MODULE</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAssistant}
        className={`w-16 h-16 glass-card rounded-sm flex items-center justify-center transition-all group ${
          isOpen ? 'border-[#bef264] shadow-[0_0_25px_rgba(190,242,100,0.3)]' : 'hover:border-[#bef264]'
        }`}
      >
        {isOpen ? (
          <Terminal size={24} className="text-[#bef264]" />
        ) : (
          <div className="relative">
            <Zap size={24} className="text-white group-hover:text-[#bef264]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#bef264] rounded-full shadow-[0_0_10px_#bef264]" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIAssistant;
