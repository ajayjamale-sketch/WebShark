// Simulated local database using localStorage
const getDB = (resource) => {
  const data = localStorage.getItem(`webshark_db_${resource}`)
  return data ? JSON.parse(data) : []
}

const saveDB = (resource, data) => {
  localStorage.setItem(`webshark_db_${resource}`, JSON.stringify(data))
}

const delay = (ms = 800) => new Promise(res => setTimeout(res, ms))

export function createResourceService(resource) {
  return {
    list: async (params) => {
      await delay()
      return getDB(resource)
    },
    get: async (id) => {
      await delay(400)
      const db = getDB(resource)
      return db.find(item => item.id === id)
    },
    create: async (payload) => {
      await delay(1000)
      const db = getDB(resource)
      const newItem = { 
        ...payload, 
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString()
      }
      db.unshift(newItem)
      saveDB(resource, db)
      return newItem
    },
    update: async (id, payload) => {
      await delay(600)
      const db = getDB(resource)
      const index = db.findIndex(item => item.id === id)
      if (index !== -1) {
        db[index] = { ...db[index], ...payload }
        saveDB(resource, db)
        return db[index]
      }
      return null
    },
    remove: async (id) => {
      await delay(500)
      const db = getDB(resource)
      const filtered = db.filter(item => item.id !== id)
      saveDB(resource, filtered)
      return true
    },
  }
}

export const websitesService = createResourceService('websites')
export const auditsService = createResourceService('audits')
export const keywordsService = createResourceService('keywords')
export const competitorsService = createResourceService('competitors')
export const reportsService = createResourceService('reports')
export const notificationsService = createResourceService('notifications')
export const subscriptionsService = createResourceService('subscriptions')
export const integrationsService = createResourceService('integrations')
export const leadsService = createResourceService('leads')
export const workspacesService = createResourceService('workspaces')
