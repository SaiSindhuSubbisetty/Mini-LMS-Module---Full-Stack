# 🧾Mini LMS (Learning Management System)
---
## 📚 Project Overview

This is a **Mini LMS (Learning Management System)** built with:

* **Backend:** Spring Boot + PostgreSQL + Gradle (Groovy DSL)
* **Frontend:** Next.js (App Router) + Tailwind CSS

Users can:

✅ View a list of **courses → modules → lessons**
✅ View **lesson content** (text/image/video)
✅ Mark lessons as complete
✅ Track progress at module and course levels

---

## ⚙️ Backend Setup (Spring Boot + Gradle)

### 🛠 Prerequisites

* Java 17+
* Gradle (Groovy DSL) - comes bundled with the wrapper (`./gradlew`)
* PostgreSQL

### 📂 Folder Structure

```
lms-backend/
├── build.gradle
├── settings.gradle
├── src/
│   └── main/
│       ├── java/com/example/lms/
│       │   ├── controller/
│       │   ├── dto/
│       │   ├── entity/
│       │   ├── repository/
│       │   └── service/
│       └── resources/
│           ├── application.properties
```

### 🧪 Sample `application.properties`

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/lms_db
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 🚀 Run the App

```bash
cd lms-backend
./gradlew bootRun
```
---
## 📸 UI Screenshots

### 📘 Courses List Page
![Courses](./screenshots/courses-page.png)

### 📗 Course Detail Page (`/courses/[id]`)
![Course Detail](./screenshots/course-detail.png)

### 📕 Module Page (`/modules/[id]`)
![Module](./screenshots/module-view.png)

### 📒 Lesson - Text
![Lesson Text](./screenshots/lesson-text.png)

### 🖼️ Lesson - Image
![Lesson Image](./screenshots/lesson-image.png)

### 📹 Lesson - Video
![Lesson Video](./screenshots/lesson-video.png)
---

---

## 🌐 Frontend Setup (Next.js + Tailwind CSS)

### 🛠 Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### 📂 Folder Structure

```
lms-frontend/
lms-frontend/
├── public/
├── src/
│   ├── pages/
│   │   ├── index.tsx                 // Redirect to /courses
│   │   ├── courses/
│   │   │   ├── index.tsx            // List all courses
│   │   │   └── [id].tsx             // Course detail with modules + progress
│   │   ├── modules/
│   │   │   └── [id].tsx             // Module detail with lessons
│   │   └── lessons/
│   │       └── [id].tsx             // Lesson detail + mark as complete
│   ├── components/
│   │   ├── CourseCard.tsx
│   │   ├── ModuleCard.tsx
│   │   ├── LessonCard.tsx
│   │   └── ProgressBar.tsx
│   ├── lib/
│   │   └── api.ts                   // Axios API config
│   └── types/
│       └── index.ts                // Shared TypeScript types
├── styles/
│   └── globals.css                 // Tailwind base
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### 🧪 Run the App

```bash
cd lms-frontend
npm install
npm run dev
```

---

## ✅ Features Covered

### Courses Page (`/courses`)

* ✅ Lists all available courses
* ✅ Each course links to its modules

### Modules Page (`/courses/[courseId]`)

* ✅ Lists all modules of a course
* ✅ Shows progress based on lesson completion

### Lessons Page (`/lessons/[id]`)

* ✅ Renders lesson based on type (TEXT / IMAGE / VIDEO)
* ✅ "Mark as Complete" button updates status in UI

---

## 📦 Tech Stack

* **Backend:** Java, Spring Boot, JPA, PostgreSQL, Gradle
* **Frontend:** React, Next.js (App Router), Tailwind CSS
* **Tools:** VS Code, Postman, Thunder Client

---

## 🧪 Sample Users & Data

You can initialize lessons in `/src/data/index.ts`:

```ts
export const lessons = [
  {
    id: 1,
    title: "Intro to Java",
    type: "TEXT",
    content: "Java is a popular OOP language.",
  },
  {
    id: 2,
    title: "Variables in Java",
    type: "VIDEO",
    content: "https://www.youtube.com/embed/BJeQ8Y3aHjQ",
  },
  {
    id: 3,
    title: "Java Logo",
    type: "IMAGE",
    content: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
];
```

---

## 💡 Future Improvements

* ✅ API integration (replace mock data)
* ⬜ Add authentication (login/register)
* ⬜ Track user-specific progress in DB
* ⬜ Admin panel to add/edit courses, modules, lessons

---
👩‍💻 Author
Sai Sindhu Subbisetty
GitHub Profile : https://github.com/SaiSindhuSubbisetty
---
