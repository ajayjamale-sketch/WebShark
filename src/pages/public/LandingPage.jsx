import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  TrendingUp, 
  Globe, 
  Activity,
  BarChart3,
  Lock,
  ChevronDown,
  Bot,
  Terminal
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import CountUpPkg from 'react-countup'
import MarqueePkg from "react-fast-marquee"

const CountUp = CountUpPkg.default || CountUpPkg
const Marquee = MarqueePkg.default || MarqueePkg

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { faqItems, pricingPlans, testimonialCards } from '../../data/mockData'
import PublicNavbar from '../../components/common/PublicNavbar'
import SharkLogo from '../../components/common/SharkLogo'
import { Badge } from '../../components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1
      })

      // Section scroll reveal
      gsap.utils.toArray(".scroll-reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        })
      })
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div ref={containerRef} className='relative min-h-screen bg-background overflow-x-hidden selection:bg-primary-blue/20'>
      {/* Structural Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] dark:opacity-10" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className='relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden'>
          {/* Background Decorative Elements */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-blue/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 flex flex-col items-center text-center">
            <motion.div initial="hidden" animate="show" variants={staggerContainer} className="w-full max-w-5xl">
              <motion.div variants={fadeUp} className="mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 border border-border backdrop-blur-sm relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-transparent to-primary-blue/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="h-2 w-2 bg-primary-blue shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.4em] relative z-10">System Status: Optimal // V4.2 Online</span>
                </div>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className='font-display text-4xl sm:text-5xl font-black leading-[1.0] lg:text-[120px] tracking-tighter text-white mb-8 lg:mb-12 uppercase italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]'>
                Precision <span className="text-primary-blue not-italic">Intelligence.</span><br />
                <span className="text-white/60">Aggressive</span> Growth.
              </motion.h1>

              <motion.p variants={fadeUp} className='mt-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-light tracking-wide drop-shadow-md px-4'>
                Unify your technical telemetry, market intelligence, and tactical AI recommendations into a single, high-dimensional command center.
              </motion.p>

              <motion.div variants={fadeUp} className='mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4'>
                <Link to='/signup' className="w-full sm:w-auto">
                  <button className="w-full group relative px-8 lg:px-12 py-5 lg:py-6 bg-primary-blue text-white overflow-hidden transition-all hover:bg-primary-blue/90 border border-primary-blue shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                     <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                     <span className="relative z-10 flex items-center justify-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em]">
                       Authorize Operation <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                     </span>
                  </button>
                </Link>
                <Link to='/app/dashboard' className="w-full sm:w-auto">
                  <button className="w-full px-8 lg:px-12 py-5 lg:py-6 bg-white/5 backdrop-blur-md text-white transition-all border border-white/20 hover:bg-white/10 hover:border-white/40 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em]">
                     Watch Telemetry
                  </button>
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div variants={fadeUp} className='mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-12 lg:pt-16 border-t border-border relative'>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 whitespace-nowrap">Network Load Balance</div>
                {[
                  { label: 'Intel Nodes', value: 12500, suffix: '+' },
                  { label: 'Tactical Eff.', value: 34, suffix: '%' },
                  { label: 'Vectors', value: 2.1, suffix: 'M' },
                  { label: 'Availability', value: 99.9, suffix: '%' },
                ].map((item) => (
                  <div key={item.label} className="group text-center">
                    <p className='font-display text-4xl lg:text-5xl font-black text-foreground mb-3 tracking-tighter'>
                      <CountUp end={item.value} decimals={item.value % 1 !== 0 ? 1 : 0} duration={3} />
                      <span className="text-primary-blue">{item.suffix}</span>
                    </p>
                    <p className='text-[9px] text-muted-foreground font-black uppercase tracking-[0.3em] group-hover:text-primary-blue transition-colors'>{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-[-1] opacity-60 pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10" />
            <img 
              src="/images/cyber_intelligence_hero.png" 
              alt="Cyber Intelligence Background" 
              className="w-full h-full object-cover contrast-[1.2] brightness-[0.7] mx-auto"
            />
          </motion.div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="relative py-32 overflow-hidden border-y border-border bg-card">
           <div className="absolute inset-0 grid-pattern opacity-10" />
           <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
              <div className="mb-24 text-center max-w-3xl mx-auto scroll-reveal">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-blue text-white mb-8 border border-primary-blue/50">
                    <Activity className="h-3 w-3 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">Operational Environment</span>
                 </div>
                 <h2 className='font-display text-5xl lg:text-7xl font-black text-foreground mb-6 uppercase tracking-tighter'>Tactical <span className="text-primary-blue">Telemetry.</span></h2>
                 <p className='text-xl text-muted-foreground font-light max-w-2xl mx-auto tracking-wide'>High-dimensional data visualization for aggressive technical dominance.</p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-none border border-border bg-background p-2 shadow-[0_40px_100px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] industrial-corner max-w-4xl mx-auto overflow-hidden"
              >
                 <div className="flex items-center px-6 py-4 bg-accent/20 border-b border-border gap-4">
                    <div className="flex gap-2">
                       <div className="h-2.5 w-2.5 bg-primary-blue shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                       <div className="h-2.5 w-2.5 bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                       <div className="h-2.5 w-2.5 bg-muted-foreground/20" />
                    </div>
                    <div className="ml-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] flex-1">
                       OPERATIONAL_INTERFACE_V4 // SECTOR:ALPHA_NINER
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="hidden md:flex items-center gap-2">
                          <div className="h-1 w-24 bg-primary-blue/10 overflow-hidden relative">
                             <motion.div 
                               animate={{ x: ['-100%', '100%'] }}
                               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-0 w-1/2 bg-primary-blue"
                             />
                          </div>
                          <span className="text-[9px] font-black text-primary-blue uppercase tracking-widest">Encrypting...</span>
                       </div>
                       <div className="h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                 </div>
                 <div className="relative overflow-hidden group">
                    <img 
                      src="/images/data_analytics_interface.png" 
                      alt="Tactical Dashboard Interface" 
                      className="w-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-primary-blue/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
                    <div className="absolute inset-0 pointer-events-none">
                       <div className="absolute top-0 left-0 w-full h-full scanline opacity-[0.03]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    </div>
                 </div>
                 
                 {/* Decorative Corner Overlays */}
                 <div className="absolute bottom-6 right-6 p-4 bg-background border border-border backdrop-blur-md hidden lg:block">
                    <div className="flex flex-col gap-2">
                       <div className="flex items-center justify-between gap-8">
                          <span className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Node Latency</span>
                          <span className="text-[8px] font-black uppercase text-primary-blue tracking-widest">14ms</span>
                       </div>
                       <div className="h-[1px] w-full bg-border" />
                       <div className="flex items-center justify-between gap-8">
                          <span className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Data Flux</span>
                          <span className="text-[8px] font-black uppercase text-emerald-500 tracking-widest">Stable</span>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* Marquee Partners */}
        <div className="py-20 bg-background border-b border-border">
           <Marquee speed={40} gradient={true} gradientColor="var(--background)" gradientWidth={200}>
              {[
                'BrightCom', 'Northstar', 'Vertex', 'AeroLabs', 'FinScope', 'TechNova', 'GlobalStream', 'CloudOps'
              ].map(name => (
                <div key={name} className="mx-12 flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                   <div className="h-8 w-8 bg-primary-blue/20"></div>
                   <span className="text-2xl font-display font-bold text-foreground tracking-tight">{name}</span>
                </div>
              ))}
           </Marquee>
        </div>

        {/* Features Section */}
        <section id='features' className='relative py-32 overflow-hidden bg-background'>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-blue/5 blur-[150px] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div className='mb-32 text-center max-w-4xl mx-auto scroll-reveal'>
              <div className="inline-flex items-center gap-3 px-5 py-2 border border-border bg-accent/5 mb-8">
                 <Terminal className="h-4 w-4 text-primary-blue" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Operational Capabilities</span>
              </div>
              <h2 className='font-display text-5xl lg:text-8xl font-black text-foreground mb-8 uppercase tracking-tighter italic'>Unrivaled <span className="text-primary-blue not-italic">Tactical</span> Dominance.</h2>
              <p className='text-xl text-muted-foreground font-light max-w-3xl mx-auto tracking-wide leading-relaxed'>WebShark deploys high-fidelity sensory arrays across the digital landscape to capture and analyze mission-critical intelligence.</p>
            </div>
            
            <div className='grid gap-0 md:grid-cols-2 lg:grid-cols-3 border border-border'>
              {[
                {
                  icon: TrendingUp,
                  title: 'Vector Intelligence',
                  desc: 'High-frequency tracking of SERP volatility and multi-dimensional ranking shifts.',
                },
                {
                  icon: Shield,
                  title: 'Defensive Audits',
                  desc: 'Deep-scan technical protocols to identify and neutralize infrastructure vulnerabilities.',
                },
                {
                  icon: Bot,
                  title: 'Autonomous AI',
                  desc: 'Neural models that synthesize massive datasets into actionable growth directives.',
                },
                {
                  icon: Globe,
                  title: 'Global Proxy Array',
                  desc: 'Synchronized search simulations across 140+ geostationary nodes.',
                },
                {
                  icon: BarChart3,
                  title: 'Telemetry Analytics',
                  desc: 'Advanced data modeling and visualization for strategic stakeholder alignment.',
                },
                {
                  icon: Lock,
                  title: 'Secure Protocol',
                  desc: 'End-to-end encryption and compartmentalized data silos for maximum ops-sec.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='group relative border-border border-b md:border-r last:border-b-0 lg:even:border-r-0 lg:[&:nth-child(3n)]:border-r-0'
                >
                  <div className='p-12 h-full bg-background group-hover:bg-accent/5 transition-all duration-500'>
                     <div className='h-16 w-16 bg-accent/5 border border-border flex items-center justify-center mb-10 group-hover:border-primary-blue/50 group-hover:bg-primary-blue/10 transition-all group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]'>
                        <item.icon className='h-7 w-7 text-primary-blue transition-transform group-hover:scale-110' />
                     </div>
                     <h3 className='font-display text-2xl font-black text-foreground mb-4 uppercase tracking-tight group-hover:text-primary-blue transition-colors'>{item.title}</h3>
                     <p className='text-muted-foreground leading-relaxed font-light text-sm tracking-wide'>{item.desc}</p>
                     
                     {/* Decorative Elements */}
                     <div className="absolute top-4 right-4 text-[8px] font-black text-muted-foreground/20 uppercase tracking-widest">Module_{i+1}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Swiper */}
        <section id='testimonials' className='relative py-48 bg-card overflow-hidden border-y border-border'>
           <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
           <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
              <div className="mb-32 text-center scroll-reveal">
                 <div className="inline-flex items-center gap-3 px-5 py-2 border border-border bg-background mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue">Field Reports</span>
                 </div>
                 <h2 className='font-display text-5xl lg:text-7xl font-black text-foreground mb-6 uppercase tracking-tighter'>Mission <span className="text-primary-blue">Success.</span></h2>
                 <p className="text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">Verified intelligence from the world's most aggressive growth teams.</p>
              </div>
              
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="testimonial-swiper !pb-24"
              >
                {testimonialCards.map((testimonial, i) => (
                  <SwiperSlide key={i} className="!w-[450px]">
                    <div className="bg-background p-12 rounded-none border border-border h-full flex flex-col justify-between shadow-2xl relative group overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                          <SharkLogo className="h-12 w-12" />
                       </div>
                       <div>
                          <div className="flex gap-2 mb-10">
                             {[...Array(5)].map((_, i) => <div key={i} className="h-2 w-2 bg-primary-blue shadow-[0_0_8px_rgba(37,99,235,0.4)]" />)}
                          </div>
                          <p className="text-xl text-foreground italic font-light leading-relaxed mb-12 tracking-wide">"{testimonial.quote}"</p>
                       </div>
                       <div className="flex items-center gap-6 pt-10 border-t border-border">
                          <div className="h-14 w-14 bg-primary-blue text-white flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                             {testimonial.author[0]}
                          </div>
                          <div>
                             <p className="text-foreground font-black text-sm uppercase tracking-widest">{testimonial.author}</p>
                             <p className="text-[10px] text-primary-blue font-black uppercase tracking-[0.3em] mt-1">{testimonial.role}</p>
                          </div>
                       </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
           </div>
        </section>

        {/* Pricing Section */}
        <section id='pricing' className='relative py-48 bg-background'>
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary-blue/5 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div className='mb-32 text-center scroll-reveal'>
              <div className="inline-flex items-center gap-3 px-5 py-2 border border-border bg-accent/5 mb-8">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Operational Tiers</span>
              </div>
              <h2 className='font-display text-5xl lg:text-8xl font-black text-foreground mb-8 uppercase tracking-tighter italic'>Choose your <span className="text-primary-blue not-italic">Arsenal.</span></h2>
              <p className='text-xl text-muted-foreground font-light max-w-2xl mx-auto tracking-wide'>Scalable intelligence operations for every mission profile, from tactical analysis to global dominance.</p>
            </div>
            
            <div className='grid gap-0 md:grid-cols-3 items-stretch border border-border shadow-2xl'>
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-16 flex flex-col relative overflow-hidden ${i !== 2 ? 'md:border-r border-border' : ''} ${plan.popular ? 'bg-card' : 'bg-background'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-blue shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                  )}
                  
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className='font-display text-3xl font-black text-foreground uppercase tracking-tighter'>{plan.name}</h3>
                       {plan.popular && <Badge className="bg-primary-blue text-white rounded-none text-[8px] font-black tracking-[0.3em] uppercase px-3 py-1">Priority</Badge>}
                    </div>
                    <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em]">{plan.popular ? 'High-Velocity Ops' : 'Standard Recon'}</p>
                  </div>

                  <div className="mb-16 flex items-baseline text-foreground">
                    <span className="text-7xl font-black tracking-tighter">${plan.monthly}</span>
                    <span className="ml-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">/ MO_CYCLE</span>
                  </div>

                  <div className="mb-12 space-y-6">
                    <p className="text-[9px] font-black text-primary-blue uppercase tracking-[0.4em] mb-4 border-b border-border pb-2">Technical Manifest</p>
                    <ul className='space-y-4'>
                       {[plan.seats, plan.projects, 'Tactical AI Engine', 'Priority Support', 'Global Node Access'].map(feature => (
                         <li key={feature} className="flex items-center gap-4 text-foreground group">
                           <div className="h-1.5 w-1.5 bg-primary-blue shadow-[0_0_5px_rgba(37,99,235,0.5)] group-hover:scale-125 transition-transform" />
                           <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                     <Link to='/signup' className="w-full">
                       <button className={`w-full py-6 rounded-none font-black text-[11px] uppercase tracking-[0.3em] transition-all relative group overflow-hidden ${plan.popular ? 'bg-primary-blue text-white' : 'bg-transparent text-foreground border border-border hover:border-primary-blue'}`}>
                         <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                         <span className="relative z-10">Initialize Tier</span>
                       </button>
                     </Link>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-4 text-[7px] font-black text-muted-foreground/10 uppercase tracking-widest">Protocol_0{i+1}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='faq' className='relative py-48 bg-card border-t border-border'>
          <div className="mx-auto max-w-4xl px-4 lg:px-8 relative z-10">
            <div className="mb-32 text-center scroll-reveal">
               <div className="inline-flex items-center gap-3 px-5 py-2 border border-border bg-background mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-blue">Documentation</span>
               </div>
               <h2 className='font-display text-5xl lg:text-7xl font-black text-foreground mb-6 uppercase tracking-tighter'>System <span className="text-primary-blue">Briefing.</span></h2>
               <p className="text-xl text-muted-foreground font-light tracking-wide">Operational details and frequently asked intelligence queries.</p>
            </div>
            
            <div className='space-y-6'>
              {faqItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                   <details className="group bg-background border border-border rounded-none overflow-hidden transition-all hover:border-primary-blue/30">
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-accent/5 transition-colors">
                         <div className="flex items-center gap-6">
                            <span className="text-[10px] font-black text-primary-blue opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                            <p className='font-black text-xs text-foreground uppercase tracking-widest'>{item.q}</p>
                         </div>
                         <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                      </summary>
                      <div className="px-14 pb-10 pt-2">
                         <p className='text-muted-foreground leading-relaxed font-light text-sm border-t border-border pt-6 tracking-wide'>{item.a}</p>
                         <div className="mt-8 flex gap-2">
                            <div className="h-1 w-1 bg-primary-blue/20" />
                            <div className="h-1 w-1 bg-primary-blue/40" />
                            <div className="h-1 w-1 bg-primary-blue/60" />
                         </div>
                      </div>
                   </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
