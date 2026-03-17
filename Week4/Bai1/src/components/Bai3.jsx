import React, { useEffect, useState } from 'react'

function Bai3  ()  {
  const [id, setId] = useState(null)
  const [datas, setData] = useState(null)
  const [error, setErr] = useState("")

  useEffect(() => {

    if (id === null) return

    if (id < 1 || id > 10) {
      setErr("User not found")
      setData(null)
      return
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setErr("")
      })
      .catch(err => {
        console.log(err)
        setErr("API error")
      })

  }, [id])

  return (
    <div>

      <h2>Danh Sach User</h2>

      <input
        type="number"
        placeholder="Nhap so tu 1-10"
        onChange={(e) => setId(Number(e.target.value))}
      />

      {error && <p>{error}</p>}

      {datas && (
        <div>
          <p>Name: {datas.name}</p>
          <p>Phone: {datas.phone}</p>
          <p>Website: {datas.website}</p>
        </div>
      )}

    </div>
  )
}

export default Bai3