import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, settodos] = useState([]);

  return (
    <>
    <CreateTodo />
    <Todos todos={todos}/>
    </>
  )
}

export default App
