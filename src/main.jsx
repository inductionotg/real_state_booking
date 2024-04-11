import React from 'react'
import ReactDOM from 'react-dom/client'
import { seedLocalDatabase } from '@/api/data/seed';
import App from './App.jsx'
import './index.css'
import Router from './Router.jsx';
seedLocalDatabase();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
