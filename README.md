<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
</p>

---

# 🚀 NestJS Users REST API

This is a **NestJS REST API project** connected with **MySQL** using **TypeORM**.  
It provides CRUD endpoints for managing users.

---

## 📦 Project setup

```bash
# Install NestJS CLI globally
npm i -g @nestjs/cli

# Create a new project
nest new learning-nestjs

# Navigate into the project
cd learning-nestjs
```

---

## ▶️ Running the project

```bash
# development
npm run start:dev

# development with 20x faster compilation (SWC)
npm run start:dev -- -b swc

# production mode
npm run start:prod

# format with prettier
npm run format
```

Open your browser at 👉 `http://localhost:3000` or test APIs using `Postman`

---

## 🛠️ Database Setup (MySQL)

1. Make sure MySQL is running on your machine.
2. Create a database:
    ```sql
    CREATE DATABASE users;
    ```

3. Update **`app.module.ts`** with your credentials:

    ```typescript
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "your_username",
      password: 'your_password',
      database: "users",
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    ```

---

## 📚 Generate `users` resource

```bash
nest generate resource users
```

This generates:
- REST API Controller  
- CRUD Service  
- DTOs (Data Transfer Objects)  
- Entity file  

---

## 📦 Other needed packages

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

- **TypeORM**

  > an Object-Relational Mapper (ORM) for JavaScript and TypeScript that allows developers to interact with databases using object-oriented principles, rather than writing raw SQL

- **mysql2** (MySQL driver)

  > a popular Node.js library designed for interacting with MySQL databases. 

---

## 👤 User Entity Example

```typescript
@Entity()
export class User {
  // auto increment column
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
```

---

## 📌 API Endpoints

| Method | Endpoint      | Description          | Body Example |
|--------|--------------|----------------------|--------------|
| **POST**   | `/users`       | Create a new user   | `{ "firstName": "Vladmir", "lastName": "Putin", "email": "vlad@russiamail.com", "password": "1234#" }` |
| **GET**    | `/users`       | Get all users       | - |
| **GET**    | `/users/id`   | Get user by ID      | - |
| **PATCH**    | `/users/id`   | Update user by ID   | `{ "email": "vput@russiamail.com" }` |
| **DELETE** | `/users/id`   | Delete user by ID   | - |

---

## 📖 Example Usage

**Create User**

```bash
POST http://localhost:3000/users
Content-Type: application/json

{
    "firstName": "Keerthy",
    "lastName": "Suresh",
    "email": "ks@bharatmail.com",
    "password": "12345678@"
}
```

**Response:**
```json
{
  "id": 5,
  "firstName": "Keerthy",
  "lastName": "Suresh",
  "email": "ks@bharatmail.com",
  "password": "12345678@"
}
```

---

## 💻 Run this project locally

Follow these steps to get the project up and running on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/Rahullkumr/learning-nestjs.git

# 2. Navigate into the project folder
cd learning-nestjs

# 3. Install dependencies
npm install

# 4. Create a database in MySQL (if not already created)
CREATE DATABASE users;

# 5. Update database credentials
# Edit `src/app.module.ts` (or use `.env` configuration)

# 6. Run the project in development mode
npm run start:dev
```

---

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com)  
- [API Documentation (Swagger)](https://swagger.io/) 
- [NestJS Devtools](https://devtools.nestjs.com)  
- [TypeORM Docs](https://typeorm.io)  
- [Postman](https://www.postman.com/)  
- [Nestjs Jobs](https://jobs.nestjs.com)

---

## ✅ Future Improvements

- Add validations with `class-validator`  
- Hash passwords before saving (e.g., with `bcrypt`)  
- Implement authentication (JWT)  
- Add pagination for `GET /users`  
- Implement API documentation using `Swagger`

---
Note: Updation required
