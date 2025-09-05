import { useEffect, useState } from 'react'
import { api } from './api_helper'

export default function App() {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch(api.core('/core/ping'))
      .then(r => r.json())
      .then(d => setMsg(`${d.response}`))
      .catch(() => setMsg('error'))
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>React ↔ Django</h1>
      <p>API says: <b>{msg}</b></p>
      <p>
        Open <code>frontend/src/App.jsx</code> and edit — Vite + Docker will hot-reload.
      </p>
    </div>
  )
}
