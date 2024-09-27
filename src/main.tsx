import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>

    <App/>

 </BrowserRouter>
)
