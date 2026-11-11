# Backend Development Fundamentals (BDF) Lab Assignments

### 👤 Student Details:
- **Name:** G.Amitha
- **Registration Number:** 252U1R8022
- **Course:** Backend Development Fundamentals (BDF)
- **Year & Term:** Year II Term II
- **Section:** CSE-QE-2A, S-14/113
- **Institution:** Aurora
- **Faculty:** Joel Prashanth D

---

### 📂 Lab Index & Status:

| Lab Number | Title | Status | Directory | Render Deployment Link |
| :--- | :--- | :--- | :--- | :--- |
| **Lab 01** | Node.js and Express Server Fundamentals | Ready | [`lab-01/`](./lab-01/) | `https://bdf-lab-01-express-server.onrender.com` |
| **Lab 02** | SQLite Database and Relational CRUD Routes | Ready | [`lab-02/`](./lab-02/) | `https://bdf-lab-02-sqlite-server.onrender.com` |
| **Lab 03** | REST API, Query Parameters, Validation & Debugging | **Completed** | [`lab-03/`](./lab-03/) | [`https://lab-03-rest-api-252u1r8022.onrender.com`](https://lab-03-rest-api-252u1r8022.onrender.com) |

---

### ⚙️ Multi-Service Render Deployment:
All services are pre-configured in the root [`render.yaml`](./render.yaml) blueprint:
- Node Version: `20.18.0`
- SQLite native build flag enabled to prevent GLIBC incompatibilities:
  ```bash
  npm install && npm rebuild sqlite3 --build-from-source
  ```
