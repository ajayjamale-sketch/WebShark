import { CSS } from '@dnd-kit/utilities'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

function SortableWidget({ widget }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: widget.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className={widget.className || ''}>
      <Card className='glass h-full'>
        <CardHeader className='flex-row items-center justify-between'>
          <CardTitle className='text-base'>{widget.title}</CardTitle>
          <button
            type='button'
            className='cursor-grab rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            {...attributes}
            {...listeners}
          >
            Drag
          </button>
        </CardHeader>
        <CardContent>{widget.content}</CardContent>
      </Card>
    </div>
  )
}

export function SortableWidgets({ items }) {
  const [widgets, setWidgets] = useState(items)
  const ids = useMemo(() => widgets.map((item) => item.id), [widgets])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) {
      return
    }

    setWidgets((current) => {
      const oldIndex = current.findIndex((widget) => widget.id === active.id)
      const newIndex = current.findIndex((widget) => widget.id === over.id)
      return arrayMove(current, oldIndex, newIndex)
    })
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={ids} strategy={rectSortingStrategy}>
        <div className='grid gap-4 lg:grid-cols-2'>
          {widgets.map((widget) => (
            <SortableWidget key={widget.id} widget={widget} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

