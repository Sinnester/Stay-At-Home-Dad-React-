import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './styles.css'; // import styles

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      {renderPage()}
    </div>
  );
}

export default App;
