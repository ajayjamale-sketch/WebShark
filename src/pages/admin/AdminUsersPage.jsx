import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { DataTable } from '../../components/common/DataTable'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { adminUsers } from '../../data/mockData'

export default function AdminUsersPage() {
  const [users, setUsers] = useState(adminUsers)

  const toggleStatus = (id) => {
    const user = users.find(u => u.id === id);
    if (!user) return;
    
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u
        return { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
      })
    )
    
    toast.success(`${user.name} ${user.status === 'active' ? 'deactivated' : 'activated'}`)
  }

  const changeRole = (id, role) => {
    const user = users.find(u => u.id === id);
    if (!user) return;

    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u
        return { ...u, role }
      })
    )
    
    toast.success(`${user.name}'s role changed to ${role}`)
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => <span className='font-medium'>{row.original.name}</span>,
    },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'workspace', header: 'Workspace' },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => (
        <Select
          value={row.original.role}
          onValueChange={(v) => changeRole(row.original.id, v)}
        >
          <SelectTrigger className='h-7 w-28 text-xs'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='admin'>Admin</SelectItem>
            <SelectItem value='member'>Member</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    { accessorKey: 'joined', header: 'Joined' },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge variant={row.original.status === 'active' ? 'success' : 'muted'}>
          {row.original.status}
        </Badge>
      ),
    },
    {
      id: 'actions',
      header: '',
      cell: ({ row }) => (
        <Button
          size='sm'
          variant='outline'
          className='h-7 text-xs'
          onClick={() => toggleStatus(row.original.id)}
        >
          {row.original.status === 'active' ? 'Deactivate' : 'Activate'}
        </Button>
      ),
    },
  ], [])

  const activeCount = users.filter((u) => u.status === 'active').length

  return (
    <div className='space-y-6'>
      <PageHeader
        title='User Management'
        subtitle='View, manage roles, and control access for all platform users.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='p-4 industrial-corner'>
          <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>Total Users</p>
          <p className='mt-2 text-3xl font-black text-foreground'>2,418</p>
        </Card>
        <Card className='p-4 industrial-corner'>
          <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>Active Nodes</p>
          <p className='mt-2 text-3xl font-black text-emerald-500'>2,394</p>
        </Card>
        <Card className='p-4 industrial-corner'>
          <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>Platform Admins</p>
          <p className='mt-2 text-3xl font-black text-primary-blue'>12</p>
        </Card>
      </div>

      <Card className='p-0 industrial-corner overflow-hidden'>
        <div className="p-6 border-b border-border bg-accent/5">
          <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight'>Node Directory</h3>
        </div>
        <div className="p-6">
          <DataTable columns={columns} data={users} searchKey='name' placeholder='Search operatives...' />
        </div>
      </Card>
    </div>
  )
}
