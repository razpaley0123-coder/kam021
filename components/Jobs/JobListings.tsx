'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, Users, Clock, Star, Heart, Share2, TrendingUp, Award, Zap, Building2, DollarSign, Search, Filter, Bookmark, Plus, User, Settings, LogOut, Grid, List, ChevronDown, ChevronRight, Sparkles, MessageCircle, Camera, Send } from 'lucide-react'
import { useState } from 'react'

interface JobCard {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  applicants: number
  matchScore: number
  description: string
  tags: string[]
  postedDate: string
  isFeatured: boolean
}

const mockJobs: JobCard[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$180K - $240K',
    type: 'Full-time',
    applicants: 247,
    matchScore: 96,
    description: 'We are seeking a Senior Full Stack Developer to join our engineering team. You will be responsible for building scalable web applications using modern technologies. The ideal candidate has 5+ years of experience with React, Node.js, and cloud platforms. You will work on high-impact projects that serve millions of users globally.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    postedDate: '2 days ago',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    company: 'Meta',
    location: 'Menlo Park, CA',
    salary: '$200K - $280K',
    type: 'Full-time',
    applicants: 189,
    matchScore: 89,
    description: 'Join our AI Research team to work on cutting-edge machine learning models and systems. You will design and implement ML pipelines, optimize model performance, and collaborate with product teams. Strong experience with Python, TensorFlow/PyTorch, and ML Ops required. PhD or Masters in Computer Science preferred.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'ML Ops'],
    postedDate: '5 days ago',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: '$150K - $210K',
    type: 'Full-time',
    applicants: 156,
    matchScore: 85,
    description: 'Lead product strategy and development initiatives for our e-commerce platform. You will define product roadmaps, analyze market trends, and work cross-functionally with engineering, design, and marketing teams. 3+ years of product management experience in tech required. Strong analytical and leadership skills essential.',
    tags: ['Product Strategy', 'Analytics', 'Leadership'],
    postedDate: '1 week ago',
    isFeatured: false,
  },
]

export default function JobListings() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [filterType, setFilterType] = useState<'all' | 'featured'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showAIChat, setShowAIChat] = useState(false)
  const [expandedFilters, setExpandedFilters] = useState<string[]>(['jobType'])
  const [aiMatchOnly, setAiMatchOnly] = useState(false)
  const [salaryRange, setSalaryRange] = useState([0, 300])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    )
  }

  const filteredJobs = filterType === 'featured' ? mockJobs.filter((j) => j.isFeatured) : mockJobs

  const toggleFilter = (filter: string) => {
    setExpandedFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const aiRecommendedJobs = mockJobs.filter(j => j.matchScore >= 90)

  return (
    <div className="min-h-screen bg-[#02010A] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#FF008A]/20 to-transparent rounded-full filter blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-[200px]"></div>
      </div>

      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-[#02010A]/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#FF008A] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF008A] bg-clip-text text-transparent">HireGo AI</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by role, company, or skill"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all"
              >
                <Filter className="w-4 h-4" />
                AI Filter
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all"
              >
                <Bookmark className="w-4 h-4" />
                Saved Jobs
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#FF008A] rounded-lg text-white font-semibold shadow-lg shadow-[#00D4FF]/50"
              >
                <Plus className="w-4 h-4" />
                Post a Job
              </motion.button>

              {/* Profile Menu */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#FF008A] flex items-center justify-center text-white font-bold"
                >
                  R
                </motion.button>
                
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 bg-[#0a0e27]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4 border-b border-white/10">
                        <p className="text-white font-semibold">Rahul Kumar</p>
                        <p className="text-gray-400 text-sm">AI Match: 90% 🔥</p>
                      </div>
                      <div className="p-2">
                        {[
                          { icon: User, label: 'Dashboard' },
                          { icon: Bookmark, label: 'Resume' },
                          { icon: Settings, label: 'Settings' },
                        ].map((item, i) => (
                          <button
                            key={i}
                            className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition-all"
                          >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* AI Recommendation Bar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 bg-gradient-to-r from-[#00D4FF]/10 via-purple-500/10 to-[#FF008A]/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-[#FF008A]/5 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#00D4FF]" />
              <p className="text-white font-semibold">Rahul, based on your video resume and skills, here are {aiRecommendedJobs.length} job matches 🚀</p>
            </div>
            
            {/* Horizontal Scroll Cards */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {aiRecommendedJobs.map((job) => (
                <motion.div
                  key={job.id}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="min-w-[300px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 cursor-pointer hover:border-[#00D4FF]/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#FF008A] flex items-center justify-center text-white font-bold text-lg">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{job.title}</h4>
                      <p className="text-gray-400 text-xs">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#00D4FF] font-bold text-sm">{job.salary}</span>
                    <span className="px-2 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full text-xs font-semibold">
                      {job.matchScore}% Match
                    </span>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-[#00D4FF] to-[#FF008A] rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View Toggle & Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/50'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              <Grid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/50'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              <List className="w-5 h-5" />
            </motion.button>
            <span className="ml-4 text-gray-400 text-sm">Grid ↔ List</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredJobs.length}</span> jobs
          </div>
        </div>

        {/* Main Content: Filters + Jobs */}
        <div className="flex gap-6">

          {/* Left Filter Panel */}
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-80 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Filters</h3>
                
                {/* Job Type */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleFilter('jobType')}
                    className="w-full flex items-center justify-between text-white font-semibold mb-2"
                  >
                    <span>Job Type</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters.includes('jobType') ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedFilters.includes('jobType') && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2"
                      >
                        {['Full-time', 'Remote', 'Internship', 'Contract'].map((type) => (
                          <label key={type} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white">
                            <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                            {type}
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Salary Range */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleFilter('salary')}
                    className="w-full flex items-center justify-between text-white font-semibold mb-2"
                  >
                    <span>Salary Range</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters.includes('salary') ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedFilters.includes('salary') && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <input
                          type="range"
                          min="0"
                          max="300"
                          className="w-full accent-[#00D4FF]"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>$0K</span>
                          <span>$300K</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Experience Level */}
                <div className="mb-4">
                  <p className="text-white font-semibold mb-2">Experience Level</p>
                  <div className="space-y-2">
                    {['Entry', 'Mid', 'Senior', 'Lead'].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white">
                        <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <p className="text-white font-semibold mb-2">Location</p>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50"
                  />
                </div>

                {/* AI Match Toggle */}
                <div className="pt-4 border-t border-white/10">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="text-white font-semibold">AI Match %</p>
                      <p className="text-gray-400 text-xs">Show 80%+ matches only</p>
                    </div>
                    <div
                      onClick={() => setAiMatchOnly(!aiMatchOnly)}
                      className={`relative w-12 h-6 rounded-full transition-all ${
                        aiMatchOnly ? 'bg-gradient-to-r from-[#00D4FF] to-[#FF008A]' : 'bg-white/20'
                      }`}
                    >
                      <motion.div
                        animate={{ x: aiMatchOnly ? 24 : 2 }}
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Job Cards Grid */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}
            >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all overflow-hidden group relative"
              style={{
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.1)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="p-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  {/* Job Header */}
                  <div className="flex-1 relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0 text-xl font-bold text-white shadow-lg shadow-cyan-500/50"
                      >
                        {job.company.charAt(0)}
                      </motion.div>
                      <div className="flex-1">
                        {job.isFeatured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-block mb-2"
                          >
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </span>
                          </motion.div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                        <p className="text-cyan-400 font-semibold mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                          <span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg">
                            <MapPin className="w-3 h-3 text-cyan-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg">
                            <Briefcase className="w-3 h-3 text-purple-400" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg">
                            <Clock className="w-3 h-3 text-green-400" />
                            {job.postedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Stats */}
                  <div className="flex lg:flex-col gap-3 relative z-10">
                    {/* Salary */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-3 flex-1"
                    >
                      <p className="text-gray-300 text-xs font-medium mb-1 flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        Salary
                      </p>
                      <p className="text-lg font-bold text-green-400">{job.salary}</p>
                    </motion.div>

                    {/* Match Score */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-3 flex-1 flex items-center gap-2"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
                          <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="4" />
                          <motion.circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            stroke="url(#gradient-${job.id})"
                            strokeWidth="4"
                            strokeDasharray="163.36"
                            initial={{ strokeDashoffset: 163.36 }}
                            animate={{ strokeDashoffset: 163.36 * (1 - job.matchScore / 100) }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id={`gradient-${job.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-cyan-400">{job.matchScore}%</p>
                        <p className="text-xs text-gray-400">Match</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 relative z-10 line-clamp-3">{job.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {job.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-4 border-t border-cyan-500/20 relative z-10">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">
                      <span className="font-bold text-white">{job.applicants}</span> applicants
                    </span>
                  </div>

                  <div className="flex gap-2 w-full md:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSaveJob(job.id)}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 border-2 ${
                        savedJobs.includes(job.id)
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 border-red-500 text-white shadow-lg shadow-red-500/50'
                          : 'border-cyan-500/40 text-gray-300 hover:border-red-400 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                      {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold border-2 border-cyan-500/40 text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-cyan-500/50 transition-all"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Glowing Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left"
                style={{
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
                }}
              ></motion.div>
            </motion.div>
          ))}
            </motion.div>
            
            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-12"
            >
              <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all">
                Load More Jobs
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating AI Assistant */}
      <AnimatePresence>
        {!showAIChat && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowAIChat(true)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#FF008A] rounded-full shadow-2xl shadow-[#00D4FF]/50 flex items-center justify-center"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Chat Overlay */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-[#0a0e27]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#00D4FF]/20 to-[#FF008A]/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-white font-bold">HireGo AI Assistant</h3>
              </div>
              <button
                onClick={() => setShowAIChat(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white text-sm mb-3">
                  👋 Hi! Need help choosing the right job? Upload your video resume and I'll shortlist perfect matches for you.
                </p>
                <button className="w-full py-2 bg-gradient-to-r from-[#00D4FF] to-[#FF008A] rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all">
                  <Camera className="w-4 h-4" />
                  Upload Video Resume
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400 text-xs">Quick suggestions:</p>
                {['Match me with top companies', 'Show remote jobs', 'Best fit for my skills'].map((msg, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-[#00D4FF]/50 transition-all"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50"
                />
                <button className="p-2 bg-gradient-to-r from-[#00D4FF] to-[#FF008A] rounded-lg text-white hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
