# FreshGrocer

FreshGrocer is a modern online grocery store application built with **Next.js 15**, focusing on speed, simplicity, and a "fresh" user interface.

## 🚀 Features

- **Modern Landing Page**: Responsive design with hero section, categories, and testimonials.
- **Product Catalog**: View all products in a clean grid layout.
- **Product Details**: Detailed view with nutritional information and images.
- **Authentication**: Simple mock login system (Email/Password) with HTTP-only cookies.
- **Protected Routes**: Middleware protection for admin features.
- **Admin Management**: Secure "Add Product" form to manage inventory.
- **API Integration**: Next.js App Router API handlers acting as the backend data layer.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Global CSS (CSS Modules & Variables)
- **Font**: Inter (Google Fonts)
- **Data**: JSON-based local data store
- **Auth**: `cookie` based session management

## 📦 Installation

1. **Clone the repository** (if applicable) or download source.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## 🔑 Mock Credentials

To access protected features (like `/add-product`), logging in is required.

- **Email**: `user@freshgrocer.com`
- **Password**: `grocery123`

## 📂 Project Structure

- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components (Navbar, ProductCard, etc.).
- `src/lib`: Helper functions.
- `src/data`: JSON data storage.
- `src/middleware.js`: Route protection logic.

## 📝 Usage Guide

- **Browse**: Visit the home page to see featured items and categories.
- **Shop**: Click "Shop Now" or "Products" to view the full catalog.
- **Login**: Go to `/login` to sign in.
- **Manage**: Once logged in, visit `/add-product` (or use the link on the Products page) to add new items.
