import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './App.css';
import { useEffect, useState } from "react";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);  // Transforma uma string JSON em objeto JavaScript ou coloca lista vazia

  useEffect(() => {
    // Hook que faz alguma coisa quando algo é alterado, nesse caso, quando tasks é alterada, ele salva no localStorage as tasks atuais

    localStorage.setItem('tasks', JSON.stringify(tasks)); // JSON.Stringify() transforma um objeto(ou array) em uma string no formato JSON
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted};   // Retorna tudo da task id igual ao taskId, porém retorna o "isCompleted" como false
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;                                          // Se não passou na condição, retorna a task da iteração atual normalmente
    });   

    setTasks(newTasks);                                     // Atualiza tasks
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);  // Cria um array onde filtra os objetos de tasks e somente passa a task se o seu id for diferente do taskId

    setTasks(newTasks);                                         // Atualiza tasks com elas filtradas
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask]);  // Adiciona tudo de tasks que tinha anteriormente mais a nova task
  }

  return (
    <>
      <div className="container">
        <div className="g-container">
          <Title>Gerenciador de Tarefas</Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
    </>
  )
}

export default App;

// Minuto 58:41
