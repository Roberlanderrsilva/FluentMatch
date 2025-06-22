import React from 'react';

export default function Header() {
  const currentYear = new Date().getFullYear();
  return (
    <header className="w-full bg-gray-800 text-white p-4 mt-8 shadow-md">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} FluentMatch. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="#" className="text-blue-300 hover:underline">Privacidade</a> |{' '}
          <a href="#" className="text-blue-300 hover:underline">Termos</a>
        </p>
      </div>
    </header>
  );
}