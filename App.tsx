import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import ReservationPage from './components/pages/ReservationPage';
import EventsPage from './components/pages/EventsPage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import AdminPage from './components/pages/AdminPage';
import CheckoutPage from './components/pages/Checkout';
import OrderTrackingPage from './components/pages/OrderTrackingPage';
import Chatbot from './components/Chatbot';

export type Page = 'home' | 'menu' | 'reservations' | 'events' | 'gallery' | 'contact' | 'admin' | 'Checkout' |'orderTracking';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem('theme') as 'light' | 'dark' || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage navigate={setCurrentPage} />;
            case 'menu':
                return <MenuPage />;
            case 'reservations':
                return <ReservationPage />;
            case 'events':
                return <EventsPage navigate={setCurrentPage} />;
            case 'gallery':
                return <GalleryPage />;
            case 'contact':
                return <ContactPage />;
            case 'admin':
                return <AdminPage />;
            case 'Checkout':
                return <CheckoutPage navigate={setCurrentPage} />;
            case 'orderTracking':
                return <OrderTrackingPage />;
            default:
                return <HomePage navigate={setCurrentPage} />;
        }
    };
    
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <AppProvider>
            <div className={`flex flex-col min-h-screen bg-off-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-500`}>
                <Header currentPage={currentPage} navigate={setCurrentPage} toggleTheme={toggleTheme} theme={theme} />
                <main className="flex-grow">
                    {renderPage()}
                </main>
                <Footer navigate={setCurrentPage} />
                <Chatbot />
            </div>
        </AppProvider>
    );
};

export default App;