import { Toaster } from 'sonner'
import { AppRouter } from './routes/AppRouter'

import { ThemeProvider } from './context/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="webshark-theme">
      <AppRouter />
      <Toaster position='top-right' richColors closeButton />
    </ThemeProvider>
  )
}

export default App

