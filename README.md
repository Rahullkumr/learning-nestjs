<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
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

> `Note`: No need to install **node_modules** (i.e `npm i`), it will be done automatically.

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

- **Hello World!** will be visible 

✅ Congratulations your initial setup is done.

---

## 🛠️ Database Setup (MySQL)

1. Download and install MySQL [click here](https://dev.mysql.com/downloads/installer/)

2. Make sure MySQL is running on your machine.

3. Create a database (give name as per your wish):
    ```sql
    CREATE DATABASE users;
    ```
---

## 📚 REST API creation process

```bash
nest generate resource users
```

- Select REST API

- type `y` (for CRUD endpoints)

- This generates:
  - REST API Controller  
  - CRUD Service  
  - DTOs (Data Transfer Objects)  
  - Entity file  

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

- **TypeORM**

  > an Object-Relational Mapper (ORM) for JavaScript and TypeScript that allows developers to interact with databases using object-oriented principles, rather than writing raw SQL

- **mysql2** (MySQL driver)

  > a popular Node.js library designed for interacting with MySQL databases. 

---

## Updation at code level

- Update import array in **app.module.ts** with your credentials like this:

  ```typescript
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',        // enter your database username
      password: '',        // enter your password 
      database: 'users',   // enter your database name 
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
      synchronize: true, 
      // Set to false in production
      // true  -> drop previous table and create from starting
      // false -> just update the existing table
    }),
    UsersModule
  ],
  ```
- Fix the error (if any), by importing that module

- Update **user.entity.ts** with the columns details (entity == table in db)

  ```typescript
  import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

  @Entity()  // pass a name to change the tablename (default is user)
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

- Update the **users.service.ts** like this:

  ```ts
  import { Injectable } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { Repository } from 'typeorm';
  import { InjectRepository } from '@nestjs/typeorm';
  import { User } from './entities/user.entity';

  @Injectable()
  export class UsersService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
    ){}

    create(createUserDto: CreateUserDto) {
      return this.userRepository.save(createUserDto);
    }

    findAll() {
      return this.userRepository.find();
    }

    findOne(id: number) {
      return this.userRepository.findOneBy({id});
    }

    update(id: number, updateUserDto: UpdateUserDto) {
      return this.userRepository.update(id, updateUserDto);
    }

    remove(id: number) {
      return this.userRepository.delete(id);
    }
  }
  ```

- Update **users.module.ts** like this:
  ```ts
  import { Module } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { UsersController } from './users.controller';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { User } from './entities/user.entity';

  @Module({
    imports: [TypeOrmModule.forFeature([User])], // User is entity
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}
  ```

- Finally run the project using `npm run start:dev`

- ✅ Congratulations your REST API with CRUD endpoints created successfully.

---

## 📌 Testing API Endpoints in Postman

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
