# Tropixie — MERN Stack

Full-stack website with React frontend + Node.js/Express backend + MongoDB + Cloudinary.

## Project Structure

```
tropixie/
├── client/          ← Vite + React frontend
│   └── src/admin/   ← Admin panel (React)
└── server/          ← Express + MongoDB backend
```

## Setup

### 1. Fill in your .env files

**server/.env**
```
MONGODB_URI=your_mongodb_atlas_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=some_long_random_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
PORT=5000
CLIENT_URL=http://localhost:5173
```

**client/.env**
```
VITE_API_URL=http://localhost:5000
```

### 2. Run the server

```bash
cd server
npm run dev
```

### 3. Run the client

```bash
cd client
npm run dev
```

### 4. Seed default content (FIRST TIME ONLY)

1. Go to `http://localhost:5173/admin/login`
2. Log in with your ADMIN_USERNAME / ADMIN_PASSWORD
3. Click the **🌱 Seed DB** button in the admin header
4. This populates the database with the default content once

After seeding, the website will pull all content from MongoDB.

## Admin Panel

Navigate to `/admin/login` to access the admin panel.

### What you can manage:

| Section | Capabilities |
|---------|-------------|
| Hero | Add/remove slideshow images |
| About Us | Add/remove images, edit About text, edit Why Choose Us text |
| Stats | Edit title & subtitle per stat box, add/remove boxes |
| Services | Edit icon, title, popup description per service; add/remove |
| Recent Work | Add/remove YouTube videos (paste URL or ID) |
| Team | Add members (name, role, 1:1 photo, bio), remove members |
| Contact | Edit the description under "Let's Create" |
