import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bai1() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  return (
    <>
    <h2>Danh sach use Users</h2>
    {user.map(user => (
       <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>

    ))}

    </>
  )
}

export default Bai1 
