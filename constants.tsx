
import React from 'react';
import { Layout, Server, Database, Cpu, Globe, Shield, Code2, Zap, Rocket, Terminal, Layers, Lightbulb, Users } from 'lucide-react';
import { Project, SkillCategory, Service, BlogPost } from './types';

export const ACHIEVEMENTS = [
  { label: 'Fortune 500 Clients', value: '12+' },
  { label: 'Open Source Contribs', value: '500+' },
  { label: 'Lines of Clean Code', value: '1M+' },
  { label: 'Years Experience', value: '8+' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AeroCommerce AI (v2.0)',
    description: 'A revolutionary e-commerce ecosystem that utilizes advanced machine learning to predict user behavior and provide hyper-personalized shopping experiences. This version introduced a sub-10ms recommendation engine that analyzes click-stream data in real-time.',
    features: [
      'Real-time inventory synchronization across global edge nodes using CRDTs',
      'AI-driven recommendation engine with 94% prediction accuracy',
      'Serverless microservices architecture with automated horizontal scaling',
      'Dynamic pricing algorithms based on demand, supply, and user loyalty'
    ],
    technologies: ['React', 'Node.js', 'TensorFlow.js', 'AWS Lambda', 'DynamoDB', 'Redis'],
    role: 'Lead Full Stack Architect & ML Engineer',
    outcome: 'Increased conversion rates by 42% for the pilot client and reduced infrastructure costs by 30% through intelligent resource allocation.',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Nebula Real-Time Analytics',
    description: 'A high-performance data visualization suite for monitoring global satellite networks. It processes millions of data points per second with sub-100ms latency for critical real-time decision making in aerospace operations.',
    features: [
      'Custom D3.js interactive visualizations with GPU-accelerated rendering',
      'WebSocket-based live streaming data updates with backpressure handling',
      'Multi-tenant secure data isolation with end-to-end encryption',
      'WASM-powered trajectory calculations for sub-orbital flight paths'
    ],
    technologies: ['TypeScript', 'Next.js', 'Rust', 'WebAssembly', 'InfluxDB', 'Kafka'],
    role: 'Senior Backend & Systems Engineer',
    outcome: 'Adopted by two major aerospace firms to monitor LEO satellite constellations, reducing system failures by 15% through predictive maintenance.',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Sentinel Cyber-Shield Platform',
    description: 'An automated security auditing tool designed for modern DevOps pipelines. It proactively identifies vulnerabilities in codebases and cloud infrastructure before they reach production using a combination of static analysis and LLM-based reasoning.',
    features: [
      'Static & Dynamic analysis (SAST/DAST) integration into CI/CD',
      'Cloud posture management (CSPM) for multi-cloud environments',
      'Automated remediation suggestions powered by GPT-4 and custom models',
      'Real-time threat detection and automated blocking of malicious IPs'
    ],
    technologies: ['Python', 'FastAPI', 'Kubernetes', 'Terraform', 'OpenAI API', 'Go'],
    role: 'Lead Security Software Engineer',
    outcome: 'Identified over 5,000 critical vulnerabilities across 200+ microservices during the first month of enterprise deployment.',
    image: 'https://picsum.photos/800/600?random=3'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Architecture',
    skills: [
      { name: 'React / Next.js', level: 98, description: 'Mastery of server components, concurrent rendering, and intricate state management patterns.' },
      { name: 'TypeScript', level: 95, description: 'Expertise in type-level programming, advanced generics, and building robust design systems.' },
      { name: 'Three.js / WebGL', level: 85, description: 'Creating immersive 3D experiences and custom shaders for high-end visual storytelling.' },
      { name: 'Performance Optimization', level: 92, description: 'Specialized in Core Web Vitals, critical path rendering, and bundle size reduction.' }
    ]
  },
  {
    name: 'Systems & Cloud',
    skills: [
      { name: 'Rust / Go', level: 88, description: 'Building high-throughput, memory-safe backend services and CLI tools.' },
      { name: 'Kubernetes & Docker', level: 90, description: 'Container orchestration, microservices management, and infrastructure as code.' },
      { name: 'AWS / GCP Solutions', level: 87, description: 'Certified Solutions Architect level expertise in serverless and managed services.' },
      { name: 'Distributed Databases', level: 85, description: 'Scalability strategies for SQL and NoSQL databases, including sharding and replication.' }
    ]
  },
  {
    name: 'AI & Data Intelligence',
    skills: [
      { name: 'LLM Engineering', level: 92, description: 'Retrieval Augmented Generation (RAG), fine-tuning models, and prompt engineering.' },
      { name: 'Data Engineering', level: 84, description: 'Building ETL pipelines, data lakes, and real-time stream processing systems.' },
      { name: 'MLOps', level: 80, description: 'Model deployment, monitoring, and automated retraining workflows.' },
      { name: 'Mathematical Logic', level: 88, description: 'Strong foundation in discrete math and algorithm design for complex logic.' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Enterprise Web Strategy',
    description: 'I architect and build premium web applications that prioritize enterprise-scale performance, accessibility, and security. My approach involves a "Security-by-Design" philosophy coupled with "Performance-First" engineering.',
    benefits: ['Sub-second load times worldwide', 'SEO-first architecture for maximum reach', 'Full compliance with WCAG 2.1 accessibility', 'Bulletproof codebase for long-term maintenance'],
    icon: <Globe className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Scalable Cloud Architecture',
    description: 'Leveraging cloud-native technologies to build resilient, self-healing, and automated infrastructure. I help businesses transition from monolithic bottlenecks to flexible, cost-efficient microservices.',
    benefits: ['Global auto-scaling infrastructure', 'Zero-downtime CI/CD deployment pipelines', 'Infrastructure cost optimization (up to 40% reduction)', 'Robust disaster recovery and data redundancy'],
    icon: <Server className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'AI-Driven Automation',
    description: 'I transform business workflows by integrating state-of-the-art AI models into existing systems. This is more than just a chatbot; it is about intelligent decision-making and autonomous task execution.',
    benefits: ['Hyper-efficient intelligent automation', 'Predictive analytics for market trends', 'Enhanced AI-human collaboration tools', 'Significant reduction in manual error and operational costs'],
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Paradox of Choice in Modern Web Frameworks',
    excerpt: 'A critical look at the current state of frontend development. Why sticking to fundamentals often yields better long-term results than chasing the latest hype.',
    date: 'Oct 15, 2024',
    readTime: '10 min read'
  },
  {
    id: 'b2',
    title: 'Architecting for the Edge: A New Paradigm',
    excerpt: 'Exploring the shift from centralized cloud computing to decentralized edge execution. How to reduce latency to absolute minimums.',
    date: 'Oct 02, 2024',
    readTime: '7 min read'
  },
  {
    id: 'b3',
    title: 'Rust for Frontend Developers: Why You Should Care',
    excerpt: 'Rust is making its way into the JS ecosystem. This guide explains how WASM and Rust tools like SWC are changing the game.',
    date: 'Sept 20, 2024',
    readTime: '12 min read'
  }
];
