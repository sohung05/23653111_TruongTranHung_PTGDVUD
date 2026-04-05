import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'
import { useEffect } from 'react'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
      setFilterData(data);
    } 
    fetchData(); 
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTitle(value);

    const filtered = data.filter((item) => 
      item.title.toLowerCase().includes(value.toLowerCase())
    )

    setFilterData(filtered);
  }

  return (
    <>
      <div>
        <input
        type='text'
        placeholder='Search title'
        value={searchTitle}
        onChange={handleSearch}
        style={{width: 1000}}
        />
      </div>

      <ul>
        {filterData.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
