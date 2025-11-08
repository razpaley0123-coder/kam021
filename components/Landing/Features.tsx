'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Video } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Candidate Screening:',
      description: 'Automatically filters rates profiles using video video + data intelligence.',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Instant Match Engine:',
      description: 'Matches employers with pre-pre-screened candidates in under 30 minutes.',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Video,
      title: 'Video Resume Platform',
      description: 'Candidates express their personality, not just skills.',
      color: 'from-cyan-400 to-cyan-600',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#0a0e27] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyan-500/20 rounded-full filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The AI Hiring Engine that Never Sleeps
          </h2>
          <p className="text-xl text-gray-300">
            Powered multi-agent intelligence — automating, screening, and selection.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-b from-slate-900/50 to-slate-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border border-cyan-400/40 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
