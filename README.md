# Neop Task - Vue 3 E-Commerce Application

A modern, fully-featured e-commerce web application built with Vue 3, featuring a responsive design, multi-language support, advanced form validation, and smooth GSAP animations.

![Vue 3](https://img.shields.io/badge/Vue.js-3-green)
![Vite](https://img.shields.io/badge/Build-Vite-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Features

### Core Features

- ✅ **Responsive Design** - Mobile-first approach with Bootstrap 5 grid
- ✅ **Shopping Cart** - Full cart management with quantity controls and price calculations
- ✅ **Product Catalog** - Browse products by categories with filtering
- ✅ **Product Details** - Detailed product pages with image galleries and reviews
- ✅ **Advanced Checkout** - Multi-step checkout with form validation
- ✅ **Multi-Language Support** - Full i18n support for English and Arabic with RTL support
- ✅ **Form Validation** - Vuelidate 2.0 with custom error messages
- ✅ **Animations** - GSAP animations on page transitions and component interactions
- ✅ **State Management** - Pinia store for cart and product management

### User Experience Enhancements

- 🎨 **Smooth Animations** - Page transitions, hover effects, scroll-triggered animations
- 🛒 **Real-time Cart Updates** - Instant price calculations and item quantity management
- ⚡ **Fast Loading** - Optimized build with Vite
- 🌍 **RTL Support** - Full right-to-left layout support for Arabic
- 📱 **Mobile Responsive** - Fully responsive on all devices
- 🎯 **Smart Filtering** - Product category filtering with smooth transitions
- 🔒 **Secure Checkout** - Input validation and error handling with security information

## 🛠️ Tech Stack

### Frontend Framework

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Vue I18n** - Internationalization

### Form & Validation

- **Vuelidate 2.0** - Progressive validation with helpers.withMessage for custom messages
- **Vue3-Toastify** - Toast notifications

### Styling & Animations

- **SCSS** - Preprocessed CSS with advanced features
- **Bootstrap 5** - Responsive grid and utility classes
- **GSAP (GreenSock)** - Professional-grade animations
- **Font Awesome 6** - Icon library
- **Custom Fonts** - Cormorant Infant, Quicksand, Tajawal

### Build & Development

- **Vite** - Next generation frontend build tool
- **Swiper** - Touch slider carousel

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home/
│   │   ├── index.vue
│   │   └── components/
│   │       ├── Hero.vue
│   │       ├── Brands.vue
│   │       ├── PopularCategories.vue
│   │       └── Featured.vue
│   ├── cart/
│   │   ├── index.vue
│   │   └── components/
│   │       ├── CartItem.vue
│   │       └── OrderSummary.vue
│   ├── checkout/
│   │   ├── index.vue
│   │   └── components/
│   │       └── CheckoutForm.vue
│   ├── ProductDetails/
│   │   ├── [id].vue
│   │   └── components/
│   │       ├── productInfo.vue
│   │       ├── ProductTabs.vue
│   │       └── ReviewsForm.vue
│   └── Error.vue
├── shared/
│   └── components/
│       ├── Navbar.vue
│       ├── ProductCard.vue
│       ├── RatingComponent.vue
│       └── ...
├── store/
│   ├── mainStore.js
│   ├── products.js
│   └── theme.js
├── locale/
│   ├── en.json
│   └── ar.json
├── Services/
│   └── apiclient.js
└── assets/
    ├── images/
    └── style/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd vue-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Install required packages** (if not already included)

```bash
npm install gsap
npm install @vuelidate/core @vuelidate/validators
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌍 Internationalization (i18n)

The application supports **English** and **Arabic** with full RTL support.

### Language Files

- `src/locale/en.json` - English translations
- `src/locale/ar.json` - Arabic translations

### Supported Translations

- **Navigation & Menu** - All UI labels and navigation items
- **Product Pages** - Product titles, descriptions, pricing
- **Cart & Checkout** - Cart items, order summary, form labels, error messages
- **Forms** - Input placeholders, validation messages
- **Buttons & Actions** - All interactive elements

### Using Translations in Components

```vue
<!-- Simple translation -->
<h1>{{ $t('products.title') }}</h1>

<!-- Dynamic translation -->
<p>{{ cartItems.length === 1 ? $t('cart.itemSingular') : $t('cart.itemPlural') }}</p>
```

## 🎨 Animation Features

### Home Page

- **Hero Section** - Title, description, and product image fade-in animations
- **Brands Carousel** - Brand logos animate with stagger effect
- **Featured Section** - Image, content, and feature icons animate on scroll

### Product Details

- **Product Info** - Sequential animations for images, rating, title, price
- **Thumbnails** - Hover scale animations with shadow effects
- **Main Image** - Zoom effect on hover with smooth transitions
- **Tabs** - Content fade-in when switching between tabs

### Cart & Checkout

- **Cart Items** - Slide-in animations with stagger
- **Order Summary** - Entrance animation and hover effects
- **Checkout Form** - Section-based animations with timeline sequences

## ✅ Form Validation

The checkout form uses **Vuelidate 2.0** with advanced validation:

### Features

- Real-time validation with automatic error clearing
- Custom error messages with i18n support
- Dynamic validation rules based on form state
- Form field error highlighting
- Automatic scroll to first error on submit

### Validated Fields

- **Shipping Info** - Name, email, address, city, zip code
- **Payment Info** - Card number (16 digits), expiry date, CVV
- **Payment Methods** - Card or PayPal selection

## 🛒 Shopping Cart

### Features

- Add/remove products from cart
- Update product quantities
- Real-time price calculations
- Tax calculation (10% of subtotal)
- Shipping cost calculation
- Promo code support (default: `SAVE10` for 10% discount)
- Persistent cart state with Pinia

### Price Breakdown

- Subtotal: Sum of all product prices × quantities
- Tax: 10% of subtotal
- Shipping: Free for orders > $100, otherwise $10
- Total: Subtotal + Tax + Shipping - Discounts

## 💳 Checkout Process

### Step-by-Step

1. **Shipping Information** - Enter delivery address
2. **Payment Information** - Select payment method and enter payment details
3. **Order Review** - Confirm order details and shipping address
4. **Order Confirmation** - Submit order with validation

### Payment Methods

- **Credit/Debit Card** - Card details with format validation
- **PayPal** - Redirect to PayPal payment gateway

### Form Validation

All fields are validated before checkout:

- Required field checks
- Email format validation
- Card number format (Visa/Mastercard detection)
- CVV numeric validation
- Automatic error messages in selected language

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile** - Extra small devices (< 576px)
- **Tablet** - Small to medium devices (576px - 992px)
- **Desktop** - Large devices (992px+)

Bootstrap 5 grid system ensures proper layout on all screen sizes.

## 🎯 Key Components

### Navbar

- Responsive navigation with language switcher
- Shopping cart badge with item count
- Logo and menu links

### ProductCard

- Product image with discount badge
- Product rating component
- Price display with original and sale price
- Add to cart button with toast notification

### CheckoutForm

- Unified form combining shipping, payment, and order review
- Real-time validation feedback
- Visual error indicators
- Promo code application
- Order submission with animations

### RatingComponent

- Star rating display (1-5 stars)
- Dynamic star rendering based on product rating

## 🔐 Security

- Form validation prevents invalid data submission
- HTTPS-ready for production
- Secure payment information handling placeholders
- Input sanitization for all user inputs

## 📊 State Management (Pinia)

### Stores

- **mainStore** - Theme and language preferences
- **products** - Product catalog and cart management
- **theme** - Current theme settings

### Usage

```javascript
import { useProductStore } from "@/store/products";

const productStore = useProductStore();
productStore.addToCart(product, quantity);
```

## 🎨 Customization

### Colors & Styling

CSS custom properties are used for easy theming:

```scss
--color-primary: #ff9500 --color-secondary: #004876 --color-primary-1: #e67e22
  --bg-color: #fafafa --text-color: #333333 --text-secondary: #939393;
```

### Fonts

Custom fonts available in `public/fonts/`:

- Cormorant Infant (serif)
- Quicksand (sans-serif)
- Tajawal (Arabic, sans-serif)

## 🚀 Performance Optimizations

- Lazy loading for product images
- Code splitting with Vite dynamic imports
- Optimized GSAP animations with ScrollTrigger
- Efficient component re-rendering with Vue 3 Composition API
- Minified CSS and JavaScript in production builds

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, issues, or suggestions, please open an GitHub issue or contact the development team.

---

**Built with ❤️ using Vue 3, Vite, and modern web technologies**
