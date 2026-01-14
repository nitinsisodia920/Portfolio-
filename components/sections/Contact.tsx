
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, Activity, Shield } from 'lucide-react';
import { Theme } from '../../types';

const Contact: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-12 lg:pl-32">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] text-accent font-bold">
          <Activity size={14} /> // ESTABLISHING_COMMS_CHANNEL
        </div>
        <h2 className={`font-heading text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
          SECURE <span className={`${isDark ? 'text-white/20' : 'text-slate-200'}`}>UPLINK</span>
        </h2>
        <p className={`${isDark ? 'text-slate-500' : 'text-slate-600'} font-light max-w-xl italic`}>
          Initiate direct communication protocol for enterprise collaborations or 
          technical architectures.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start pr-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className={`glass-card p-10 ${isDark ? 'bg-slate-900/20' : 'bg-white'}`}>
            <h3 className={`font-heading text-sm font-black mb-10 ${isDark ? 'text-white' : 'text-slate-900'} italic tracking-widest`}>COMMS_METADATA</h3>
            <div className="space-y-10">
              {[
                { icon: <Mail size={18} className="text-accent" />, label: 'UPLINK_ADDR', value: 'sdnitin920@gmail.com' },
                { icon: <MapPin size={18} className="text-accent-secondary" />, label: 'LOC_COORD', value: 'SF_BAY_AREA_REMOTE' },
                { icon: <Phone size={18} className="text-green-500" />, label: 'VOICE_LINK', value: '+1_555_NITIN_DEV' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className={`p-4 ${isDark ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'} border rounded-sm group-hover:border-accent transition-all`}>{item.icon}</div>
                  <div>
                    <div className={`font-mono text-[9px] ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-widest mb-1 italic font-bold`}>{item.label}</div>
                    <div className={`font-mono text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-800'} font-bold uppercase tracking-tighter`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`glass-card p-10 ${isDark ? 'bg-slate-950/30' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={16} className="text-accent" />
              <h4 className={`font-heading text-[10px] font-black ${isDark ? 'text-white' : 'text-slate-900'} italic tracking-[0.2em]`}>AVAILABILITY_MATRIX</h4>
            </div>
            <p className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-500'} uppercase tracking-widest leading-relaxed font-bold`}>
              MON_FRI: 09:00 - 18:00_PST <br />
              HIGH_PRIORITY_RESPONSE_MODE: ACTIVE
            </p>
            <div className={`mt-6 w-full h-1 ${isDark ? 'bg-slate-900' : 'bg-slate-200'} overflow-hidden relative`}>
              <div className="absolute inset-0 bg-accent w-[80%] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className={`glass-card p-10 lg:p-16 ${isDark ? 'border-white/10' : 'border-slate-200 bg-white'}`}>
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <div className={`inline-flex items-center justify-center p-6 bg-accent/10 border border-accent/30 rounded-full mb-10 shadow-[0_0_30px_rgba(190,242,100,0.2)]`}>
                  <CheckCircle size={56} className="text-accent" />
                </div>
                <h3 className={`font-heading text-3xl font-black mb-6 italic tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>HANDSHAKE_ESTABLISHED</h3>
                <p className={`font-mono text-[11px] ${isDark ? 'text-slate-500' : 'text-slate-600'} uppercase tracking-widest max-w-sm mx-auto leading-relaxed mb-12 font-bold`}>
                  [SYSTEM]: DATA_TRANSMISSION_COMPLETE. ENCRYPTED_INQUIRY_RECEIVED. NITIN_WILL_SYNC_WITHIN_24H.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className={`px-10 py-4 ${isDark ? 'bg-slate-950 border-white/10' : 'bg-slate-50 border-slate-200'} border font-heading text-[10px] font-black italic text-accent hover:border-accent transition-all tracking-[0.3em]`}
                >
                  NEW_TRANSMISSION
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-[0.4em] italic pl-1`}>NAME_ID</label>
                    <input 
                      required
                      type="text" 
                      placeholder="ENTER_NAME"
                      className={`w-full ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-sm px-6 py-5 font-mono text-xs focus:outline-none focus:border-accent focus:bg-accent/5 transition-all`}
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-[0.4em] italic pl-1`}>NET_ADDR</label>
                    <input 
                      required
                      type="email" 
                      placeholder="ENTER_EMAIL"
                      className={`w-full ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-sm px-6 py-5 font-mono text-xs focus:outline-none focus:border-accent focus:bg-accent/5 transition-all`}
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-[0.4em] italic pl-1`}>SUBJECT_VEC</label>
                  <input 
                    required
                    type="text" 
                    placeholder="ENTER_SUBJECT"
                    className={`w-full ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-sm px-6 py-5 font-mono text-xs focus:outline-none focus:border-accent focus:bg-accent/5 transition-all`}
                    value={formState.subject}
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className={`font-mono text-[9px] font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-[0.4em] italic pl-1`}>PAYLOAD_DATA</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="DESCRIBE_OBJECTIVE_..."
                    className={`w-full ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border rounded-sm px-6 py-5 font-mono text-xs focus:outline-none focus:border-accent focus:bg-accent/5 transition-all resize-none`}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-6 bg-accent text-slate-950 font-heading text-[11px] font-black tracking-[0.5em] flex items-center justify-center gap-3 transition-all hover:bg-slate-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(190,242,100,0.2)] hover:shadow-[0_0_40px_rgba(190,242,100,0.4)]"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'INITIATE_UPLINK'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
