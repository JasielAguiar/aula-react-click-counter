import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleEntrar = () => {
    const nomeLimpo = nome.trim();

    if (nomeLimpo === '') {
      alert('O nome é obrigatório.');
    } else if (/\d/.test(nomeLimpo)) {
      alert('O nome não pode conter números.');
    } else {
      setMostrarMensagem(true);
    }
  };

  const handleVoltar = () => {
    setNome('');
    setMostrarMensagem(false);
  };

  return (
    <div className="container">
      {!mostrarMensagem ? (
        <>
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
          />
          <button onClick={handleEntrar} className="button">
            Entrar
          </button>
        </>
      ) : (
        <>
          <h2>Seja bem-vindo, {nome}!</h2>
          <button onClick={handleVoltar} className="button">
            Voltar
          </button>
        </>
      )}
    </div>
  );
}

export default App;
import './App.css';


