import { useEffect, useState } from 'react'

function Bai1() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!ignore) setUsers(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();

    return () => { ignore = true; };
  }, []);


  return (

<div>
      <h2>Users</h2>
      
        {users.map(u => (
          <p key={u.id}>
            <strong>{u.name}</strong> va {u.email}
          </p>
        ))}
      
    </div>
  );

}

export default Bai1
