import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Book from './components/Book';
import UserSignup from './components/Authentication/UserSignup';
import UserLogin from './components/Authentication/UserLogin';
import Landing from './components/Landing';
import AdminCarManagement from './components/Admin/AdminCarManagement';

import Review from './components/Review'

function App() {
    return (
        <>
        <Router>
          
            <Routes>
                
                    
               
                <Route path="/" element={
                    <>
                        <Navbar/>
                        <Landing />
                        <Cart />
                        <Review/>
                      
                    </>
                } />
         
                <Route path="/book" element={<Book />} />
                {/* <Route path="/signup" element={<UserSignup />} /> */}
               
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
