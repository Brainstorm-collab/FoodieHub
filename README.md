# 🍕 FoodieHub - Food Delivery Web Application

A modern, responsive food delivery web application built with React 18, TypeScript, and Tailwind CSS. Experience seamless ordering with advanced features like real-time cart management, wishlist functionality, and order tracking.

![FoodieHub Preview](project%20imgs/Screenshot%20(20).png)

## ✨ Features

### 🛒 **Shopping Experience**
- **Interactive Menu**: Browse dishes with grid and list views
- **Smart Search & Filter**: Find your favorite dishes quickly
- **Sort Options**: Sort by name, price, or rating
- **Add to Cart**: One-click cart addition with visual feedback
- **Wishlist System**: Save favorite items for later
- **Quantity Management**: Adjust item quantities in cart

### 🎨 **User Interface**
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Enhanced UX with Framer Motion
- **Sticky Navigation**: Always accessible navigation bar
- **Modern UI**: Beautiful gradients and glass-morphism effects
- **Loading States**: Visual feedback for all interactions

### 🔐 **Authentication & User Management**
- **Guest Access**: Order without account creation
- **User Login**: Secure authentication system
- **Session Persistence**: Remember user preferences
- **Profile Management**: User data handling

### 📦 **Order Management**
- **Multi-step Checkout**: Address selection and payment
- **Address Management**: Add custom delivery addresses
- **Order Tracking**: Real-time order status updates
- **Payment Integration**: UPI payment system
- **Order History**: Track past orders

### 🚀 **Performance & Quality**
- **Fast Loading**: Optimized with Vite build tool
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint configuration
- **Error Handling**: Robust error management
- **Image Fallbacks**: Reliable image loading

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Modern icon library

### **State Management & Routing**
- **React Context API** - Global state management with useReducer
- **React Router DOM** - Client-side routing
- **Custom Hooks** - Reusable logic (useAppContext)

### **Development Tools**
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **TypeScript Configuration** - Strict type checking

## 📁 Project Structure

```
FoodieHub/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AddressForm.tsx
│   │   ├── Footer.tsx
│   │   ├── ItemModal.tsx
│   │   ├── MenuCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── OrderSuccess.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── UPIPayment.tsx
│   ├── context/            # Global state management
│   │   └── AppContext.tsx
│   ├── data/               # Static data and mock data
│   │   └── menuData.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useAppContext.ts
│   ├── pages/              # Page components
│   │   ├── AboutPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── OrderTrackingPage.tsx
│   │   └── WishlistPage.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brainstorm-collab/FoodieHub.git
   cd foodiehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎯 Key Features in Detail

### **Responsive Navigation**
- Sticky navbar that stays at top during scroll
- Mobile hamburger menu with smooth animations
- Cart and wishlist counters with real-time updates

### **Menu System**
- Grid and list view options
- Search functionality with instant results
- Category filtering
- Sort by name, price, or rating
- Add to cart with visual feedback
- Wishlist functionality with heart icon

### **Shopping Cart**
- Real-time cart updates
- Quantity adjustment controls
- Remove items functionality
- Total price calculation
- Empty cart state with call-to-action

### **Checkout Process**
- Multi-step checkout flow
- Address selection and management
- Custom address form
- Payment method selection
- Order confirmation

### **Order Tracking**
- Real-time order status updates
- Progress indicators
- Estimated delivery times
- Sample order numbers for testing

## 🎨 Design System

### **Color Palette**
- **Primary**: Amber/Orange gradient
- **Secondary**: Red accents
- **Background**: Gradient backgrounds
- **Text**: Gray scale with proper contrast

### **Typography**
- Modern, clean font stack
- Responsive font sizes
- Proper hierarchy with headings

### **Components**
- Glass-morphism effects
- Smooth hover animations
- Consistent spacing
- Mobile-first responsive design

## 🔧 Customization

### **Adding New Menu Items**
Edit `src/data/menuData.ts` to add new dishes:

```typescript
{
  id: 'unique-id',
  name: 'Dish Name',
  description: 'Dish description',
  price: 299, // Price in INR
  image: 'image-url',
  category: 'Category',
  rating: 4.5,
  prepTime: '15-20 min'
}
```

### **Modifying Styles**
- Update Tailwind classes in components
- Modify `tailwind.config.js` for custom theme
- Edit `src/index.css` for global styles

### **Adding New Pages**
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### **Deploy to Netlify**
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**G. Eesaan**
- GitHub: [@Brainstorm-collab](https://github.com/Brainstorm-collab)
- LinkedIn: [G.Eesaan]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/eesaan-gali-11o42k5/details/certifications/))

## 🙏 Acknowledgments

- **Pexels** for high-quality food images
- **Lucide** for beautiful icons
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the [Issues](https://github.com/Brainstorm-collab/FoodieHub/issues) page
2. Create a new issue with detailed description
3. Contact the author directly

---

**Made with ❤️ by G. Eesaan**

*This project demonstrates modern React development practices, responsive design, and user experience optimization.*
