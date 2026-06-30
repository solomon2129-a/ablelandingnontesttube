import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarNew from './components/NavBarNew'
import FloatingActionMenu from './components/FloatingActionMenu'
import ErrorBoundary from './components/ErrorBoundary'
import HomeNew from './pages/HomeNew'
import About from './pages/About'
import AbleHires from './pages/AbleHires'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-light text-forest font-sans">
        <NavBarNew />
        <FloatingActionMenu />
        <Routes>
          <Route path="/"          element={<ErrorBoundary><HomeNew /></ErrorBoundary>} />
          <Route path="/about"     element={<ErrorBoundary><About /></ErrorBoundary>} />
          <Route path="/ablehires" element={<ErrorBoundary><AbleHires /></ErrorBoundary>} />
          <Route path="/partner"   element={<ErrorBoundary><Partner /></ErrorBoundary>} />
          <Route path="/contact"   element={<ErrorBoundary><Contact /></ErrorBoundary>} />
          <Route path="/terms"     element={<ErrorBoundary><Terms /></ErrorBoundary>} />
          <Route path="/privacy"   element={<ErrorBoundary><Privacy /></ErrorBoundary>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
