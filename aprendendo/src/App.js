import React, { useState, useEffect } from "react";

function App() {

  const [input, setInput] = useState('')

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'estudar react Hooks',
    'Trabalhar na usina'
  ])

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('')
  }

  useEffect(()=> {

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

  }, [tarefas])

  useEffect(()=> {

    localStorage.getItem('tarefas', JSON.parse('tarefas'))

  }, [tarefas])

  return (
    <div>
      <ul>
          {tarefas.map(tarefa => (<li key={tarefa}>{tarefa}</li>))}
          <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button type="button" onClick={handleAdd}>Adicionar tarefa</button>
      </ul>
    </div>
  );
}

export default App;
