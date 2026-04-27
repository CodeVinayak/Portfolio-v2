import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { HomePage } from './pages/HomePage/HomePage'
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails'

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Analytics />
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
