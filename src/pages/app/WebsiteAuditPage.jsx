import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Download, History, LoaderCircle, Search, Shield, Zap, Globe, BarChart3, Lock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { CircularScore } from '../../components/common/CircularScore'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Progress } from '../../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { auditsService } from '../../services/api'
import { cn } from '../../utils/cn'

const schema = z.object({
  website: z.string().url('Enter a valid URL including https://'),
})

const STEPS = ['Crawling pages', 'Analyzing SEO', 'Checking performance', 'Scoring accessibility', 'Finalizing report']

export default function WebsiteAuditPage() {
  const [isAuditing, setIsAuditing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [auditDone, setAuditDone] = useState(false)
  const [history, setHistory] = useState([])
  const [scores] = useState({
    seo: 88, mobile: 91, accessibility: 79, performance: 74, coreWebVitals: 83, brokenLinks: 64,
  })

  const issues = [
    { id: 1, issue: 'Missing H1 tag on /features', severity: 'High', recommendation: 'Add one descriptive H1 tag' },
    { id: 2, issue: 'Broken link found in footer', severity: 'Medium', recommendation: 'Update footer link destination' },
    { id: 3, issue: 'Meta description too short on /pricing', severity: 'Low', recommendation: 'Expand to 140-155 chars' },
    { id: 4, issue: 'Images missing alt text (6 found)', severity: 'Medium', recommendation: 'Add descriptive alt attributes' },
    { id: 5, issue: 'Render-blocking script detected', severity: 'High', recommendation: 'Defer or async non-critical JS' },
  ]

  useEffect(() => {
    auditsService.list().then(setHistory).catch(() => setHistory([]))
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { website: 'https://webshark.ai' },
  })

  const runAudit = async (values) => {
    setIsAuditing(true)
    setProgress(0)
    setAuditDone(false)
    setCurrentStep(0)

    for (let step = 0; step <= 100; step += 5) {
      await new Promise((r) => setTimeout(r, 100))
      setProgress(step)
      setCurrentStep(Math.min(Math.floor(step / 22), STEPS.length - 1))
    }
    
    try {
      const newAudit = await auditsService.create({
        submittedUrl: values.website,
        status: 'completed',
        createdAt: new Date().toISOString(),
        scores,
      })
      setHistory((prev) => [newAudit, ...prev])
    } catch (e) {
      console.error("Audit creation failed", e)
    }
    setIsAuditing(false)
    setAuditDone(true)
    toast.success('Audit protocol complete. Data packets processed.')
  }

  return (
    <div className='space-y-8 pb-10'>
      <PageHeader
        title='Technical Audit'
        subtitle='Initialize deep-scan protocols on target URLs to extract SEO telemetry.'
        actions={
          <Button variant='outline' className='gap-2 rounded-none bg-accent/5 border border-border hover:bg-accent/10 transition-all text-[10px] font-bold uppercase tracking-widest' onClick={() => toast.info('Export protocol active.')}>
            <Download className='h-4 w-4' /> Export Intel
          </Button>
        }
      />

      <Tabs defaultValue='audit' className="space-y-6">
        <TabsList className="bg-accent/5 border border-border p-1 h-auto rounded-none">
          <TabsTrigger value='audit' className="rounded-none px-6 py-2.5 data-[state=active]:bg-primary-blue data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Deep Scan</TabsTrigger>
          <TabsTrigger value='issues' className="rounded-none px-6 py-2.5 data-[state=active]:bg-primary-blue data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Threat Matrix</TabsTrigger>
          <TabsTrigger value='recommendations' className="rounded-none px-6 py-2.5 data-[state=active]:bg-primary-blue data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Tactical Fixes</TabsTrigger>
          <TabsTrigger value='history' className="rounded-none px-6 py-2.5 data-[state=active]:bg-foreground data-[state=active]:text-background transition-all uppercase text-[10px] font-bold tracking-widest">
            <History className='mr-2 h-4 w-4' />
            Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value='audit' className='space-y-8'>
          <Card className='bg-background border border-border p-8 rounded-none industrial-corner'>
            <form className='grid gap-4 md:grid-cols-[1fr_auto]' onSubmit={handleSubmit(runAudit)}>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
                <Input 
                  id='audit-url' 
                  placeholder='https://target-node.com' 
                  className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
                  {...register('website')} 
                />
                {errors.website && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.website.message}</p>}
              </div>
              <button type='submit' className='py-4 px-10 bg-primary-blue text-white font-bold rounded-none shadow-lg transition-all hover:bg-primary-blue/90 flex items-center justify-center gap-3' disabled={isAuditing}>
                {isAuditing ? <LoaderCircle className='h-5 w-5 animate-spin' /> : <Search className='h-5 w-5' />}
                <span className="uppercase tracking-[0.2em] text-[10px]">{isAuditing ? 'Scanning...' : 'Initialize Scan'}</span>
              </button>
            </form>

            <div className='mt-10 border border-border bg-accent/5 p-8 rounded-none industrial-corner'>
              <div className='mb-6 flex items-center justify-between'>
                <div className="flex items-center gap-3">
                   <div className={cn(
                     "h-2 w-2 rounded-none",
                     isAuditing ? "bg-primary-blue animate-pulse" : auditDone ? "bg-emerald-500" : "bg-muted-foreground/30"
                   )} />
                   <p className='text-[10px] font-bold text-foreground uppercase tracking-[0.2em]'>{isAuditing ? STEPS[currentStep] : auditDone ? 'Protocol Complete' : 'System Standby'}</p>
                </div>
                <div className={cn(
                  "px-4 py-1.5 rounded-none text-[9px] font-bold uppercase tracking-widest border",
                  isAuditing ? "bg-primary-blue/10 text-primary-blue border-primary-blue/20" : auditDone ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-muted/30 text-muted-foreground border-border"
                )}>
                  {isAuditing ? 'Active' : auditDone ? 'Secured' : 'Standby'}
                </div>
              </div>
              <Progress value={auditDone ? 100 : progress} className="h-1 bg-border rounded-none" indicatorClassName="bg-primary-blue transition-all duration-500" />
              <div className='mt-8 flex flex-wrap gap-2'>
                {STEPS.map((step, i) => (
                  <div
                    key={step}
                    className={cn(
                      'px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all border rounded-none',
                      (isAuditing && i <= currentStep) || auditDone
                        ? 'bg-primary-blue/10 text-primary-blue border-primary-blue/30'
                        : 'bg-transparent text-muted-foreground border-border/50'
                    )}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <AnimatePresence>
            {auditDone && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                  {[
                    { label: 'SEO Analysis', value: scores.seo, color: '#06B6D4' },
                    { label: 'Mobile Engine', value: scores.mobile, color: '#10B981' },
                    { label: 'Accessibility', value: scores.accessibility, color: '#F59E0B' },
                    { label: 'Performance', value: scores.performance, color: '#06B6D4' },
                    { label: 'Core Vitals', value: scores.coreWebVitals, color: '#1D4ED8' },
                    { label: 'Link Integrity', value: scores.brokenLinks, color: '#EF4444' },
                  ].map((s, i) => (
                    <motion.div 
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className='p-8 flex items-center justify-center group hover:border-primary-blue/30 transition-all rounded-none industrial-corner'>
                        <CircularScore label={s.label} value={s.value} color={s.color} />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value='issues'>
          <Card className='p-8 rounded-none border border-border bg-card industrial-corner'>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 rounded-none bg-rose-500/10 border border-rose-500/20">
                  <AlertTriangle className="h-5 w-5 text-rose-500" />
               </div>
               <div>
                  <h3 className='font-display text-xl font-black text-foreground uppercase tracking-tight'>Threat Matrix</h3>
                  <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1'>Detected vulnerabilities in site architecture</p>
               </div>
            </div>
            
            <div className='rounded-none border border-border bg-accent/5 overflow-hidden'>
              <Table>
                <TableHeader className="bg-accent/10">
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-6">Vulnerability</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-6">Severity</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-6">Strategic Fix</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {issues.map((row) => (
                    <TableRow key={row.id} className="border-border hover:bg-accent/10 transition-colors">
                      <TableCell className='font-bold text-foreground py-6 text-xs uppercase tracking-tight'>{row.issue}</TableCell>
                      <TableCell className="py-6">
                        <Badge className={cn(
                          "px-3 py-1 rounded-none text-[9px] font-bold uppercase tracking-widest",
                          row.severity === 'High' ? 'bg-rose-500/10 text-rose-600 border-rose-600/20' : 
                          row.severity === 'Medium' ? 'bg-amber-500/10 text-amber-600 border-amber-600/20' : 
                          'bg-accent/10 text-muted-foreground border-border'
                        )}>
                          {row.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className='text-muted-foreground font-bold text-[10px] uppercase tracking-widest py-6'>{row.recommendation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value='recommendations'>
          <div className='grid gap-8 lg:grid-cols-2'>
            <Card className='p-8 rounded-none border border-border bg-card industrial-corner'>
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 rounded-none bg-rose-500/10 border border-rose-500/20">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                 </div>
                 <h3 className='font-display text-xl font-black text-foreground uppercase tracking-tight'>Critical Failures</h3>
              </div>
              <div className='space-y-3'>
                {[
                  'Render-blocking scripts delay first paint by 1.3s on mobile.',
                  'Duplicate canonical tags found on 12 product pages.',
                  'Missing HTTPS redirect on 3 sub-pages.',
                ].map((item) => (
                  <div key={item} className='flex items-start gap-4 rounded-none border border-rose-500/20 bg-rose-500/5 p-4 group hover:bg-rose-500/10 transition-all'>
                    <AlertTriangle className='mt-1 h-4 w-4 shrink-0 text-rose-500' />
                    <p className='text-xs font-bold text-rose-700/80 uppercase tracking-widest leading-relaxed'>{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className='p-8 rounded-none border border-border bg-card industrial-corner'>
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 rounded-none bg-primary-blue/10 border border-primary-blue/20">
                    <Zap className="h-5 w-5 text-primary-blue" />
                 </div>
                 <h3 className='font-display text-xl font-black text-foreground uppercase tracking-tight'>AI Directives</h3>
              </div>
              <div className='space-y-3'>
                {[
                  'Compress oversized hero images on /home and /pricing.',
                  'Add FAQ schema markup to high-intent landing pages.',
                  'Consolidate thin blog articles into topic clusters.',
                  'Improve CLS by reserving space for lazy-loaded images.',
                ].map((item) => (
                  <div key={item} className='flex items-start gap-4 rounded-none border border-border bg-accent/5 p-4 hover:bg-accent/10 transition-all'>
                    <CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-emerald-500' />
                    <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed'>{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className='p-8 lg:col-span-2 rounded-none border border-border bg-card industrial-corner'>
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 rounded-none bg-primary-blue/10 border border-primary-blue/20">
                    <Shield className="h-5 w-5 text-primary-blue" />
                 </div>
                 <h3 className='font-display text-xl font-black text-foreground uppercase tracking-tight'>Protocol Integrity Checks</h3>
              </div>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {[
                  ['HTTPS Protection', true, Lock],
                  ['Security Headers', false, Shield],
                  ['ARIA Meta Tags', true, BarChart3],
                  ['Contrast Compliance', false, Zap],
                  ['Keyboard Nav', true, Globe],
                  ['HTML Semantic Ops', true, History],
                ].map(([label, pass, Icon]) => (
                  <div key={label} className='flex items-center justify-between rounded-none border border-border bg-accent/5 px-4 py-3 hover:bg-accent/10 transition-all'>
                    <div className="flex items-center gap-3">
                       <Icon className="h-4 w-4 text-muted-foreground" />
                       <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>{label}</p>
                    </div>
                    <Badge className={cn(
                      "px-2 py-0.5 rounded-none text-[8px] font-black uppercase tracking-widest",
                      pass ? "bg-emerald-500/10 text-emerald-600 border-emerald-600/20" : "bg-rose-500/10 text-rose-600 border-rose-600/20"
                    )}>{pass ? 'Pass' : 'Fail'}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='history'>
          <Card className='p-8 rounded-none border border-border bg-card industrial-corner'>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 rounded-none bg-accent/10 border border-border">
                  <History className="h-5 w-5 text-muted-foreground" />
               </div>
               <h3 className='font-display text-xl font-black text-foreground uppercase tracking-tight'>Mission History</h3>
            </div>
            
            <div className='space-y-3'>
              {history.length === 0 ? (
                <div className="py-12 text-center border border-dashed border-border bg-accent/5">
                   <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>NO PREVIOUS TELEMETRY FOUND</p>
                </div>
              ) : (
                history.slice(0, 8).map((audit) => (
                  <div key={audit.id} className='flex items-center justify-between rounded-none border border-border bg-accent/5 p-5 hover:bg-accent/10 transition-all group'>
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-none bg-background border border-border flex items-center justify-center text-primary-blue group-hover:text-primary-blue/80 transition-colors">
                          <Globe className="h-5 w-5" />
                       </div>
                       <div>
                         <p className='text-xs font-bold text-foreground uppercase tracking-tight'>{audit.submittedUrl}</p>
                         <p className='text-[9px] font-bold text-muted-foreground uppercase tracking-widest'>{new Date(audit.createdAt).toLocaleString()}</p>
                       </div>
                    </div>
                    <Badge className={cn(
                      "px-3 py-1 rounded-none text-[9px] font-bold uppercase tracking-widest",
                      audit.status === 'completed' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-600/20' : 'bg-amber-500/10 text-amber-600 border-amber-600/20'
                    )}>
                      {audit.status}
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
