import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as themes from './theme/schema.json';

import {saveToLocalStorage} from "./utils/storage";

const ThemeIndex = () => {
    saveToLocalStorage('all-themes', themes);

    return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeIndex />
      <App />
  </React.StrictMode>,
)
