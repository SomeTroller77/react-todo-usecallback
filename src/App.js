import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Todos from './todos';
function App() {
  const [todos, setTodos] = useState([]);
  const addTodos = useCallback((_val) => {
    console.log("read")
    setTodos((val) => [...todos, _val])
  }, [todos]);
  return(
    <Todos todos={todos} addTodos={addTodos}/>
  );
}

export default App;
