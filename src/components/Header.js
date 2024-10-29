import React from 'react';

function Header() {
    return (
        <header className="bg-blue-600 p-4 text-white">
            <nav className="flex justify-between">
                <h1 className="text-lg font-bold">Mi Sitio</h1>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-200">About</a></li>
                    <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
