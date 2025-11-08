'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen bg-[#0a0e27] text-white px-4 py-20 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]"
        >
          {/* Left Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Meet the Future of Hiring —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Powered by AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                HireGo AI connects companies with job-ready candidates within 30 minutes. The fastest, recruitment engine — built for the next generation of hiring.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/registration/candidate"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 transition-all"
              >
                <span>Get Candidates Instantly</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/dashboard/employer"
                className="px-8 py-4 bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 rounded-full font-bold text-cyan-400 flex items-center justify-center gap-2 transition-all"
              >
                <span>Book a Demo</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual - 3D Globe with Candidates */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Main globe container with perspective frame */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating frame with gradient border */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[500px] h-[400px] rounded-3xl border-2 border-transparent bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 p-[2px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))',
                }}
              >
                <div className="w-full h-full bg-[#0a0e27]/80 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden">
                  {/* Globe */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.4), rgba(8, 145, 178, 0.2))',
                      boxShadow: '0 0 80px rgba(6, 182, 212, 0.5), inset 0 0 40px rgba(6, 182, 212, 0.3)',
                    }}
                  >
                    {/* Globe grid lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
                      <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
                      <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
                    </svg>
                  </motion.div>

                  {/* Candidate cards grid on the right */}
                  <div className="absolute right-6 top-6 bottom-6 w-48 grid grid-cols-2 gap-2">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg p-2 border border-cyan-500/30 backdrop-blur-sm"
                      >
                        <div className="w-full aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-md mb-1"></div>
                        <div className="h-1 w-3/4 bg-cyan-400/30 rounded"></div>
                        <div className="h-1 w-1/2 bg-cyan-400/20 rounded mt-1"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connecting lines effect */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="40%"
                        y1="50%"
                        x2={`${65 + (i % 2) * 15}%`}
                        y2={`${20 + i * 12}%`}
                        stroke="rgba(6, 182, 212, 0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>

              {/* Orbital ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[550px] h-[450px] border border-cyan-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
