import { useMemo } from 'react'
import { DataTable } from '../../components/common/DataTable'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Card } from '../../components/ui/card'
import { adminWorkspaces } from '../../data/mockData'

export default function AdminWorkspacesPage() {
  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Workspace',
      cell: ({ row }) => <span className='font-medium'>{row.original.name}</span>,
    },
    { accessorKey: 'owner', header: 'Owner' },
    {
      accessorKey: 'members',
      header: 'Members',
      cell: ({ row }) => `${row.original.members} members`,
    },
    {
      accessorKey: 'plan',
      header: 'Plan',
      cell: ({ row }) => (
        <Badge variant={row.original.plan === 'Scale' ? 'danger' : row.original.plan === 'Growth' ? 'warning' : 'muted'}>
          {row.original.plan}
        </Badge>
      ),
    },
    { accessorKey: 'createdAt', header: 'Created' },
  ], [])

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Workspace Management'
        subtitle='View and manage all workspaces across the platform.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Total Workspaces</p>
          <p className='mt-2 text-3xl font-semibold'>{adminWorkspaces.length}</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Scale Plan</p>
          <p className='mt-2 text-3xl font-semibold'>
            {adminWorkspaces.filter((w) => w.plan === 'Scale').length}
          </p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Total Members</p>
          <p className='mt-2 text-3xl font-semibold'>
            {adminWorkspaces.reduce((a, w) => a + w.members, 0)}
          </p>
        </Card>
      </div>

      <Card className='glass p-5'>
        <h3 className='mb-4 font-display text-lg font-semibold'>All Workspaces</h3>
        <DataTable columns={columns} data={adminWorkspaces} searchKey='name' placeholder='Search workspace...' />
      </Card>
    </div>
  )
}
