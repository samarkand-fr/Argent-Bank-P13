import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components imports
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';
// styles imports
import { GlobalStyle } from './assets/GlobalStyles';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <section>
          {/* Routes component from React Router, defines the routes */}
          <Routes>
            {/* Each Route maps a path to a specific component */}
            <Route path="/" element={<Homepage />} /> {/* Homepage component mapped to the root path */}
            <Route path="/sign-in" element={<SignInPage />} /> {/* SignInPage component mapped to /sign-in path */}
            <Route path="/user" element={<UserDashboard />} /> {/* UserDashboard component mapped to /user path */}
            <Route path="*" element={<NotFound />} /> {/* NotFound component for any other unmatched path */}
          </Routes>
        </section>
      </main>
      <Footer />
    </Router>
  );
};
