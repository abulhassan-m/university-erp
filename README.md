# University ERP System

This project is a full-stack University ERP (Enterprise Resource Planning) solution, designed to streamline university operations and enhance the academic experience for students, faculty, and administration. Built with Django as the backend and React as the frontend, this application provides comprehensive modules for user management, course and student record handling, attendance tracking, fee management, library management, notifications, and report generation.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Endpoints and API Documentation](#endpoints-and-api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features
### User Management
- **Roles**: Admin, Faculty (Teaching/Non-Teaching), Student, Administration.
- **Permissions**: Role-based access control for each module.
  
### Course Management
- Add, update, delete, and view courses, schedules, and assignments.

### Student Records
- CRUD operations for student academic history, personal details, and profiles.

### Attendance Management
- Faculty can mark attendance; students can view attendance records and notifications.

### Examination and Grading
- Faculty manages exams and assigns grades. Students can view their grade reports.

### Fee Management
- Generate invoices, track payments, manage fee structures, and view financial summaries.

### Library Management
- Manage books, issue/return records, and track dues.

### Notifications and Announcements
- Send notifications to specific users or groups based on roles.

### Reports
- Generate attendance reports, grade sheets, and financial summaries.

## Technologies Used
- **Backend**: Django, Django REST Framework (DRF)
- **Frontend**: React, Redux, Axios
- **Database**: PostgreSQL
- **Deployment**: Heroku (backend), Netlify (frontend)
- **Authentication**: JSON Web Tokens (JWT)

---

## Getting Started
Follow these instructions to set up the project locally.

### Prerequisites
- Python 3.8+
- Node.js 14+
- PostgreSQL

### Backend Setup
1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/your-repo/university-erp.git
   cd university-erp/backend

2. Install dependencies:

    ```bash
    pip install -r requirements.txt

3. Set up environment variables in a .env file:

    ```plaintext

    SECRET_KEY=your_secret_key
    DATABASE_NAME=your_db_name
    DATABASE_USER=your_db_user
    DATABASE_PASSWORD=your_db_password

4. Run migrations and start the server:

    ```bash
    python manage.py migrate
    python manage.py runserver

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend

2. Install dependencies:

    ```bash
    npm install

3. Create a .env file for environment variables:

    ```plaintext
    REACT_APP_API_BASE_URL=http://localhost:8000/api

4. Start the React development server:

    ```bash
    npm start
    
## Project Structure
### Backend (Django)

    ```bash
    backend/
    ├── config/                     # Django project configuration
    ├── apps/
    │   ├── users/                  # User Management app
    │   ├── courses/                # Course Management app
    │   ├── students/               # Student Records app
    │   ├── attendance/             # Attendance Management app
    │   ├── exams/                  # Examination and Grading app
    │   ├── fees/                   # Fee Management app
    │   ├── library/                # Library Management app
    │   ├── notifications/          # Notifications and Announcements app
    │   └── reports/                # Reports app
    └── manage.py                   # Django project entry point

### Frontend (React)

    ```base
    frontend/
    ├── public/                     # Public assets
    ├── src/
    │   ├── components/             # React components
    │   ├── pages/                  # React pages
    │   ├── services/               # API service functions
    │   ├── store/                  # Redux store and slices
    │   └── App.js                  # Main React app component
    └── package.json                # Node.js dependencies and scripts


## Endpoints and API Documentation
API documentation is available through the Django REST framework’s browsable API at /api once the backend server is running.

    User Authentication: /api/auth/login/, /api/auth/register/
    Course Management: /api/courses/
    Student Records: /api/students/
    Attendance: /api/attendance/
    Exams and Grading: /api/exams/
    Fee Management: /api/fees/
    Library Management: /api/library/
    Notifications: /api/notifications/
    Reports: /api/reports/


## Contributing

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to your branch (git push origin feature-name).
Create a pull request.

---