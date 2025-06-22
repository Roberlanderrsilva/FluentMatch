
import React, { useState } from 'react';

// Lista de idiomas disponíveis para seleção
const availableLanguages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'Inglês', flag: '🇬🇧' },
  { code: 'es', name: 'Espanhol', flag: '🇪🇸' },
  { code: 'fr', name: 'Francês', flag: '🇫🇷' },
  // Adicione mais idiomas conforme necessário
];

export default function LanguageSelector() {
  const [speaks, setSpeaks] = useState<string[]>([]);
  const [learns, setLearns] = useState<string[]>([]);

  const handleToggleLanguage = (
    langCode: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (list.includes(langCode)) {
      setList(list.filter((code) => code !== langCode));
    } else {
      setList([...list, langCode]);
    }
  };

  const handleSubmit = () => {
    if (speaks.length === 0 || learns.length === 0) {
      alert('Por favor, selecione pelo menos um idioma que você fala e um que quer aprender.');
      return;
    }
    console.log('Idiomas selecionados:', { speaks, learns });
    alert('Idiomas salvos simuladamente! (Verifique o console)');
    // Futuramente, aqui enviaremos os dados para o Firebase Firestore
    // E redirecionaremos para a tela de matchmaking ou perfil.
    // Ex: window.location.href = '/matchmaking';
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Idiomas que você fala:</h3>
        <div className="flex flex-wrap gap-3">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`px-5 py-2 rounded-full border-2 transition duration-200
                ${speaks.includes(lang.code)
                  ? 'bg-blue-600 border-blue-700 text-white shadow-md'
                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-blue-100'
                }`}
              onClick={() => handleToggleLanguage(lang.code, speaks, setSpeaks)}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Idiomas que você quer aprender:</h3>
        <div className="flex flex-wrap gap-3">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`px-5 py-2 rounded-full border-2 transition duration-200
                ${learns.includes(lang.code)
                  ? 'bg-green-600 border-green-700 text-white shadow-md'
                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-green-100'
                }`}
              onClick={() => handleToggleLanguage(lang.code, learns, setLearns)}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500 transition duration-300 text-xl"
      >
        Salvar Idiomas
      </button>
    </div>
  );
}