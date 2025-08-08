import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl">Find Your College</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            ☰
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4">
          <Link to="/" className="block py-1 hover:underline">Search</Link>
          <Link to="/about" className="block py-1 hover:underline">About</Link>
          <Link to="/contact" className="block py-1 hover:underline">Contact</Link>
        </div>
      )}
    </nav>
  )
}
