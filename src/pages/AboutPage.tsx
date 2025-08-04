import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Clock, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: Award, number: "1000+", label: "Dishes Served Daily" },
    { icon: Clock, number: "25", label: "Cities Covered" },
    { icon: Heart, number: "4.8★", label: "Average Rating" },
  ];

  const team = [
    {
      name: "G. Eesaan",
      role: "Managing Director",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Strategically navigating the path forward.",
    },
    {
      name: "Manideep Chowdary",
      role: "Supply & Inventory Manager",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=cro",
      description: "Streamlining stock and supply to keep the kitchen moving.",
    },
    {
      name: "Abhiram",
      role: "Head Chef",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      description: "15+ years of culinary expertise",
    },
    {
      name: "Sankapavan",
      role: "Operations Manager",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Ensuring quality and timely delivery",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description:
        "We source the freshest ingredients and maintain the highest standards in food preparation.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Our efficient delivery network ensures your food reaches you hot and fresh within 30 minutes.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Every decision we make is centered around providing the best experience for our customers.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            About FoodieHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the finest culinary experiences
            from around the world. Since 2020, we've been connecting food lovers
            with their favorite restaurants and cuisines.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/30"
            >
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FoodieHub was born from a simple idea: everyone deserves
                  access to delicious, high-quality food, delivered fresh and
                  fast. What started as a small local delivery service has grown
                  into a platform connecting thousands of customers with their
                  favorite restaurants.
                </p>
                <p>
                  We believe that great food brings people together, and our
                  mission is to make those connections possible, whether you're
                  craving comfort food from your childhood or exploring new
                  flavors from around the world.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 customers across 25
                  cities, working with hundreds of restaurant partners to
                  deliver not just meals, but experiences that create lasting
                  memories.
                </p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our kitchen"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/30 text-center"
              >
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/30"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop";
                  }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions or feedback? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+1 (555) 123-FOOD</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">hello@foodiehub.com</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">123 Food Street, Flavor City</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
