import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {

  const [input, setInput] = useState('')

  const [tarefas, setTarefas] = useState([])

  const handleAdd = useCallback(()=> {

    if(input !== ''){

    setTarefas([...tarefas, input])
    setInput('')
    }else{
      alert("Digite algo!!!")
    }
  }, [input, tarefas])


  useEffect(()=>{
    localStorage.setItem("tarefas", JSON.stringify('tarefas'))

  },[tarefas])

const totalTarefas = useMemo(()=> tarefas.length, [tarefas])

  return (
    <div>
      <ul>
          {tarefas.map(tarefa => (<li key={tarefa}>{tarefa}</li>))}<br/>
          <strong><text>Voce tem {totalTarefas} tarefas!</text></strong><br/>
          <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button type="button" onClick={handleAdd}>Adicionar tarefa</button>
      </ul>
    </div>
  );
}

export default App;
