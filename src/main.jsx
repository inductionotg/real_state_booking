import React from 'react'
import ReactDOM from 'react-dom/client'
import { seedLocalDatabase } from '@/api/data/seed';
import App from './App.jsx'
import './index.css'
import Router from './Router.jsx';
import { Provider } from 'react-redux';
import {store} from './state/state.js'
import { AuthProvider } from './components/AuthProvider.jsx';
seedLocalDatabase();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={store}>
      <AuthProvider>
        <Router/>
      </AuthProvider>
      
    </Provider>
    
  </React.StrictMode>,
)
