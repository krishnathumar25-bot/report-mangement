import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/addTask';
import Reports from './components/reports';
import AddTask2 from './components/addTask2';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes, Route, Link
} from "react-router";


function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AddTask />}
          />

        </Routes>
      </BrowserRouter>
    
  )
}

export default App
