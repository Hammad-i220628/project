import { useState } from "react";
import { Menu, X, ShoppingCart, Home, UtensilsCrossed, Users, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const navigate = useNavigate();

  const menuItems = [
    { href: "/", label: "Home", icon: Home, color: "hover:text-blue-500" },
    { href: "/menu", label: "Menu", icon: UtensilsCrossed, color: "hover:text-green-500" },
    { href: "/about", label: "About", icon: Users, color: "hover:text-purple-500" },
    { href: "/contact", label: "Contact", icon: PhoneCall, color: "hover:text-pink-500" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="font-poppins font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Food Delight
            </motion.span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "font-inter text-foreground flex items-center gap-2 transition-colors",
                  item.color
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.a>
            ))}
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-orange-500 transition-colors relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-foreground font-inter flex items-center gap-2",
                  item.color
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;