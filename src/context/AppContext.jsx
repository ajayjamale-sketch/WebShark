import { createContext, useContext, useMemo, useState } from 'react'
import { notificationsSeed } from '../data/mockData'
import { workspaces } from '../constants/navigation'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [workspace, setWorkspace] = useState(workspaces[0])
  const [notifications, setNotifications] = useState(notificationsSeed)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [onboardingOpen, setOnboardingOpen] = useState(true)

  const unreadCount = notifications.filter((item) => !item.read).length

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    )
  }

  const value = useMemo(
    () => ({
      workspace,
      setWorkspace,
      notifications,
      unreadCount,
      markAsRead,
      isCommandOpen,
      setIsCommandOpen,
      isNotificationOpen,
      setIsNotificationOpen,
      onboardingOpen,
      setOnboardingOpen,
    }),
    [workspace, notifications, unreadCount, isCommandOpen, isNotificationOpen, onboardingOpen],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}

