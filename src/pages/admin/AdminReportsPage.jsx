import { motion } from 'framer-motion'
import { Download, FileText, Search } from 'lucide-react'
import { reports } from '../../data/mockData'
import { Badge } from '../../components/ui/badge'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AdminReportsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Data Types')

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === 'All Data Types' || report.type.toLowerCase().includes(typeFilter.toLowerCase().split(' ')[0])
    return matchesSearch && matchesType
  })

  const handleDownload = (title) => {
    toast.success('DECRYPTION_COMPLETE', { description: `Downloading: ${title}.intel` })
  }
  return (
    <div className='p-8 max-w-7xl mx-auto'>
      <div className='mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h1 className='font-display text-3xl font-black text-foreground uppercase tracking-tighter'>Intelligence Archive</h1>
          <p className='mt-1 text-xs font-bold text-muted-foreground uppercase tracking-widest'>Centralized repository for all platform nodes.</p>
        </div>
      </div>

      <div className='border border-border bg-card p-6 industrial-corner'>
        <div className='mb-6 flex flex-col sm:flex-row gap-4'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
            <input
              type='text'
              placeholder='Search intelligence protocols...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-2.5 bg-accent/5 border border-border rounded-none text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all text-foreground'
            />
          </div>
          <div className='flex gap-2'>
             <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className='bg-accent/5 border border-border rounded-none px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground focus:outline-none'
             >
                <option>All Data Types</option>
                <option>SEO Audit</option>
                <option>Competitor Intel</option>
             </select>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-border text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] bg-accent/5'>
                <th className='py-4 px-4'>Report Protocol</th>
                <th className='py-4 px-4'>Data Category</th>
                <th className='py-4 px-4'>Generated At</th>
                <th className='py-4 px-4'>State</th>
                <th className='py-4 px-4 text-right'>Execution</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {filteredReports.map((report, i) => (
                <motion.tr 
                  key={report.id} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className='border-b border-border/50 hover:bg-accent/5 transition-colors group'
                >
                  <td className='py-4 px-4'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-none border border-border bg-primary-blue/10 flex items-center justify-center text-primary-blue'>
                        <FileText className='h-4 w-4' />
                      </div>
                      <span className='font-bold text-foreground uppercase tracking-tight text-xs'>{report.title}</span>
                    </div>
                  </td>
                  <td className='py-4 px-4 capitalize text-[10px] font-bold text-muted-foreground tracking-widest'>{report.type}</td>
                  <td className='py-4 px-4 text-[10px] font-bold text-muted-foreground tracking-widest'>{new Date(report.generatedAt).toLocaleDateString()}</td>
                  <td className='py-4 px-4'>
                    <Badge variant={report.status === 'ready' ? 'success' : 'warning'}>
                       {report.status}
                    </Badge>
                  </td>
                  <td className='py-4 px-4 text-right'>
                    <button 
                      disabled={report.status !== 'ready'}
                      onClick={() => handleDownload(report.title)}
                      className='p-2 rounded-none border border-border text-muted-foreground hover:text-foreground hover:bg-accent/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all'
                    >
                      <Download className='h-4 w-4' />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
