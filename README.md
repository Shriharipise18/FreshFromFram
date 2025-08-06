# 🌾 Farm-to-Customer Marketplace Platform

A fully responsive and user-friendly platform that directly connects farmers with customers, allowing them to buy and sell fresh, seasonal agricultural products with ease.

🟢 **Live Demo**: [https://meek-puffpuff-96c005.netlify.app](https://meek-puffpuff-96c005.netlify.app)

---

## 📦 Features

- ✅ **Direct Farmer-Customer Communication**
- 🔍 **Advanced Search** with category and seasonal filters
- 📋 **Product Catalog** with minimum order requirements (5+ units)
- 🛒 **Order & Contact System** for easy purchase
- 👨‍🌾 **Farmer Dashboard** to manage product listings
- 🗂️ **Category-Wise Organization** (Fruits, Vegetables, Grains, etc.)
- 📸 **High-Quality Product Images** sourced from Pexels
- 📱 **Fully Responsive** for desktop and mobile
- 🌿 **Earth-Toned, Agricultural-Themed UI**

---

## 🧰 Tech Stack

| Layer         | Technology              |
|---------------|------------------------ |
| Frontend      | Vite + TypeScript + JSX |
| Styling       |  Tailwind CSS           |
| Deployment    | Versal                  |
| Images        | Pexels                  |

---

**Deploy on Versal**

## 🔁 Complete System Flow

```mermaid
graph TD

    subgraph Deployment Flow
        Dev[👨‍💻 Developer] -->|Push Code| GitHub
        GitHub -->|Build Trigger| Versal
        Versal -->|CDN Deployed| LiveSite[🌐 Live Site]
    end

    subgraph User Interaction Flow
        User[🧑‍🌾 Customer] -->|Visit| LiveSite
        User -->|Browse| Catalog
        Catalog --> ProductCard
        ProductCard --> ContactModal
        ProductCard --> OrderModal
    end

    subgraph Farmer Flow
        Farmer[👨‍🌾 Farmer] --> FarmerDashboard
        FarmerDashboard --> AddProductModal
    end




