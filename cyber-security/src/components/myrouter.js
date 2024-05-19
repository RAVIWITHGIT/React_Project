import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/home';
import Service from './service/myService';
import Certificat from './certificat/certificat';
import Course from './coursePage/course';
import About from './aboutUs/about';
import SignIn from './signIn';

const Myrouter = () => {
  return (
    <div>
         <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/cetificat" element={<Certificat/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
          
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Myrouter
