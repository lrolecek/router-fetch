import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Books from './components/Books.jsx'
import Book from './components/Book.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />}>
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
