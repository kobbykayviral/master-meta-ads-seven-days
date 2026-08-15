import { useEffect, useState } from 'react'
import Landing from './pages/Landing.jsx'
import Success from './pages/Success.jsx'

// Lightweight hash-based routing (`#/success`) — this avoids any server-side
// rewrite configuration being needed on GitHub Pages / static hosting.
// The Xharp return/redirect URL should point to: <your-site-url>/#/success
function getRoute() {
  return window.location.hash.replace('#', '') || '/'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === '/success') return <Success />
  return <Landing />
}
