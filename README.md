# 📦 ClassyShop — Modern E-Commerce Store (React + Vite + Tailwind)

Live Website: https://classyshop-e-com-store.netlify.app

---

<p align="center"> <img src="./src/assets/logo.png" style="background-color: white;" alt="ClassyShop Logo" width="200"/> </p> <p align="center"> <b>Fast • Modern • Responsive • Shopping Experience</b> </p> <p align="center"> <a href="https://classyshop-e-com-store.netlify.app"><img src="https://img.shields.io/badge/Live_Site-Visit_Now-brightgreen?style=for-the-badge"></a> <img src="https://img.shields.io/netlify/8d2b204e-e63d-40f9-8305-43052a3ac716?style=for-the-badge"> <img src="https://img.shields.io/github/license/yourusername/classyshop?style=for-the-badge"> <img src="https://img.shields.io/github/last-commit/fmfuad0/e-commerce-website?style=for-the-badge"> </p>

![Screenshot](https://github.com/fmfuad0/e-commerce-website/blob/main/screenshots/Screenshot-1.png)
![Screenshot](https://github.com/fmfuad0/e-commerce-website/blob/main/screenshots/Screenshot-2.png)

# Overview
- ClassyShop is a fully responsive, modern e-commerce website built using React, Vite, Tailwind CSS, and Material UI Icons.  
- It includes a complete shopping experience: product listing → cart → checkout → order summary → invoice generation.

- This version is fully frontend-based. Future versions will include backend, database, and payment gateway integration.

---

## Features

### E-Commerce Features
-  Product listing page
- Product details page
- Add to cart
- Remove from cart
- Update product quantity
- Cart stored in Context API
- Checkout page (shipping + payment)
- Order summary
- Invoice generation (PDF)

### Order Management
- Store placed orders
- Order details page
- Order history page
- Auto-generated order ID
- Payment status and shipping status

### UI/UX Features
- Responsive layout
- Tailwind CSS design
- Skeleton loading
- Image hover zoom
- Toast notifications
- Smooth UI transitions
- Multiple themes: Light / Dark / Fresh / Luxury

### Authentication
- Google Sign-In (OAuth)
- Logout handling
- Persistent login with localStorage

### Developer Features
- Vite fast development environment
- Clean folder structure
- Optimized components
- Extendable features
- CSV export support
- PDF export support

---

## Tech Stack

Frontend: React + Vite  
Styling: Tailwind CSS  
Icons: Material UI Icons  
State Management: React Context API  
Auth: Google OAuth Client  
PDF Generation: html2canvas + jsPDF  
CSV: FileSaver  
Deployment: Netlify

---

## Project Folder Structure

src/  
├── assets/              → Images & static files  
├── components/          → Reusable UI components  
│    ├── cart/  
│    ├── navbar/  
│    ├── footer/  
│    └── products/  
├── contexts/            → Auth & Cart context  
├── pages/               → Main route pages  
│    ├── Home.jsx  
│    ├── ProductDetails.jsx  
│    ├── Cart.jsx  
│    ├── Checkout.jsx  
│    ├── Orders.jsx  
│    ├── OrderDetails.jsx  
│    └── Profile.jsx  
├── utils/               → Helpers, PDF, CSV  
├── App.jsx  
└── main.jsx

---

## ⚙️ Setup & Installation
### 🌐 Clone Repository
    git clone https://github.com/fmfuad0/e-commerce-website.git

    cd e-commerce-website
### 🔍 Install dependencies
    npm install
### ▶️ Run Project
    npm run dev
### Open web browser and visit
    http://localhost:5173 (or any other port if port 5173 is busy)


---

## Available APIs (Future Backend Integration)

Method | Endpoint | Purpose  
GET    /api/list-products    → List products  
GET    /api/products/:id     → Get product details  
GET   /api/orders           → Show previous orders  
GET    /api/order/:id        → Get order details  

---

## Invoice System
- html2canvas (convert DOM → image)
- jsPDF (download as PDF)

Invoice includes:
- Logo
- Order info
- Products
- Shipping info
- Pricing breakdown

---

## Themes

Available UI themes:

- Light
- Dark
- Fresh (Green)
- Luxury (Gold + Black)

Each theme sets CSS variables using data-theme.

---

## Roadmap

Completed:
- Product browsing
- Cart management
- Checkout
- Google OAuth
- Orders page
- Order details page
- PDF invoice
- Dark/light themes

Upcoming:
- Full backend (Node.js + MongoDB)
- Admin dashboard
- Stripe payment gateway
- Product filtering & search
- Wishlist
- Reviews & ratings
- Email notifications
- Inventory management

---

## Contributing

- Fork the repository - 
- Create a new feature branch - git checkout -b feature/your-feature
- Commit your updates - 
- Push the branch - 
- Open a pull request

---


## Author

- Developer: Md. Fartin Mahtadi Fuad   
- Portfolio: portfolio-fm-fuad.netlify.app   
- Email: fartinfuad@gmail.com  
- GitHub:Link: https://github.com/fmfuad0
