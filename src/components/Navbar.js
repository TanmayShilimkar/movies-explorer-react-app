import React from 'react'
import { Link } from 'react-router-dom';
import { Home, Search, Tv } from 'lucide-react';

function Navbar() {
  return (
    <>
        <div className="flex flex-col md:flex-row text-white bg-black min-h-screen w-16 lg:w-20 justify-center items-center overflow-hidden">
            <ul className="menu-items fixed top-0">
                <li className="items">
                    <Link className="nav-link" aria-current="page" to="/search"><Search/></Link>
                </li>
                <li className="items">
                    <Link className="nav-link active" aria-current="page" to="/"><Home /></Link>
                </li>
                <li className="items">
                    <Link className="nav-link" aria-current="page" to="/tv-series"><Tv /></Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
