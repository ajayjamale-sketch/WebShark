import { useState } from 'react'
import { CheckCircle2, Copy, KeyRound, Link2, RefreshCw, Unlink } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { integrationCards } from '../../data/mockData'

const API_KEY = 'ws_live_9xas3h2c7ztqa_k291pxmr'

const integrationIcons = {
  'Google Analytics': '📊',
  'Google Search Console': '🔍',
  'WordPress': '🖊',
  'API Access': '🔑',
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(integrationCards)
  const [apiKey, setApiKey] = useState(API_KEY)
  const [keyVisible, setKeyVisible] = useState(false)
  const [connecting, setConnecting] = useState(null)

  const toggleConnect = async (id) => {
    setConnecting(id)
    await new Promise((r) => setTimeout(r, 900))
    setIntegrations((prev) =>
      prev.map((i) => {
        if (i.id !== id) return i
        const next = { ...i, connected: !i.connected, lastSynced: !i.connected ? 'Just now' : null }
        toast.success(`${i.name} ${next.connected ? 'connected' : 'disconnected'}`)
        return next
      })
    )
    setConnecting(null)
  }

  const regenerateKey = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const random = Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    setApiKey(`ws_live_${random}`)
    toast.success('API key regenerated! Update your integrations.')
  }

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Integrations'
        subtitle='Connect WebShark with your analytics stack, CMS, and third-party services.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Connected</p>
          <p className='mt-2 text-3xl font-semibold text-emerald-500'>
            {integrations.filter((i) => i.connected).length}
          </p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Available</p>
          <p className='mt-2 text-3xl font-semibold'>{integrations.length}</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Last Sync</p>
          <p className='mt-2 text-xl font-semibold'>10 min ago</p>
        </Card>
      </div>

      <Tabs defaultValue='services'>
        <TabsList>
          <TabsTrigger value='services'>Services</TabsTrigger>
          <TabsTrigger value='api'>API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value='services' className='pt-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            {integrations.map((integration) => (
              <Card key={integration.id} className='glass p-5'>
                <div className='flex items-start justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800'>
                      {integrationIcons[integration.name] || '🔗'}
                    </div>
                    <div>
                      <h3 className='font-display font-semibold'>{integration.name}</h3>
                      {integration.lastSynced ? (
                        <p className='text-xs text-slate-500'>Last synced: {integration.lastSynced}</p>
                      ) : (
                        <p className='text-xs text-slate-400'>Not connected</p>
                      )}
                    </div>
                  </div>
                  <Badge variant={integration.connected ? 'success' : 'muted'}>
                    {integration.connected ? 'Connected' : 'Disconnected'}
                  </Badge>
                </div>

                <p className='mt-3 text-sm text-slate-500'>{integration.description}</p>

                {integration.connected && (
                  <div className='mt-3 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400'>
                    <CheckCircle2 className='h-3.5 w-3.5' />
                    Data sync active · auto-refresh every 15 min
                  </div>
                )}

                <Button
                  id={`integration-btn-${integration.id}`}
                  className='mt-4 gap-2'
                  variant={integration.connected ? 'outline' : 'default'}
                  disabled={connecting === integration.id}
                  onClick={() => toggleConnect(integration.id)}
                >
                  {connecting === integration.id ? (
                    <RefreshCw className='h-4 w-4 animate-spin' />
                  ) : integration.connected ? (
                    <Unlink className='h-4 w-4' />
                  ) : (
                    <Link2 className='h-4 w-4' />
                  )}
                  {connecting === integration.id ? 'Processing...' : integration.connected ? 'Disconnect' : 'Connect'}
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value='api' className='pt-4'>
          <Card className='glass p-5 max-w-2xl'>
            <div className='mb-3 flex items-center gap-2'>
              <KeyRound className='h-5 w-5 text-primary' />
              <h3 className='font-display text-lg font-semibold'>API Key Management</h3>
            </div>
            <p className='text-sm text-slate-500'>Use this key to authenticate WebShark REST API requests from your stack.</p>

            <div className='mt-4 grid gap-3'>
              <div className='flex gap-2'>
                <Input
                  id='api-key-input'
                  value={keyVisible ? apiKey : '•'.repeat(apiKey.length)}
                  readOnly
                  className='font-mono text-sm'
                />
                <Button variant='outline' size='icon' onClick={() => setKeyVisible((v) => !v)}>
                  {keyVisible ? '👁' : '🙈'}
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() => { navigator.clipboard.writeText(apiKey); toast.success('API key copied!') }}
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
              <Button variant='outline' className='gap-2 w-fit' onClick={regenerateKey}>
                <RefreshCw className='h-4 w-4' />
                Regenerate Key
              </Button>
            </div>

            <div className='mt-5 rounded-xl bg-slate-900 p-4 text-xs text-slate-300 font-mono'>
              <p className='text-slate-500'># Example request</p>
              <p>curl -H "Authorization: Bearer {apiKey.slice(0, 12)}..." \</p>
              <p className='pl-4'>https://api.webshark.ai/v1/websites</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
