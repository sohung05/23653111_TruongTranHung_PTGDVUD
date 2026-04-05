import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const url = '/db.json';
  const [todo, setTodo] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setTodo(data.todos);
      setFilterData(data.todos);
    }
    fetchData();
  },[])



  return (
    <>
      <div>
        <h3>Add Todo</h3>
        <form>
          <div>
            <label>Title </label>
            <input 
              type='text'
              placeholder='Title'
            />
          </div>
          <div>
            <label>Complete </label>
            <input 
              type='checkbox'
              placeholder='Title'
            />
          </div>
        </form>
      </div>

      <ul>
        {filterData.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3> 
            <p>{todo.completed ? 'Completed' : 'Pending'}</p>
            <p>{todo.createdAt}</p>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
