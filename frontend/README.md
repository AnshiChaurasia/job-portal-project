MERN Stack Job Portal
A full-featured job portal application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform connects job seekers with recruiters, allowing users to search for, apply to, and manage job applications, while providing recruiters with the tools to post jobs and manage company profiles and applicants.

Live Demo
Frontend (Vercel): Your-Vercel-Deployment-Link

Backend (Render): Your-Render-Deployment-Link

Features
For Job Seekers (Students)
User Authentication: Secure registration and login functionality.

Job Search & Filtering: Search for jobs by keywords or filter by location, industry, and salary range.

Apply for Jobs: Easily apply to job openings with a single click.

Profile Management: Create and update a personal profile including a bio, skills, profile photo, and resume.

Application Tracking: View a list of all applied jobs and track their status (Pending, Accepted, Rejected).

For Recruiters (Admin)
Recruiter Authentication: Separate registration and login for recruiters.

Company Profile Management: Register one or more companies and update their details, including name, description, website, and logo.

Post & Manage Jobs: Create new job listings and associate them with a registered company.

Applicant Tracking System (ATS): View a list of all applicants for a specific job.

Update Application Status: Review applicant profiles and update their application status to "Accepted" or "Rejected".

Recruiter Profile: Update basic profile information like name and profile photo.

Tech Stack
Frontend:

React.js (with Vite)

Redux Toolkit & Redux Persist (for state management)

React Router DOM (for navigation)

Tailwind CSS (for styling)

shadcn/ui (for UI components)

Axios (for API requests)

Backend:

Node.js & Express.js

MongoDB (Database) with Mongoose (ODM)

JSON Web Tokens (JWT) for authentication

bcryptjs for password hashing

Cloudinary for cloud-based file storage (resumes, logos, profile photos)

Multer for handling file uploads

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (v18 or later)

npm

Git

A MongoDB Atlas account (or a local MongoDB instance)

A Cloudinary account

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
Backend Setup:

Bash

cd backend
npm install
Create a .env file in the backend directory and add the following environment variables:

Code snippet

PORT=8000
MONGO_URI=<your_mongodb_connection_string>
SECRET_KEY=<your_jwt_secret_key>
CLOUD_NAME=<your_cloudinary_cloud_name>
API_KEY=<your_cloudinary_api_key>
API_SECRET=<your_cloudinary_api_secret>
FRONTEND_URL=http://localhost:5173
Frontend Setup:

Bash

cd ../frontend
npm install
Create a .env file in the frontend directory and add the following:

Code snippet

VITE_API_BASE_URL=http://localhost:8000
Running the Application
Start the Backend Server:

From the backend directory:

Bash

npm run dev
The server will start on the port specified in your .env file (e.g., http://localhost:8000).

Start the Frontend Development Server:

From the frontend directory:

Bash

npm run dev
The application will be available at http://localhost:5173.

Deployment
This project is configured for deployment on Render (backend) and Vercel (frontend).

Backend (Render)
Push your code to a GitHub repository.

Create a new Web Service on Render and connect your GitHub repo.

Set the Root Directory to backend.

Set the Build Command to npm install.

Set the Start Command to node index.js.

Add all the environment variables from your backend .env file to the Render environment settings. Ensure FRONTEND_URL is set to your Vercel deployment URL.

Frontend (Vercel)
Push your code to a GitHub repository.

Import the project into Vercel from your GitHub repo.

Set the Root Directory to frontend. Vercel should auto-detect the Vite framework.

Add a VITE_API_BASE_URL environment variable and set its value to your Render backend URL.

Deploy!