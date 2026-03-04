const API_URL = "https://69830f789c3efeb892a43e3b.mockapi.io/product";

/* FETCH THEN */

function getFetch() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => render(data));
}

function addFetch() {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, price })
  })
  .then(res => res.json())
  .then(() => getFetch());
}


/*  ASYNC AWAIT */

async function getAsync() {
  const res = await fetch(API_URL);
  const data = await res.json();

  render(data);
}

async function addAsync() {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, price })
  });

  getAsync();
}


/* AXIOS  */

function getAxios() {
  axios.get(API_URL)
    .then(res => render(res.data));
}

function addAxios() {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  axios.post(API_URL, { name, price })
    .then(() => getAxios());
}


/* ================= UPDATE ================= */

async function update(id) {

  const newName = prompt("Tên mới:");

  if (!newName) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: newName })
  });

  getAsync();
}


/* ================= DELETE ================= */

function remove(id) {

  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
  .then(() => getAsync());
}


/* ================= RENDER ================= */

function render(data) {

  const list = document.getElementById("list");

  list.innerHTML = "";

  data.forEach(p => {
    list.innerHTML += `
      <li>
        ${p.name} - ${p.price}k

        <button onclick="update('${p.id}')">Sửa</button>
        <button onclick="remove('${p.id}')">Xóa</button>
      </li>
    `;
  });
}
