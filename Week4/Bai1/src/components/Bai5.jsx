import React, { useEffect, useState } from 'react'

function Bai5  ()  {
  const [todos, setTodos] = useState([])
      const [title, setTitle] = useState("")
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)
  
      useEffect(()=>{
          fetch("https://698318939c3efeb892a462c2.mockapi.io/todos")
              .then((res)=>res.json())
              .then((data)=>setTodos(data))
              .catch((e)=>setError(e))
      },[])
  
      const handleAdd = async (e) => {
          e.preventDefault()
          if (!title.trim()) return 
          setLoading(true)
          setError(null)
  
          const newTodo = {
              title : title,
              completed : false
          }
  
          try {
              const res = await fetch("https://698318939c3efeb892a462c2.mockapi.io/todos",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(newTodo)
          })
              if (!res.ok) throw new Error("Thêm thất bại")
              const data = await res.json()
              setTodos([...todos,data])
              setTitle("")
          } catch (error) {
              setError(error.message)
          }   
          setLoading(false)
      }
  
      const handleDelete = async (id) => {
          const oldTodos = [...todos]
          setTodos(todos.filter((todo)=>todo.id !== id))
          try {
              await fetch(`https://698318939c3efeb892a462c2.mockapi.io/todos/${id}`,{
                  method: "DELETE"
              })
          } catch (error) {
              setError(error.message)
              setTodos(oldTodos)
          }
  
  
      }
  
    return (
      <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Todo App
          </h1>
          
          <form onSubmit={handleAdd} className="flex gap-3 mb-6">
              <input 
                  type="text" 
                  placeholder="Nhập công việc cần làm..." 
                  value={title}  
                  onChange={(e) => setTitle(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button 
                  disabled={loading}
                  className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                  {loading ? "Đang thêm..." : "Thêm"}
              </button>
          </form>
  
          {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center font-medium">{error}</div>
          )}
  
          <ul className="space-y-3">
              {todos.map((todo) => (
                  <li 
                      key={todo.id} 
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                      <span className="text-gray-700 font-medium">
                          {todo.title}
                      </span>
                      <button 
                          onClick={() => handleDelete(todo.id)} 
                          className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200 transition-colors"
                      >
                          Xóa
                      </button>
                  </li>
              ))}
              {todos.length === 0 && !loading && (
                  <div className="text-center text-gray-500 text-sm mt-6 italic">
                      Chưa có công việc nào. Hãy bắt đầu thêm mới nhé!
                  </div>
              )}
          </ul>
      </div>
  )
}

export default Bai5