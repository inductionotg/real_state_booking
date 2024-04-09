import React from 'react'
import ReactDOM from 'react-dom/client'
import { seedLocalDatabase } from '@/api/data/seed';
import App from './App.jsx'
import './index.css'
seedLocalDatabase();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
