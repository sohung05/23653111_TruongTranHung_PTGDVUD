import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bai3() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(() => {
                setError("Loi API")
                setLoading(false)
            })

    }, [])
    if (loading) return <h2>Loading...</h2>

    if (error) return <h2>{error}</h2>

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

export default Bai3
