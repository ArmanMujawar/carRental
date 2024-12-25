import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import "./index.css";

import AdminCarManagement from './components/Admin/AdminCarManagement';
import UserLogin from './components/Authentication/UserLogin';
import UserSignup from './components/Authentication/UserSignup';
import Book from './components/Booking/Book';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';
import Faqs from './components/Review/Faqs';


function App() {
    return (
        <>
        <Router>
          
            <Routes>
                
                    
               
                <Route path="/" element={
                    <>
                        <Navbar/>
                        
                      
                        <About/>
                        <Cart />
                        <Review/>
                      
                    </>
                } />
                 
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/book" element={<Book />} />
                <Route path="/signup" element={<UserSignup /> }/>
                
               
                <Route path="/login" element={<UserLogin />} />
                <Route path="/Admin" element={<AdminCarManagement/>}/>
              
               
                <Route path="*" element={<h1>404 Not Found</h1>} />
              
              </Routes>
            <br />
             
             

              
            <Footer/>
               
        </Router>
        
       
    </>
    );
}

export default App;
