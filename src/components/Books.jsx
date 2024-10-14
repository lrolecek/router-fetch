import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export function Books() {

  const [books, setBooks] = useState(null)
  const [error, setError] = useState('')


  async function getBooks() {
    try {
      const response = await fetch('http://localhost:3000/books')
      if (response.ok) {
        const data = await response.json()
        setBooks(data)
      } else {
        setError(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      setError(err.message)
    }
  }


  useEffect(
    () => {
      getBooks()
    },
    []
  )

  const handleBookUpdate = () => {
    getBooks()
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Knihy</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem officia? Officia officiis aliquam optio. Odit suscipit repellendus minima minus.</p>

      {error && <p className="text-red-600 mt-5"><strong>CHYBA:</strong><br />{error}</p>}

      <div className="flex gap-6 mt-6">
        <nav className="bg-sky-100 p-3 w-64 shrink-0">
          {
            books === null
            ? <p>Načítám data...</p>
            : <ul>
                {books.map(book => (
                  <li key={book.id} className="border border-b-sky-700">
                    <Link to={book.id} className="block p-2">
                      <strong>{book.title}</strong><br/>
                      <span className="text-sm text-slate-400">{book.author}</span>
                    </Link>
                  </li>
                ))}
              </ul>
          }
        </nav>

        <Outlet context={{onBookUpdate: handleBookUpdate}} />
      </div>
    </div>
  );
}

export default Books;