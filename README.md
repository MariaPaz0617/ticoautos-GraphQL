# TicoAutos GraphQL

Backend alternativo del sistema **TicoAutos** desarrollado con **GraphQL**, **Apollo Server**, **Express** y **MongoDB**.
Este servicio expone una API GraphQL para gestionar y consultar los vehículos de la plataforma.

---

## Tecnologías utilizadas

* Node.js
* Express.js
* Apollo Server
* GraphQL
* MongoDB
* Mongoose
* JWT (Json Web Token)
* CORS
* Dotenv

## Estructura del proyecto

```
ticoautos-GraphQL
│
├── src
│   ├── config
│   │   └── BD.js
│   │
│   ├── graphql
│   │   ├── typeDefs.js
│   │   ├── resolvers.js
│   │   └── context.js
│   │
│   ├── models
│   │   └── vehicle.model.js
│
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Instalación

1. Clonar el repositorio y entrar a la carpeta
```bash
git clone https://github.com/Jimenajr05/ticoautos-GraphQL.git
cd ticoautos-GraphQL
```

2. Instalar dependencias
```bash
npm install
```

3. Crear archivo `.env`
```env
PORT=5001
DATABASE_URL=mongodb+srv://usuario:password@cluster.mongodb.net/ticoautos_bd?retryWrites=true&w=majority
JWT_SECRET=ticoautos-secret-key
```

4. Ejecutar el servidor
```bash
# Modo producción
npm start

# Modo desarrollo
npm run dev
```

El servidor estará corriendo en `http://localhost:5001/graphql`.

---

## Consultas (Queries)

La API permite realizar las siguientes consultas mediante GraphQL:

* `getVehicle(id: ID!)`: Devuelve la información de un vehículo específico.
* `getAllVehicles`: Devuelve todos los vehículos de forma pública.
* `getAllVehiclesAuth`: Devuelve todos los vehículos (requiere token de autenticación en los headers).

---

## Autoras

- María Paz Ugalde Araya
- María Jimena Jara Rojas