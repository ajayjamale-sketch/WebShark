import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'
import { AppLayout } from '../layouts/AppLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import { AdminRoute } from './AdminRoute'
import { ProtectedRoute } from './ProtectedRoute'
import LoginPage from '../pages/auth/LoginPage'
import SignupPage from '../pages/auth/SignupPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import OtpVerificationPage from '../pages/auth/OtpVerificationPage'
import LandingPage from '../pages/public/LandingPage'
import AboutUsPage from '../pages/public/AboutUsPage'
import DashboardPage from '../pages/app/DashboardPage'
import WebsiteAuditPage from '../pages/app/WebsiteAuditPage'
import AuditProgressPage from '../pages/app/AuditProgressPage'
import SEOIntelligencePage from '../pages/app/SEOIntelligencePage'
import AnalyticsReportsPage from '../pages/app/AnalyticsReportsPage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminUsersPage from '../pages/admin/AdminUsersPage'
import AdminMonitoringPage from '../pages/admin/AdminMonitoringPage'
import AdminReportsPage from '../pages/admin/AdminReportsPage'
import NotFoundPage from '../pages/NotFoundPage'
import ScrollToTop from '../components/common/ScrollToTop'
import FeaturesPage from '../pages/public/FeaturesPage'
import PricingPage from '../pages/public/PricingPage'
import TestimonialsPage from '../pages/public/TestimonialsPage'
import FAQPage from '../pages/public/FAQPage'
import ProfilePage from '../pages/app/ProfilePage'

// Footer Pages
import NeuralAuditsPage from '../pages/public/tactical/NeuralAuditsPage'
import RankingIntelPage from '../pages/public/tactical/RankingIntelPage'
import MarketAnalysisPage from '../pages/public/tactical/MarketAnalysisPage'
import GrowthRadarPage from '../pages/public/tactical/GrowthRadarPage'
import CompanyBriefPage from '../pages/public/hq/CompanyBriefPage'
import CareersPage from '../pages/public/hq/CareersPage'
import IntelBlogPage from '../pages/public/hq/IntelBlogPage'
import SecureContactPage from '../pages/public/hq/SecureContactPage'
import SecurityProtocolPage from '../pages/public/legal/SecurityProtocolPage'
import SystemTermsPage from '../pages/public/legal/SystemTermsPage'
import PrivacyPolicyPage from '../pages/public/legal/PrivacyPolicyPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/faq' element={<FAQPage />} />
          
          {/* Tactical Suite */}
          <Route path='/tactical/neural-audits' element={<NeuralAuditsPage />} />
          <Route path='/tactical/ranking-intel' element={<RankingIntelPage />} />
          <Route path='/tactical/market-analysis' element={<MarketAnalysisPage />} />
          <Route path='/tactical/growth-radar' element={<GrowthRadarPage />} />

          {/* HQ Operations */}
          <Route path='/hq/company-brief' element={<CompanyBriefPage />} />
          <Route path='/hq/careers' element={<CareersPage />} />
          <Route path='/hq/intel-blog' element={<IntelBlogPage />} />
          <Route path='/hq/secure-contact' element={<SecureContactPage />} />

          {/* Legal */}
          <Route path='/legal/security-protocol' element={<SecurityProtocolPage />} />
          <Route path='/legal/system-terms' element={<SystemTermsPage />} />
          <Route path='/legal/privacy-policy' element={<PrivacyPolicyPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/otp' element={<OtpVerificationPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/app' element={<AppLayout />}>
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='audit' element={<WebsiteAuditPage />} />
            <Route path='audit-progress' element={<AuditProgressPage />} />
            <Route path='seo' element={<SEOIntelligencePage />} />
            <Route path='reports' element={<AnalyticsReportsPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Route>

        <Route element={<AdminRoute />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path='users' element={<AdminUsersPage />} />
            <Route path='reports' element={<AdminReportsPage />} />
            <Route path='monitoring' element={<AdminMonitoringPage />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
