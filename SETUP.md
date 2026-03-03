
---

# 📄 SETUP.md

---

# 🧑‍💻 Student Management System – Local Setup Guide

This guide explains how to run the full project locally from scratch.

Project structure:

```
Student_management-springboot/
│
├── backend/        → Spring Boot API
└── frontend/       → Angular 19 (SSR enabled)
```

---

# ✅ 1. Prerequisites

Install the following:

### 🔹 Node.js (Required)

```
Node.js v20.x
```

Verify:

```bash
node -v
npm -v
```

---

### 🔹 Angular CLI

```bash
npm install -g @angular/cli
```

Verify:

```bash
ng version
```

---

### 🔹 Java (Backend)

```
Java 17+
```

Verify:

```bash
java -version
```

---

### 🔹 Maven (if not using wrapper)

```bash
mvn -v
```

If backend has `mvnw`, Maven global install is not required.

---

# 🚀 2. Backend Setup (Spring Boot)

Go to backend folder:

```bash
cd backend
```

---

### Install dependencies & build

If using Maven wrapper:

```bash
./mvnw clean install
```

Windows:

```powershell
mvnw.cmd clean install
```

---

### Run backend

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

Backend should start on:

```
http://localhost:8080
```

---

# 🌐 3. Frontend Setup (Angular 19 + SSR)

Go to frontend folder:

```bash
cd frontend/student-frontend
```

---

## 🔹 Install Dependencies

```bash
npm install
```

---

## 🔹 Clean Angular Cache (Important)

```bash
Remove-Item -Recurse -Force .angular   # Windows
```

Mac/Linux:

```bash
rm -rf .angular
```

---

## 🔹 Start Development Server (SSR Enabled)

```bash
npx ng serve
```

Frontend runs on:

```
http://localhost:4200
```

---

# 🧱 4. Project Configuration Notes

This project uses:

* Angular 19
* SSR (Server-Side Rendering)
* Bootstrap CSS
* Bootstrap JS (bundle)
* Tailwind CSS
* Angular Standalone Components

---

## 🔹 Bootstrap Setup

Installed via:

```bash
npm install bootstrap
```

Configured in `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## 🔹 Tailwind Setup

If Tailwind is not installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Ensure `tailwind.config.js` contains:

```js
content: [
  "./src/**/*.{html,ts}"
]
```

In `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Restart dev server after setup.

---

# 🔐 5. SSR Notes

This project runs with:

```json
"outputMode": "server"
```

SSR is enabled.

Important:

* Bootstrap collapse is Angular-controlled (not data-bs-toggle)
* No direct DOM manipulation in components
* Always guard browser-only code with:

```ts
isPlatformBrowser(this.platformId)
```

---

# 🛠 6. If Build Breaks

## 🔹 Full Reset

Inside frontend:

```bash
rm -rf node_modules
rm -rf .angular
npm install
ng serve
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .angular
npm install
npx ng serve
```

---

# 🧪 7. Production Build

## Backend

```bash
./mvnw clean package
```

## Frontend (SSR Production)

```bash
ng build
```

Output folder:

```
dist/student-frontend
```

---

# 🌍 8. Running Both Together

Run backend first:

```
localhost:8080
```

Then frontend:

```
localhost:4200
```

If CORS issues occur, ensure backend allows:

```
http://localhost:4200
```

---

# 📦 9. Recommended Node Version

Use Node Version Manager (optional):

```bash
nvm install 20
nvm use 20
```

---

# 🧹 10. Common Fixes

### Navbar flickers in SSR?

Do NOT use:

```
data-bs-toggle
data-bs-target
```

Use Angular-controlled toggle instead.

---

### ngClass error?

Ensure standalone component imports:

```ts
imports: [CommonModule]
```

---

### Assets not loading?

Ensure `angular.json` contains:

```json
{
  "glob": "**/*",
  "input": "src/assets",
  "output": "assets"
}
```

Access via:

```
/assets/...
```

---

End of setup guide.
