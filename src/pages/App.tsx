import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import  Stopwatch  from '../components/Stopwatch';
import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} 
      />
      <Stopwatch selecionado={selecionado}/>
    </div>
  );
}

export default App;
