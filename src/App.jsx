import { useState } from "react"; 

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{minHeight:"100dvh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>
      <div style={{borderRadius:16,padding:24,textAlign:"center"}}>
        <h1>Contador de Cliques</h1>
        <p>Você clicou <strong>{count}</strong> vez(es).</p>
        <button onClick={()=> setCount(c=>c+1)} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
          Clique aqui
        </button>
        {count> 0 &&(
          <button onClick={()=> setCount(0)} style={{marginLeft:8,padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
            Zerar 
          </button>
        )}
      </div>
    </main>
  );
}

