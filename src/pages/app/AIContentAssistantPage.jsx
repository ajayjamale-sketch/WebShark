import { useState } from 'react'
import { BookOpen, CheckCircle2, Lightbulb, Sparkles, Wand2 } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Progress } from '../../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Textarea } from '../../components/ui/textarea'
import { blogTopics, contentScores } from '../../data/mockData'

const seoChecklist = [
  ['Primary keyword in H1', true],
  ['Meta description between 140-155 chars', true],
  ['At least 3 internal links', false],
  ['Image ALT tags optimized', false],
  ['Schema markup implemented', false],
  ['Target keyword in first paragraph', true],
]

export default function AIContentAssistantPage() {
  const [keyword, setKeyword] = useState('')
  const [content, setContent] = useState('')
  const [metaResult, setMetaResult] = useState('')
  const [generating, setGenerating] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  const handleGenerate = async () => {
    if (!keyword.trim()) { toast.error('Enter a target keyword first'); return }
    setGenerating(true)
    await new Promise((r) => setTimeout(r, 1400))
    setMetaResult(
      `Discover how ${keyword} can transform your digital strategy. WebShark provides AI-powered insights, real-time audits, and competitor intelligence to help you dominate search rankings in 2026.`
    )
    setGenerating(false)
    toast.success('Meta description generated!')
  }

  const handleAnalyze = async () => {
    if (!content.trim()) { toast.error('Enter some content to analyze'); return }
    setAnalyzing(true)
    await new Promise((r) => setTimeout(r, 1800))
    setAnalyzed(true)
    setAnalyzing(false)
    toast.success('Content analysis complete!')
  }

  return (
    <div className='space-y-6'>
      <PageHeader
        title='AI Content & SEO Assistant'
        subtitle='Generate content recommendations, improve metadata, and boost SEO quality scores with AI.'
      />

      <Tabs defaultValue='analyze'>
        <TabsList>
          <TabsTrigger value='analyze'>Content Analysis</TabsTrigger>
          <TabsTrigger value='meta'>Meta Generator</TabsTrigger>
          <TabsTrigger value='topics'>Blog Topics</TabsTrigger>
          <TabsTrigger value='checklist'>SEO Checklist</TabsTrigger>
        </TabsList>

        {/* ── Content Analysis Tab ── */}
        <TabsContent value='analyze' className='space-y-4 pt-4'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <Card className='glass p-5'>
              <h3 className='flex items-center gap-2 font-display text-lg font-semibold'>
                <Sparkles className='h-5 w-5 text-primary' />
                Content Input
              </h3>
              <div className='mt-4 space-y-3'>
                <Input
                  placeholder='Target keyword (e.g., website seo audit)'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Textarea
                  rows={6}
                  placeholder='Paste your page content here for analysis...'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Button className='w-full gap-2' onClick={handleAnalyze} disabled={analyzing}>
                  {analyzing ? (
                    <><Sparkles className='h-4 w-4 animate-pulse' /> Analyzing...</>
                  ) : (
                    <><Sparkles className='h-4 w-4' /> Analyze Content</>
                  )}
                </Button>
              </div>
            </Card>

            <Card className='glass p-5'>
              <h3 className='font-display text-lg font-semibold'>Content Scores</h3>
              {analyzed ? (
                <div className='mt-4 space-y-4'>
                  {contentScores.map((s) => (
                    <div key={s.label}>
                      <div className='mb-1 flex items-center justify-between text-sm'>
                        <p>{s.label}</p>
                        <p className='font-semibold'>{s.value}/100</p>
                      </div>
                      <Progress value={s.value} indicatorClassName={s.value >= 80 ? 'bg-emerald-500' : s.value >= 65 ? 'bg-amber-500' : 'bg-red-500'} />
                    </div>
                  ))}
                  <div className='mt-2 rounded-xl border border-blue-200 bg-blue-50 p-3 dark:border-blue-900/40 dark:bg-blue-950/20'>
                    <p className='text-sm font-medium text-blue-700 dark:text-blue-300'>Overall Content Score: 73/100</p>
                    <p className='mt-1 text-xs text-blue-600 dark:text-blue-400'>Add more internal links and implement schema to push above 85.</p>
                  </div>
                </div>
              ) : (
                <div className='mt-4 space-y-4'>
                  {contentScores.map((s) => (
                    <div key={s.label}>
                      <div className='mb-1 flex items-center justify-between text-sm'>
                        <p>{s.label}</p>
                        <p className='font-semibold text-slate-300 dark:text-slate-600'>—</p>
                      </div>
                      <Progress value={0} />
                    </div>
                  ))}
                  <p className='text-center text-sm text-slate-500'>Paste content and click analyze to see scores.</p>
                </div>
              )}
            </Card>
          </div>

          <Card className='glass p-5'>
            <h3 className='flex items-center gap-2 font-display text-lg font-semibold'>
              <Lightbulb className='h-5 w-5 text-amber-500' />
              AI Recommendations
            </h3>
            <div className='mt-3 grid gap-2 sm:grid-cols-2'>
              {[
                'Publish a comparison page for "WebShark vs legacy SEO suites" to capture bottom-funnel traffic.',
                'Refresh top 5 blog posts with updated schema and Q1 2026 stats.',
                'Create a benchmark report lead magnet focused on Core Web Vitals for ecommerce.',
                'Optimize the /pricing page with FAQ schema to capture SERP featured snippets.',
              ].map((item) => (
                <div key={item} className='flex gap-2 rounded-xl border border-slate-200 p-3 dark:border-slate-700'>
                  <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-emerald-500' />
                  <p className='text-sm'>{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── Meta Generator Tab ── */}
        <TabsContent value='meta' className='pt-4'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <Card className='glass p-5'>
              <h3 className='font-display text-lg font-semibold'>Meta Description Generator</h3>
              <p className='mt-1 text-sm text-slate-500'>Provide page intent and target keyword for optimal output.</p>
              <div className='mt-4 space-y-3'>
                <Input
                  placeholder='Target keyword (e.g., seo audit tool)'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Textarea rows={4} placeholder='Briefly describe the page purpose...' />
                <Button className='gap-2' onClick={handleGenerate} disabled={generating}>
                  <Wand2 className='h-4 w-4' />
                  {generating ? 'Generating...' : 'Generate Meta Description'}
                </Button>
              </div>
            </Card>
            <Card className='glass p-5'>
              <h3 className='font-display text-lg font-semibold'>Generated Output</h3>
              {metaResult ? (
                <div className='mt-4 space-y-3'>
                  <div className='rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20'>
                    <p className='text-sm leading-relaxed'>{metaResult}</p>
                    <div className='mt-3 flex items-center justify-between'>
                      <p className='text-xs text-slate-500'>{metaResult.length} chars · Recommended: 140-155</p>
                      <Badge variant={metaResult.length >= 140 && metaResult.length <= 160 ? 'success' : 'warning'}>
                        {metaResult.length >= 140 && metaResult.length <= 160 ? 'Optimal' : 'Check length'}
                      </Badge>
                    </div>
                  </div>
                  <Button variant='outline' className='gap-2 w-full' onClick={() => { navigator.clipboard.writeText(metaResult); toast.success('Copied!') }}>
                    Copy to clipboard
                  </Button>
                </div>
              ) : (
                <p className='mt-4 text-sm text-slate-500'>Generated meta description will appear here.</p>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* ── Blog Topics Tab ── */}
        <TabsContent value='topics' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='flex items-center gap-2 font-display text-lg font-semibold'>
              <BookOpen className='h-5 w-5 text-primary' />
              AI-Suggested Blog Topics
            </h3>
            <p className='mt-1 text-sm text-slate-500'>High-opportunity content ideas based on your keyword profile and competitor gaps.</p>
            <div className='mt-4 space-y-3'>
              {blogTopics.map((t) => (
                <div key={t.id} className='flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700'>
                  <div>
                    <p className='font-medium'>{t.topic}</p>
                    <div className='mt-1 flex items-center gap-2'>
                      <Badge variant='muted'>{t.intent}</Badge>
                      <span className='text-xs text-slate-500'>{t.volume.toLocaleString()} monthly searches</span>
                    </div>
                  </div>
                  <Button size='sm' variant='outline' onClick={() => toast.success(`"${t.topic}" saved to content calendar!`)}>
                    Save
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── SEO Checklist Tab ── */}
        <TabsContent value='checklist' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>On-Page SEO Checklist</h3>
            <p className='mt-1 text-sm text-slate-500'>
              {seoChecklist.filter((c) => c[1]).length}/{seoChecklist.length} items complete
            </p>
            <Progress
              className='mt-3'
              value={(seoChecklist.filter((c) => c[1]).length / seoChecklist.length) * 100}
            />
            <div className='mt-4 space-y-2'>
              {seoChecklist.map(([label, done]) => (
                <div key={label} className='flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700'>
                  <div className='flex items-center gap-3'>
                    <div className={`h-4 w-4 rounded-full border-2 ${done ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'}`} />
                    <p className='text-sm'>{label}</p>
                  </div>
                  <Badge variant={done ? 'success' : 'warning'}>{done ? 'Done' : 'Pending'}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
