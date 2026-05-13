export const overviewStats = [
  { id: 'seo', label: 'SEO Score', value: 86, delta: '+4.2%', tone: 'success' },
  { id: 'health', label: 'Website Health', value: 92, delta: '+1.1%', tone: 'success' },
  { id: 'performance', label: 'Performance Score', value: 79, delta: '+2.7%', tone: 'warning' },
  { id: 'uptime', label: 'Uptime Status', value: 99.96, suffix: '%', delta: '+0.02%', tone: 'success' },
]

export const trafficSeries = [
  { month: 'Jan', organic: 21000, paid: 9000, referral: 3400 },
  { month: 'Feb', organic: 24500, paid: 9800, referral: 3900 },
  { month: 'Mar', organic: 26100, paid: 10000, referral: 4300 },
  { month: 'Apr', organic: 28200, paid: 10800, referral: 4500 },
  { month: 'May', organic: 31800, paid: 11100, referral: 4900 },
  { month: 'Jun', organic: 33150, paid: 11400, referral: 5200 },
]

export const keywordSeries = [
  { week: 'W1', top3: 24, top10: 52, top50: 148 },
  { week: 'W2', top3: 26, top10: 55, top50: 151 },
  { week: 'W3', top3: 28, top10: 59, top50: 159 },
  { week: 'W4', top3: 31, top10: 63, top50: 168 },
]

export const performanceRadar = [
  { metric: 'LCP', score: 82 },
  { metric: 'CLS', score: 93 },
  { metric: 'INP', score: 77 },
  { metric: 'TTFB', score: 70 },
  { metric: 'A11y', score: 90 },
  { metric: 'SEO', score: 88 },
]

export const competitorSeries = [
  { month: 'Jan', webshark: 78, competitorA: 72, competitorB: 66 },
  { month: 'Feb', webshark: 80, competitorA: 73, competitorB: 67 },
  { month: 'Mar', webshark: 83, competitorA: 75, competitorB: 68 },
  { month: 'Apr', webshark: 86, competitorA: 77, competitorB: 70 },
  { month: 'May', webshark: 88, competitorA: 79, competitorB: 73 },
  { month: 'Jun', webshark: 90, competitorA: 80, competitorB: 74 },
]

export const backlinkSeries = [
  { source: 'Editorial', value: 1260 },
  { source: 'Guest Post', value: 820 },
  { source: 'Forum', value: 240 },
  { source: 'Directory', value: 180 },
  { source: 'Social', value: 420 },
]

export const alerts = [
  { id: 1, title: 'Core Web Vitals regression on /pricing', level: 'high', time: '5m ago' },
  { id: 2, title: '14 broken links detected from sitemap crawl', level: 'medium', time: '22m ago' },
  { id: 3, title: 'Keyword drop: "enterprise seo suite" moved to #9', level: 'medium', time: '2h ago' },
  { id: 4, title: 'SSL certificate renewal due in 9 days', level: 'low', time: '4h ago' },
]

export const timeline = [
  { id: 1, activity: 'Weekly audit finished with 92 health score', at: 'Today, 09:12' },
  { id: 2, activity: 'Competitor "rankpilot.io" added for tracking', at: 'Today, 07:30' },
  { id: 3, activity: 'AI Assistant generated 5 meta-description fixes', at: 'Yesterday, 17:40' },
  { id: 4, activity: 'Integration synced: Google Search Console', at: 'Yesterday, 13:06' },
]

export const keywordRows = [
  { id: 1, keyword: 'website intelligence platform', volume: 7400, difficulty: 68, position: 4, trend: 'up' },
  { id: 2, keyword: 'ai seo auditing software', volume: 2300, difficulty: 59, position: 7, trend: 'up' },
  { id: 3, keyword: 'competitor backlink analyzer', volume: 1600, difficulty: 65, position: 11, trend: 'down' },
  { id: 4, keyword: 'core web vitals dashboard', volume: 4200, difficulty: 53, position: 6, trend: 'up' },
  { id: 5, keyword: 'saas seo reports', volume: 800, difficulty: 49, position: 12, trend: 'flat' },
]

export const competitorRows = [
  { id: 1, domain: 'rankpilot.io', authority: 78, traffic: 421000, keywords: 4900, backlinks: 31000 },
  { id: 2, domain: 'marketzen.ai', authority: 73, traffic: 358400, keywords: 4300, backlinks: 24800 },
  { id: 3, domain: 'crawlforge.com', authority: 69, traffic: 299000, keywords: 3810, backlinks: 21700 },
]

export const reports = [
  { id: 1, title: 'Monthly Growth Performance', type: 'traffic', generatedAt: '2026-05-10', status: 'ready' },
  { id: 2, title: 'Technical SEO Deep Audit', type: 'audit', generatedAt: '2026-05-08', status: 'ready' },
  { id: 3, title: 'Competitor Gap Snapshot', type: 'competition', generatedAt: '2026-05-05', status: 'processing' },
]

export const integrationCards = [
  { id: 1, name: 'Google Analytics', description: 'Sync sessions, engagement, and conversions.', connected: true, lastSynced: '10 min ago' },
  { id: 2, name: 'Google Search Console', description: 'Track impressions, CTR, and indexing issues.', connected: true, lastSynced: '15 min ago' },
  { id: 3, name: 'WordPress', description: 'Publish AI optimized content directly to your blog.', connected: false, lastSynced: null },
  { id: 4, name: 'API Access', description: 'Use REST endpoints to pull metrics into your stack.', connected: false, lastSynced: null },
]

export const notificationsSeed = [
  { id: 1, title: 'Downtime spike prevented', message: 'Auto fallback region activated for 2 minutes.', priority: 'high', read: false, createdAt: '2026-05-12T08:42:00.000Z' },
  { id: 2, title: 'New backlink opportunity', message: '3 high-authority domains mention your brand.', priority: 'medium', read: false, createdAt: '2026-05-12T07:10:00.000Z' },
  { id: 3, title: 'Subscription renewal', message: 'Growth plan renews on May 30, 2026.', priority: 'low', read: true, createdAt: '2026-05-10T12:00:00.000Z' },
  { id: 4, title: 'Keyword rank gained', message: '"ai seo auditing software" moved from #12 to #7.', priority: 'medium', read: false, createdAt: '2026-05-12T06:00:00.000Z' },
  { id: 5, title: 'Security alert resolved', message: 'SSL certificate auto-renewed successfully.', priority: 'high', read: true, createdAt: '2026-05-11T22:00:00.000Z' },
]

export const pricingPlans = [
  { id: 'starter', name: 'Starter', monthly: 39, yearly: 390, seats: '3 seats', projects: '5 websites' },
  { id: 'growth', name: 'Growth', monthly: 89, yearly: 890, seats: '10 seats', projects: '20 websites', popular: true },
  { id: 'scale', name: 'Scale', monthly: 199, yearly: 1990, seats: 'Unlimited seats', projects: 'Unlimited websites' },
]

export const testimonialCards = [
  {
    id: 1,
    quote: 'WebShark helped us recover 38% organic traffic in one quarter with concrete AI actions.',
    author: 'Maya Freeman',
    role: 'Head of Growth, Northstar Commerce',
  },
  {
    id: 2,
    quote: 'Our content and technical teams finally collaborate in one dashboard instead of ten tabs.',
    author: 'Rohan Silva',
    role: 'SEO Lead, CloudForge Labs',
  },
  {
    id: 3,
    quote: 'The competitor intelligence widgets are the fastest way we monitor market shifts weekly.',
    author: 'Alana Diaz',
    role: 'VP Marketing, FinScope Media',
  },
]

export const faqItems = [
  {
    id: 1,
    q: 'How quickly can WebShark audit my website?',
    a: 'Most audits finish in under 3 minutes for websites under 3,000 URLs with actionable recommendations.',
  },
  {
    id: 2,
    q: 'Can I manage multiple workspaces?',
    a: 'Yes. You can isolate teams, permissions, and billing across unlimited workspaces on Scale plans.',
  },
  {
    id: 3,
    q: 'Do you offer white-label reports?',
    a: 'Growth and Scale plans include branded PDF exports and scheduled email delivery.',
  },
]

// Uptime history (30 days)
export const uptimeHistory = Array.from({ length: 30 }, (_, i) => ({
  day: `May ${i + 1}`,
  uptime: 99.5 + Math.random() * 0.5,
  responseMs: 180 + Math.floor(Math.random() * 120),
}))

// Revenue data for admin
export const revenueData = [
  { month: 'Jan', mrr: 218000, arr: 2616000, newSubs: 42 },
  { month: 'Feb', mrr: 234000, arr: 2808000, newSubs: 55 },
  { month: 'Mar', mrr: 251000, arr: 3012000, newSubs: 61 },
  { month: 'Apr', mrr: 268000, arr: 3216000, newSubs: 48 },
  { month: 'May', mrr: 284000, arr: 3408000, newSubs: 73 },
]

// Plan distribution for admin pie chart
export const planDistribution = [
  { name: 'Starter', value: 1240, color: '#06B6D4' },
  { name: 'Growth', value: 890, color: '#1D4ED8' },
  { name: 'Scale', value: 288, color: '#10B981' },
]

// Lead funnel
export const leadFunnel = [
  { stage: 'Visitors', count: 48200 },
  { stage: 'Signups', count: 12400 },
  { stage: 'Trials', count: 4800 },
  { stage: 'Paid', count: 2418 },
]

// Content score breakdown
export const contentScores = [
  { label: 'Readability', value: 82, color: '#1D4ED8' },
  { label: 'Semantic Coverage', value: 76, color: '#06B6D4' },
  { label: 'Internal Links', value: 64, color: '#F59E0B' },
  { label: 'Keyword Density', value: 88, color: '#10B981' },
  { label: 'Schema Markup', value: 55, color: '#EF4444' },
]

// Blog topic suggestions
export const blogTopics = [
  { id: 1, topic: 'WebShark vs Legacy SEO Suites: 2026 Comparison', intent: 'Bottom-funnel', volume: 2400 },
  { id: 2, topic: 'How to Fix Core Web Vitals in 30 Minutes', intent: 'Tutorial', volume: 6800 },
  { id: 3, topic: 'Complete Guide to Backlink Analysis for SaaS', intent: 'Informational', volume: 4100 },
  { id: 4, topic: 'Technical SEO Checklist for Ecommerce', intent: 'Lead magnet', volume: 3600 },
]

// Admin user list
export const adminUsers = [
  { id: 'u1', name: 'WebShark Admin', email: 'admin@webshark.ai', role: 'admin', workspace: 'WebShark HQ', status: 'active', joined: '2025-01-10' },
  { id: 'u2', name: 'Maya Freeman', email: 'maya@northstar.com', role: 'member', workspace: 'Northstar Commerce', status: 'active', joined: '2025-03-22' },
  { id: 'u3', name: 'Rohan Silva', email: 'rohan@cloudforge.io', role: 'member', workspace: 'CloudForge Labs', status: 'active', joined: '2025-04-05' },
  { id: 'u4', name: 'Alana Diaz', email: 'alana@finscope.com', role: 'member', workspace: 'FinScope Media', status: 'inactive', joined: '2025-05-11' },
  { id: 'u5', name: 'Liam Okafor', email: 'liam@brightcom.co', role: 'member', workspace: 'BrightCom', status: 'active', joined: '2025-06-18' },
]

// Admin workspace list
export const adminWorkspaces = [
  { id: 'w1', name: 'WebShark HQ', owner: 'WebShark Admin', members: 16, plan: 'Scale', createdAt: '2025-01-10' },
  { id: 'w2', name: 'Northstar Commerce', owner: 'Maya Freeman', members: 8, plan: 'Growth', createdAt: '2025-03-22' },
  { id: 'w3', name: 'CloudForge Labs', owner: 'Rohan Silva', members: 5, plan: 'Growth', createdAt: '2025-04-05' },
  { id: 'w4', name: 'FinScope Media', owner: 'Alana Diaz', members: 3, plan: 'Starter', createdAt: '2025-05-11' },
]
