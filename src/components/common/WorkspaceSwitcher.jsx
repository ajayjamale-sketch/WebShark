import { workspaces } from '../../constants/navigation'
import { useAppContext } from '../../context/AppContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export function WorkspaceSwitcher() {
  const { workspace, setWorkspace } = useAppContext()

  return (
    <Select
      value={String(workspace.id)}
      onValueChange={(value) => {
        const next = workspaces.find((item) => String(item.id) === value)
        if (next) {
          setWorkspace(next)
        }
      }}
    >
      <SelectTrigger className='w-48'>
        <SelectValue placeholder='Select workspace' />
      </SelectTrigger>
      <SelectContent>
        {workspaces.map((item) => (
          <SelectItem key={item.id} value={String(item.id)}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

