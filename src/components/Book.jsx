import { useParams, useOutletContext } from "react-router-dom";
import {useState, useEffect} from 'react';


function BookDetail({book, onEdit}) {
  return (
    <>
      <h3 className="text-xl font-bold mb-3">{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Rating:</strong> {'⭐'.repeat(book.rating)}</p>
      <p>{book.summary}</p>
      <button className="mt-4 bg-sky-600 text-white p-3" onClick={onEdit}>Editovat knihu</button>
    </>
  )
}

function BookEdit({book, onSave, onCancel}) {

  const [form, setForm] = useState(book)

  const handleSubmit = (e) => {
    e.preventDefault()

    // validace formulare
    // ... ted preskocime

    onSave(form)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="mt-2">
          <label className="block font-bold">Title</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Author</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Year</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Rating</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Summary</label>
          <textarea
            className="border border-slate-500 p-1 w-64" type="text" rows="5"
            name="summary"
            value={form.summary}
            onChange={handleChange}
          />
        </div>


        <div className="flex gap-2 mt-4">
          <button type="submit" className="mt-4 bg-sky-600 text-white p-3">Uložit</button>

          <button className="mt-4 bg-slate-600 text-white p-3" onClick={onCancel}>Zrušit</button>
        </div>

      </form>
    </>
  )
}








export function Book() {

  const {bookId} = useParams()
  const {onBookUpdate} = useOutletContext()

  const [book, setBook] = useState(null)
  const [isEdited, setIsEdited] = useState(false)

  useEffect(
    () => {
      async function getBook() {
        const response = await fetch(`http://localhost:3000/books/${bookId}`)
        const data = await response.json()
        setBook(data)
      }

      getBook()
    },
    [bookId]
  )


  const saveBook = async (updatedBook) => {
    const response = await fetch(`http://localhost:3000/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedBook)
    })

    if (response.ok) {
      setBook(updatedBook)
      setIsEdited(false)
      onBookUpdate()
    } else {
      console.log('chyba pri ukladani', response.statusText)
    }

  }

  return (
    <div>
      {
        book === null
        ? <p>Načítám data...</p>
        : (
            isEdited
            ? <BookEdit
                book={book}
                onSave={saveBook}
                onCancel={() => {setIsEdited(false)}}
              />
            : <BookDetail
                book={book}
                onEdit={() => {setIsEdited(true)}}
              />
          )
      }
    </div>
  );
}

export default Book;