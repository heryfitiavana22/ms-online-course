# ms-online-course

This is a `microservices`-based online course platform developed using TypeScript, NestJS, and Next.js. The `backend` services handle user authentication, course management, and enrollments, while the `frontend` is built with Next.js and shadcn/ui.

> This project is a POC and is under development.

## Demo


https://github.com/user-attachments/assets/68d89071-1741-4dd2-a25e-e821c51a7e8a



## Features

- **User**: authentification, role-based access control (student, instructor, admin).
- **Course**: Instructors can create, update, and delete courses.
- **Enrollments**: Students can enroll in courses.
- **Role Protection**: Different routes are protected based on user roles.
- **Microservices Architecture**: The `backend` is divided into microservices for scalability and maintainability.

## Project Structure

```bash
ms-online-course/
│
├── backend/                    
│   ├── gateway/                
│   ├── auth/                   
│   ├── course/                 
│   ├── enrollment/             
│   ├── user/     
│   └── docker-compose.yml        
│
├── frontend/ 
│   ├── apps/  
│   │   ├── admin/                
│   │   ├── instructor/   
│   │   ├── client/   
│   ├── packages/  
│   │   ├── data-type/                
│   │   ├── repository/   
│   │   ├── ui/    
│   ├── pnpm-workspace.yaml    
│   └── turbo.json               

```

## Technologies

* **Frontend:**
    * Next.js
    * shadcn/ui
    * Tailwind
    * turborepo
* **Backend:**
    * NestJS
    * Docker
    * @nestjs/microservices
