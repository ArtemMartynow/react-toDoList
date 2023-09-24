import React from 'react';
import * as ReactDomClient from 'react-dom/client'
import App from './App'
import './scss/style.scss'
import './scss/header.scss'


const app = ReactDomClient.createRoot(document.getElementById('root'))
app.render(<App />)
