import { useEffect, useState } from 'react'

function Bai2() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setUser(data)
                    setLoading(false)
                })
                .catch(error => {
                    setErr(error)
                    setLoading(false)
                })
        }, 1000)
    }, [])

    return (
        <div>
            <h2 className='DanhSach'>Danh Sach List</h2>

            {loading ? (
                <p>Loading...</p>
            ) : err ? (
                <p>{err.message}</p>
            ) : (
                user.map(a => (
                    <p key={a.id}>
                        Name: {a.name} <br />
                        Email: {a.email}
                    </p>
                ))
            )}

        </div>
    )
}

export default Bai2