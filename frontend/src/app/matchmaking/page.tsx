
'use client'; // Necessário para usar useState e simular navegação

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Hook para navegação no Next.js 13+
import Header from '../components/Header';


export default function MatchmakingPage() {
  const [isFindingMatch, setIsFindingMatch] = useState(true);
  const router = useRouter(); // Inicializa o hook de roteamento

  useEffect(() => {
    // Simula o processo de encontrar um match após 3 segundos
    const timer = setTimeout(() => {
      setIsFindingMatch(false);
      // Redireciona para a página de chat após um pequeno atraso para o usuário ver o "match encontrado"
      setTimeout(() => {
        router.push('/chat'); // Redireciona para a rota /chat
      }, 1000);
    }, 3000); // 3 segundos para encontrar o match

    // Limpa o timer se o componente for desmontado antes
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4 text-center">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full">
        {isFindingMatch ? (
          <>
            <h1 className="text-4xl font-bold text-indigo-700 mb-4 animate-pulse">Buscando um parceiro de idioma...</h1>
            <p className="text-gray-600 text-lg">Preparando sua conexão para uma nova conversa.</p>
            <div className="mt-8 flex justify-center items-center">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 animate-spin"></div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-green-700 mb-4">Match Encontrado! 🎉</h1>
            <p className="text-gray-700 text-lg">Você será redirecionado para o chat em breve.</p>
          </>
        )}
      </div>
      {/* Estilo para o loader spinner */}
      <style jsx>{`
        .loader {
          border-top-color: #6366f1; /* Cor primária do seu tema */
        }
      `}</style>
    </div>
  );
}