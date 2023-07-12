import { createRoot } from 'react-dom/client'
import { Suspense, lazy, useEffect } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
;<Route path="/" element={<App />}></Route>

import App from './components/App/App'
import MainPage from './pages/mainPage'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route path="/Mainpage" element={<MainPage />} />
    </Route>
  </Route>,
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <AppProvider />
      </Suspense>
    </QueryClientProvider>,
  )
})
