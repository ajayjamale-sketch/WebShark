import { useMemo } from 'react'
import { DataTable } from '../../components/common/DataTable'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Card } from '../../components/ui/card'
import { adminWorkspaces } from '../../data/mockData'
import { motion } from 'framer-motion'
import { Users2, Briefcase, Zap } from 'lucide-react'

export default function WorkspacesPage() {
  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Workspace Node',
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-none border border-border bg-accent/5 flex items-center justify-center text-primary-blue text-[10px] font-black">
            WS
          </div>
          <span className='font-bold text-foreground uppercase tracking-tight text-xs'>{row.original.name}</span>
        </div>
      ),
    },
    { 
      accessorKey: 'owner', 
      header: 'Lead Operative',
      cell: ({ row }) => <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{row.original.owner}</span>
    },
    {
      accessorKey: 'members',
      header: 'Active Nodes',
      cell: ({ row }) => <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{row.original.members} Nodes</span>,
    },
    {
      accessorKey: 'plan',
      header: 'Deployment Tier',
      cell: ({ row }) => (
        <Badge className={
          row.original.plan === 'Scale' ? 'bg-primary-blue/20 text-primary-blue border-primary-blue/20' : 
          row.original.plan === 'Growth' ? 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/20' : 
          'bg-accent/10 text-muted-foreground border-border'
        }>
          {row.original.plan}
        </Badge>
      ),
    },
    { 
      accessorKey: 'createdAt', 
      header: 'Initialized',
      cell: ({ row }) => <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{row.original.createdAt}</span>
    },
  ], [])

  return (
    <div className='space-y-8'>
      <PageHeader
        title='Workspace Directory'
        subtitle='Operational management of all registered intelligence nodes.'
      />

      <div className='grid gap-6 md:grid-cols-3'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className='p-6 industrial-corner border-border bg-card group hover:border-primary-blue/30 transition-all'>
            <div className="flex items-center justify-between mb-4">
              <Users2 className="h-5 w-5 text-primary-blue" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className='text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]'>Total Workspaces</p>
            <p className='mt-2 text-3xl font-black text-foreground'>{adminWorkspaces.length}</p>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className='p-6 industrial-corner border-border bg-card group hover:border-accent-cyan/30 transition-all'>
            <div className="flex items-center justify-between mb-4">
              <Zap className="h-5 w-5 text-accent-cyan" />
              <span className="text-[8px] font-black text-accent-cyan uppercase tracking-widest px-2 py-0.5 bg-accent-cyan/10 border border-accent-cyan/20">High Priority</span>
            </div>
            <p className='text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]'>Scale Deployments</p>
            <p className='mt-2 text-3xl font-black text-foreground'>
              {adminWorkspaces.filter((w) => w.plan === 'Scale').length}
            </p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className='p-6 industrial-corner border-border bg-card group hover:border-primary-blue/30 transition-all'>
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="h-5 w-5 text-primary-blue" />
              <span className="text-[10px] font-bold text-muted-foreground">Operational</span>
            </div>
            <p className='text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]'>Total Active Nodes</p>
            <p className='mt-2 text-3xl font-black text-foreground'>
              {adminWorkspaces.reduce((a, w) => a + w.members, 0)}
            </p>
          </Card>
        </motion.div>
      </div>

      <Card className='p-0 industrial-corner border-border bg-card overflow-hidden'>
        <div className="p-6 border-b border-border bg-accent/5">
          <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight'>Active Node Directory</h3>
        </div>
        <div className="p-6">
          <DataTable columns={columns} data={adminWorkspaces} searchKey='name' placeholder='Search workspace node...' />
        </div>
      </Card>
    </div>
  )
}
