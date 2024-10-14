import { Outlet } from "react-router-dom";

export function Books() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Knihy</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem officia? Officia officiis aliquam optio. Odit suscipit repellendus minima minus.</p>

      <div className="flex gap-6 mt-6">
        <nav className="bg-sky-100 p-3 w-48 shrink-0">
          <ul>
            <li>Kniha 1</li>
            <li>Kniha 3</li>
            <li>Kniha 4</li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default Books;