import {Outlet, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <header className="p-7 bg-sky-500 text-white">
        <h1 className="text-3xl font-bold">React Router a Fetch</h1>

        <nav className="mt-3 flex gap-4">
          <Link to="/">Úvod</Link>
          <Link to="books">Knihy</Link>
        </nav>
      </header>

      <main className="p-7">
        <Outlet />
      </main>
    </>
  )
}

export default App
