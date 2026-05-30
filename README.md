# CSCI342-Platescout
Project for CSCI 342, used to learn hosting for react web apps.


## Live URLs

- **Client:** https://platescout-thomas.vercel.app/
- **Server:** https://platescout-thomas.onrender.com/
- **Server health check:** https://platescout-thomas.onrender.com/api/health


## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173


## What I learned during deployment

I was suprised with how easy it was to deploy my project, especially with the free options from 
Vercel and Render. The only thing that was difficult was trying to go through the project's/assignment's documentation, as it was going back and forth with modifying the repo and using the deployed site. It felt as if it was copied from another assignment and had references to "L21/L22", which made no sense and we had not gone over those before.