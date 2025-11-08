export type JobCategory = 'tech' | 'healthcare' | 'finance' | 'marketing' | 'sales'

export interface Metric {
  id: string
  label: string
  value: string
  icon: string
  color: string
}

export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  action: string
  color: string
}

export interface ResourceLink {
  id: string
  title: string
  url: string
  icon: string
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: string
  subcategory: string
  postedDate: string
  featured?: boolean
}

export interface DashboardConfig {
  categoryName: string
  categoryIcon: string
  backgroundColor: string
  industryInsights: string
  metrics: Metric[]
  tools: Tool[]
  resourceLinks: ResourceLink[]
  jobs: Job[]
}

export const DASHBOARD_CONFIGS: Record<JobCategory, DashboardConfig> = {
  tech: {
    categoryName: 'Technology & Engineering',
    categoryIcon: '💻',
    backgroundColor: 'from-blue-900 to-indigo-900',
    industryInsights: 'Growing demand for full-stack developers, AI/ML engineers, and cloud specialists',
    metrics: [
      { id: '1', label: 'Avg Salary', value: '$95K - $180K', icon: '💰', color: 'from-green-500 to-emerald-500' },
      { id: '2', label: 'Job Growth', value: '+22%', icon: '📈', color: 'from-blue-500 to-cyan-500' },
      { id: '3', label: 'Remote Jobs', value: '75%', icon: '🏠', color: 'from-purple-500 to-pink-500' },
      { id: '4', label: 'Hot Skills', value: 'React, Python', icon: '🔥', color: 'from-orange-500 to-red-500' }
    ],
    tools: [
      { id: '1', name: 'Skill Assessment', description: 'Test your coding skills', icon: '🎯', action: '/assessment', color: 'from-blue-600 to-blue-800' },
      { id: '2', name: 'Portfolio Builder', description: 'Showcase your projects', icon: '🎨', action: '/profile', color: 'from-purple-600 to-purple-800' }
    ],
    resourceLinks: [
      { id: '1', title: 'GitHub Jobs', url: 'https://github.com/jobs', icon: '💼' },
      { id: '2', title: 'Stack Overflow', url: 'https://stackoverflow.com/jobs', icon: '📚' },
      { id: '3', title: 'LeetCode Practice', url: 'https://leetcode.com', icon: '🧠' },
      { id: '4', title: 'Tech Crunch', url: 'https://techcrunch.com', icon: '📰' }
    ],
    jobs: [
      { id: '1', title: 'Senior Full Stack Developer', company: 'TechCorp', location: 'Remote', salary: '$120K - $180K', type: 'Full-time', subcategory: 'Web Development', postedDate: '2 days ago', featured: true },
      { id: '2', title: 'AI/ML Engineer', company: 'DataAI Inc', location: 'San Francisco, CA', salary: '$140K - $200K', type: 'Full-time', subcategory: 'AI/ML', postedDate: '1 day ago', featured: true }
    ]
  },
  healthcare: {
    categoryName: 'Healthcare & Medical',
    categoryIcon: '⚕️',
    backgroundColor: 'from-green-900 to-teal-900',
    industryInsights: 'High demand for nurses, healthcare administrators, and telemedicine specialists',
    metrics: [
      { id: '1', label: 'Avg Salary', value: '$65K - $120K', icon: '💰', color: 'from-green-500 to-emerald-500' },
      { id: '2', label: 'Job Growth', value: '+16%', icon: '📈', color: 'from-teal-500 to-cyan-500' },
      { id: '3', label: 'Certification', value: 'Required', icon: '🎓', color: 'from-blue-500 to-indigo-500' },
      { id: '4', label: 'Demand', value: 'Very High', icon: '⚡', color: 'from-yellow-500 to-orange-500' }
    ],
    tools: [
      { id: '1', name: 'License Verification', description: 'Check requirements', icon: '✅', action: '/profile', color: 'from-green-600 to-green-800' },
      { id: '2', name: 'Hospital Network', description: 'Connect with facilities', icon: '🏥', action: '/network', color: 'from-teal-600 to-teal-800' }
    ],
    resourceLinks: [
      { id: '1', title: 'Health eCareers', url: 'https://healthecareers.com', icon: '💼' },
      { id: '2', title: 'Nurse.com', url: 'https://nurse.com', icon: '👨‍⚕️' },
      { id: '3', title: 'AMA Resources', url: 'https://ama-assn.org', icon: '📚' },
      { id: '4', title: 'Healthcare IT News', url: 'https://healthcareitnews.com', icon: '📰' }
    ],
    jobs: [
      { id: '1', title: 'Registered Nurse', company: 'City Hospital', location: 'New York, NY', salary: '$70K - $95K', type: 'Full-time', subcategory: 'Nursing', postedDate: '3 days ago' },
      { id: '2', title: 'Medical Director', company: 'HealthPlus', location: 'Boston, MA', salary: '$180K - $250K', type: 'Full-time', subcategory: 'Administration', postedDate: '1 week ago' }
    ]
  },
  finance: {
    categoryName: 'Finance & Accounting',
    categoryIcon: '💼',
    backgroundColor: 'from-emerald-900 to-green-900',
    industryInsights: 'Strong growth in fintech, financial analysis, and investment banking roles',
    metrics: [
      { id: '1', label: 'Avg Salary', value: '$75K - $150K', icon: '💰', color: 'from-green-500 to-emerald-500' },
      { id: '2', label: 'Job Growth', value: '+8%', icon: '📈', color: 'from-blue-500 to-cyan-500' },
      { id: '3', label: 'Remote Jobs', value: '45%', icon: '🏠', color: 'from-purple-500 to-pink-500' },
      { id: '4', label: 'Top Certs', value: 'CPA, CFA', icon: '🏆', color: 'from-yellow-500 to-orange-500' }
    ],
    tools: [
      { id: '1', name: 'Financial Calculator', description: 'Salary & benefits', icon: '🧮', action: '/jobs', color: 'from-emerald-600 to-emerald-800' },
      { id: '2', name: 'Excel Skills Test', description: 'Prove your expertise', icon: '📊', action: '/assessment', color: 'from-green-600 to-green-800' }
    ],
    resourceLinks: [
      { id: '1', title: 'eFinancialCareers', url: 'https://efinancialcareers.com', icon: '💼' },
      { id: '2', title: 'CFA Institute', url: 'https://cfainstitute.org', icon: '🎓' },
      { id: '3', title: 'Bloomberg', url: 'https://bloomberg.com', icon: '📰' },
      { id: '4', title: 'Investopedia', url: 'https://investopedia.com', icon: '📚' }
    ],
    jobs: [
      { id: '1', title: 'Financial Analyst', company: 'Goldman Sachs', location: 'New York, NY', salary: '$85K - $120K', type: 'Full-time', subcategory: 'Analysis', postedDate: '4 days ago' },
      { id: '2', title: 'Senior Accountant', company: 'KPMG', location: 'Chicago, IL', salary: '$75K - $100K', type: 'Full-time', subcategory: 'Accounting', postedDate: '2 days ago' }
    ]
  },
  marketing: {
    categoryName: 'Marketing & Creative',
    categoryIcon: '🎨',
    backgroundColor: 'from-pink-900 to-rose-900',
    industryInsights: 'Digital marketing, content creation, and brand strategy roles are booming',
    metrics: [
      { id: '1', label: 'Avg Salary', value: '$55K - $110K', icon: '💰', color: 'from-green-500 to-emerald-500' },
      { id: '2', label: 'Job Growth', value: '+10%', icon: '📈', color: 'from-pink-500 to-rose-500' },
      { id: '3', label: 'Remote Jobs', value: '68%', icon: '🏠', color: 'from-purple-500 to-pink-500' },
      { id: '4', label: 'Hot Skills', value: 'SEO, Social', icon: '🔥', color: 'from-orange-500 to-red-500' }
    ],
    tools: [
      { id: '1', name: 'Portfolio Showcase', description: 'Display your work', icon: '🖼️', action: '/profile', color: 'from-pink-600 to-pink-800' },
      { id: '2', name: 'Campaign Builder', description: 'Create mock campaigns', icon: '📢', action: '/jobs', color: 'from-rose-600 to-rose-800' }
    ],
    resourceLinks: [
      { id: '1', title: 'MarketingHire', url: 'https://marketinghire.com', icon: '💼' },
      { id: '2', title: 'HubSpot Academy', url: 'https://academy.hubspot.com', icon: '🎓' },
      { id: '3', title: 'Moz SEO', url: 'https://moz.com', icon: '📚' },
      { id: '4', title: 'AdWeek', url: 'https://adweek.com', icon: '📰' }
    ],
    jobs: [
      { id: '1', title: 'Digital Marketing Manager', company: 'BrandX', location: 'Remote', salary: '$70K - $95K', type: 'Full-time', subcategory: 'Digital Marketing', postedDate: '1 day ago', featured: true },
      { id: '2', title: 'Content Strategist', company: 'MediaCo', location: 'Los Angeles, CA', salary: '$65K - $85K', type: 'Full-time', subcategory: 'Content', postedDate: '5 days ago' }
    ]
  },
  sales: {
    categoryName: 'Sales & Business Development',
    categoryIcon: '📊',
    backgroundColor: 'from-orange-900 to-amber-900',
    industryInsights: 'B2B sales, SaaS account executives, and SDR roles with high commission potential',
    metrics: [
      { id: '1', label: 'Base Salary', value: '$50K - $90K', icon: '💰', color: 'from-green-500 to-emerald-500' },
      { id: '2', label: 'OTE', value: '$100K - $250K', icon: '💸', color: 'from-yellow-500 to-orange-500' },
      { id: '3', label: 'Job Growth', value: '+7%', icon: '📈', color: 'from-blue-500 to-cyan-500' },
      { id: '4', label: 'Commission', value: 'High', icon: '🎯', color: 'from-orange-500 to-red-500' }
    ],
    tools: [
      { id: '1', name: 'Sales Pitch Builder', description: 'Practice your pitch', icon: '🎤', action: '/assessment', color: 'from-orange-600 to-orange-800' },
      { id: '2', name: 'Commission Calculator', description: 'Estimate earnings', icon: '💵', action: '/jobs', color: 'from-amber-600 to-amber-800' }
    ],
    resourceLinks: [
      { id: '1', title: 'SalesGravy', url: 'https://salesgravy.com', icon: '💼' },
      { id: '2', title: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com', icon: '🎓' },
      { id: '3', title: 'LinkedIn Sales', url: 'https://business.linkedin.com/sales-solutions', icon: '📚' },
      { id: '4', title: 'Sales Hacker', url: 'https://saleshacker.com', icon: '📰' }
    ],
    jobs: [
      { id: '1', title: 'Account Executive', company: 'SalesForce', location: 'Remote', salary: '$80K - $200K OTE', type: 'Full-time', subcategory: 'SaaS Sales', postedDate: '2 days ago', featured: true },
      { id: '2', title: 'Business Development Rep', company: 'Zoom', location: 'San Jose, CA', salary: '$55K - $110K OTE', type: 'Full-time', subcategory: 'BDR', postedDate: '3 days ago' }
    ]
  }
}

export function getDashboardConfig(category: JobCategory): DashboardConfig {
  return DASHBOARD_CONFIGS[category]
}

export function getJobsByCategory(category: JobCategory): Job[] {
  return DASHBOARD_CONFIGS[category].jobs
}

export function getTotalJobsInMarket(): number {
  return Object.values(DASHBOARD_CONFIGS).reduce((sum, config) => sum + config.jobs.length, 0) * 1000
}

export function getTotalCompaniesHiring(): number {
  return 5000
}

export function getAverageSalaryRange(category: JobCategory): string {
  return DASHBOARD_CONFIGS[category].metrics[0].value
}
