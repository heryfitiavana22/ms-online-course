# ms-online-course

This is a `microservices`-based online course platform developed using TypeScript, NestJS, and Next.js. The `backend` services handle user authentication, course management, and enrollments, while the `frontend` is built with Next.js and shadcn/ui.

> This project is a POC and is under development.

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
│   │   ├── students/   
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
* **Backend:**
    * NestJS
    * Docker
    * @nestjs/microservices