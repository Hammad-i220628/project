import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      { 
        name: "Crispy Calamari", 
        price: "$12.99", 
        description: "Lightly battered calamari served with marinara sauce",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400"
      },
      { 
        name: "Bruschetta", 
        price: "$9.99", 
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400"
      },
      { 
        name: "Spring Rolls", 
        price: "$8.99", 
        description: "Vegetable spring rolls with sweet chili sauce",
        image: "https://images.unsplash.com/photo-1606467516753-58be04f839d4?w=500&h=400"
      },
    ]
  },
  {
    category: "Main Course",
    items: [
      { 
        name: "Grilled Salmon", 
        price: "$24.99", 
        description: "Fresh salmon with lemon butter sauce and seasonal vegetables",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400"
      },
      { 
        name: "Beef Tenderloin", 
        price: "$29.99", 
        description: "8oz tenderloin with garlic mashed potatoes",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=400"
      },
      { 
        name: "Vegetable Curry", 
        price: "$18.99", 
        description: "Mixed vegetables in aromatic curry sauce with basmati rice",
        image: "https://images.unsplash.com/photo-1604579905647-9e5e3e276fbd?w=500&h=400"
      },
    ]
  },
  {
    category: "Desserts",
    items: [
      { 
        name: "Tiramisu", 
        price: "$8.99", 
        description: "Classic Italian dessert with coffee-soaked ladyfingers",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400"
      },
      { 
        name: "Chocolate Lava Cake", 
        price: "$9.99", 
        description: "Warm chocolate cake with molten center",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400"
      },
      { 
        name: "Crème Brûlée", 
        price: "$7.99", 
        description: "Classic French vanilla custard with caramelized sugar",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&h=400"
      },
    ]
  }
];

const Menu = () => {
  const { toast } = useToast();

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to cart",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-poppins font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
          >
            Our Menu
          </motion.h1>
          
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <motion.section 
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-poppins font-bold mb-8 text-orange-500 relative">
                  {category.category}
                  <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center text-xl">
                            <span className="text-gray-800">{item.name}</span>
                            <span className="text-orange-500 font-bold">{item.price}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-6">{item.description}</p>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                              onClick={() => handleAddToCart(item.name)}
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;