// src/resources/server.ts
export const baseURL = "http://localhost:3000"; // for local VSCode testing

export const person = {
  name: "Mohamed Boukouch",
  avatar: "/images/avatar.jpg", // local path works fine
  email: "boukouchmohamed7@gmail.com",
  role: "Developer",
};

// You can also export only the minimal content needed by your server routes
export const blog = {
  title: "My Portfolio Blog",
  description: "Latest updates and projects",
};

// Optional: minimal routes for sitemap generation
export const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};
