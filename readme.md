🚀 API RESTful de Productos


📌 Información del Proyecto

👤 Nombre: Jose Garrido
📚 Asignatura: Programación Backend
🏫 Institución: Instituto Profesional IPG


📌 Descripción

API RESTful desarrollada con Node.js y Express que permite gestionar un catálogo de productos mediante operaciones CRUD (Crear, Consultar, Actualizar y Eliminar).


⚙️ Funcionalidades

📋 Listar productos
   Obtiene todos los productos registrados

🔎 Buscar producto por ID
   Permite consultar un producto específico

➕ Crear productos
   Agrega nuevos productos al catálogo

✏️ Actualizar productos
   Modifica la información de productos existentes

🗑️ Eliminar productos
   Remueve productos del sistema

📡 Respuestas HTTP
   Manejo de códigos de estado y respuestas JSON


🛠️ Tecnologías utilizadas

🟢 Node.js
⚡ Express
📦 NPM
📬 Postman
💻 Visual Studio Code
📄 JSON


📂 Estructura del Proyecto

📁 proyecto-backend
│
├── 📄 index.js
├── 📄 routes.js
├── 📄 data.js
├── 📄 package.json
└── 📄 README.md


📥 Instalación y ejecución

git clone https://github.com/usuario/repositorio.git

cd proyecto-backend

npm install

npm start

Servidor disponible en:

http://localhost:3000


📡 Endpoints Disponibles

📋 GET - Obtener todos los productos

GET /api/productos

Respuesta:

[
  {
    "id": 1,
    "nombre": "Anillo de Plata",
    "precio": 25000,
    "categoria": "Joyas"
  }
]



🔎 GET - Obtener producto por ID

GET /api/productos/1


Respuesta:

{
  "id": 1,
  "nombre": "Anillo de Plata",
  "precio": 25000,
  "categoria": "Joyas"
}

❌ Error 404:

{
  "error": "producto no encontrado"
}



➕ POST - Crear producto

POST /api/productos

Body:

{
  "nombre": "Cadena de Oro",
  "precio": 50000,
  "categoria": "Joyas"
}


Respuesta:

{
  "id": 5,
  "nombre": "Cadena de Oro",
  "precio": 50000,
  "categoria": "Joyas"
}
```


✏️ PUT - Actualizar producto

PUT /api/productos/1

Body:

{
  "nombre": "Anillo de Plata Fina",
  "precio": 28000,
  "categoria": "Joyas"
}


Respuesta:

{
  "id": 1,
  "nombre": "Anillo de Plata Fina",
  "precio": 28000,
  "categoria": "Joyas"
}



🗑️ DELETE - Eliminar producto

DELETE /api/productos/1


Respuesta:

{
  "mensaje": "producto eliminado"
}


🌐 Repositorio

🔗 https://github.com/tu-usuario/tu-repositorio.git


🎯 Objetivo del Proyecto

Implementar una API RESTful utilizando Node.js y Express, aplicando operaciones CRUD, manejo de respuestas HTTP y buenas prácticas de desarrollo backend.

