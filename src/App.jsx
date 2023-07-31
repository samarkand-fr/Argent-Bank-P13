import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components imports
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import UserDashboard from './pages/UserDashboard'
import NotFound from './pages/NotFound'


// styles imports
import { GlobalStyle } from './assets/GlobalStyles'



export const App = () => {
  return (
      <Router>
        <GlobalStyle />
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" element={< Homepage/>} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/user" element={<UserDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </Router>
   
  )
}
