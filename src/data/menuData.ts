import { MenuItem } from "../types/index";

export const menuData: MenuItem[] = [
  // Pizza Items
  {
    id: "1",
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
    price: 299,
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Pizza",
    rating: 4.8,
    prepTime: "15-20 min",
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni with melted cheese and tomato sauce",
    price: 399,
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Pizza",
    rating: 4.9,
    prepTime: "18-22 min",
  },
  {
    id: "3",
    name: "BBQ Chicken Pizza",
    description: "BBQ sauce, grilled chicken, red onions, and cilantro",
    price: 449,
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Pizza",
    rating: 4.7,
    prepTime: "20-25 min",
  },

  // Burger Items
  {
    id: "4",
    name: "Classic Beef Burger",
    description:
      "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
    price: 199,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Burgers",
    rating: 4.7,
    prepTime: "12-15 min",
  },
  {
    id: "5",
    name: "Chicken Burger Deluxe",
    description:
      "Grilled chicken breast with avocado, bacon, and chipotle mayo",
    price: 249,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Burgers",
    rating: 4.6,
    prepTime: "15-18 min",
  },
  {
    id: "6",
    name: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables and vegan cheese",
    price: 179,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Burgers",
    rating: 4.5,
    prepTime: "10-12 min",
  },

  // Indian Items
  {
    id: "7",
    name: "Butter Chicken",
    description:
      "Tender chicken in rich, creamy tomato-based curry with aromatic spices",
    price: 299,
    image:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Indian",
    rating: 4.9,
    prepTime: "20-25 min",
  },
  {
    id: "8",
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice with tender chicken pieces, saffron, and traditional spices",
    price: 349,
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Biryani",
    rating: 4.8,
    prepTime: "25-30 min",
  },
  {
    id: "9",
    name: "Paneer Tikka",
    description:
      "Marinated cottage cheese grilled to perfection with Indian spices",
    price: 249,
    image:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Indian",
    rating: 4.7,
    prepTime: "15-18 min",
  },
  {
    id: "10",
    name: "Mutton Biryani",
    description:
      "Premium mutton pieces cooked with fragrant basmati rice and exotic spices",
    price: 449,
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Biryani",
    rating: 4.9,
    prepTime: "35-40 min",
  },

  // Asian Items
  {
    id: "11",
    name: "Chicken Fried Rice",
    description: "Stir-fried rice with chicken, vegetables, and soy sauce",
    price: 199,
    image:
      "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Asian",
    rating: 4.6,
    prepTime: "12-15 min",
  },
  {
    id: "12",
    name: "Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and tamarind sauce",
    price: 279,
    image:
      "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Thai",
    rating: 4.8,
    prepTime: "18-22 min",
  },
  {
    id: "13",
    name: "Sushi Roll Set",
    description: "Fresh salmon, tuna, and avocado rolls with wasabi and ginger",
    price: 399,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Asian",
    rating: 4.9,
    prepTime: "20-25 min",
  },

  // Continental Items
  {
    id: "14",
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon with herbs, served with roasted vegetables",
    price: 599,
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Seafood",
    rating: 4.8,
    prepTime: "20-25 min",
  },
  {
    id: "15",
    name: "Chicken Caesar Salad",
    description:
      "Fresh romaine lettuce with grilled chicken, parmesan, and caesar dressing",
    price: 249,
    image:
      "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Salads",
    rating: 4.6,
    prepTime: "8-10 min",
  },
  {
    id: "16",
    name: "Spaghetti Carbonara",
    description:
      "Traditional Italian pasta with eggs, cheese, pancetta, and black pepper",
    price: 329,
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Pasta",
    rating: 4.9,
    prepTime: "18-22 min",
  },

  // Desserts
  {
    id: "17",
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 149,
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Desserts",
    rating: 4.9,
    prepTime: "10-12 min",
  },
  {
    id: "18",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: 179,
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Desserts",
    rating: 4.8,
    prepTime: "5-8 min",
  },

  // Beverages
  {
    id: "19",
    name: "Mango Smoothie",
    description:
      "Fresh mango blended with yogurt, honey, and a touch of cardamom",
    price: 99,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Beverages",
    rating: 4.7,
    prepTime: "5-8 min",
  },
  {
    id: "20",
    name: "Iced Coffee",
    description: "Cold brew coffee served with ice and your choice of milk",
    price: 89,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Beverages",
    rating: 4.7,
    prepTime: "5-8 min",
  },
  {
    id: "21",
    name: "Masala Chai",
    description:
      "Traditional Indian spiced tea with cardamom, ginger, and cinnamon",
    price: 49,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Beverages",
    rating: 4.8,
    prepTime: "8-10 min",
  },
  {
    id: "22",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice packed with vitamin C",
    price: 79,
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Beverages",
    rating: 4.6,
    prepTime: "3-5 min",
  },

  // Additional Items
  {
    id: "23",
    name: "Fish Tacos",
    description:
      "Grilled fish with cabbage slaw, avocado, and chipotle mayo in soft tortillas",
    price: 299,
    image:
      "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Mexican",
    rating: 4.7,
    prepTime: "15-18 min",
  },
  {
    id: "24",
    name: "Greek Gyro",
    description:
      "Seasoned lamb and beef with tzatziki, tomatoes, and onions in pita bread",
    price: 249,
    image:
      "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Mediterranean",
    rating: 4.6,
    prepTime: "12-15 min",
  },
  {
    id: "25",
    name: "Korean BBQ Bowl",
    description:
      "Marinated beef bulgogi with steamed rice, kimchi, and vegetables",
    price: 329,
    image:
      "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Korean",
    rating: 4.8,
    prepTime: "20-25 min",
  },
  {
    id: "26",
    name: "Chicken Wings burger",
    description:
      "Crispy buffalo wings patty served with celery sticks and blue cheese dip",
    price: 229,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Appetizers",
    rating: 4.7,
    prepTime: "15-18 min",
  },
];

export const categories = [
  "All",
  "Pizza",
  "Burgers",
  "Indian",
  "Biryani",
  "Asian",
  "Thai",
  "Salads",
  "Pasta",
  "Seafood",
  "Desserts",
  "Beverages",
  "Mexican",
  "Mediterranean",
  "Korean",
  "Appetizers",
];

export const reviews = [
  {
    id: "1",
    userName: "Chitti Babu",
    rating: 5,
    comment:
      "Amazing food quality and super fast delivery! The biryani was absolutely delicious.",
    date: "2024-01-15",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "2",
    userName: "Saketh",
    rating: 4,
    comment:
      "Great variety of options. The Korean BBQ bowl was fantastic. Will order again!",
    date: "2024-01-14",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: "3",
    userName: "RamTrilok",
    rating: 5,
    comment:
      "Best food delivery service in town. Fresh ingredients and perfect packaging.",
    date: "2024-01-13",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];
