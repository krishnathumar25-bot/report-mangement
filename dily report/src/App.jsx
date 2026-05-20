import { useState } from 'react'

import addTask from './addTask';
import reports from './reports';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
   Routes, Route, Link
} from "react-router";


function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<addTask />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
