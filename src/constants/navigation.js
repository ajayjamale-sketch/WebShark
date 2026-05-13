import {
  ChartColumnIncreasing,
  FileSearch,
  Gauge,
  LayoutDashboard,
  ShieldCheck,
  Users2,
  Wrench,
  User,
} from 'lucide-react'

export const appNavigation = [
  { label: 'Dashboard', to: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Website Audit', to: '/app/audit', icon: FileSearch },
  { label: 'SEO Intelligence', to: '/app/seo', icon: ChartColumnIncreasing },
  { label: 'Reports', to: '/app/reports', icon: Gauge },
  { label: 'Security Profile', to: '/app/profile', icon: User },
]

export const agencyNavigation = [
  { label: 'Agency Dashboard', to: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Workspaces', to: '/app/workspaces', icon: Users2 },
  { label: 'Client Audits', to: '/app/audit', icon: FileSearch },
  { label: 'Agency Reports', to: '/app/reports', icon: Gauge },
  { label: 'Agency Profile', to: '/app/profile', icon: User },
]

export const seoNavigation = [
  { label: 'SEO Dashboard', to: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Rankings', to: '/app/seo', icon: ChartColumnIncreasing },
  { label: 'Audit Logs', to: '/app/audit', icon: FileSearch },
  { label: 'Technical Reports', to: '/app/reports', icon: Gauge },
  { label: 'Expert Profile', to: '/app/profile', icon: User },
]

export const adminNavigation = [
  { label: 'Admin Overview', to: '/admin', icon: ShieldCheck },
  { label: 'User Directory', to: '/admin/users', icon: Users2 },
  { label: 'System Reports', to: '/admin/reports', icon: Gauge },
  { label: 'Node Monitoring', to: '/admin/monitoring', icon: Wrench },
]

export const publicLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
]

export const workspaces = [
  { id: 1, name: 'WebShark HQ' },
  { id: 2, name: 'Northstar Commerce' },
  { id: 3, name: 'FinScope Media' },
]

