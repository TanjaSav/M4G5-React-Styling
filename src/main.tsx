import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/M4G5-React-Styling/'>
      <Routes>
        <Route path="/" element={<App/>} />
        {/* <Route path="/CategoriePage" element={<CategoriesPage/>} /> */}
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
