import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface FeaturedDishProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const FeaturedDish = ({ name, price, image, description }: FeaturedDishProps) => {
  const { toast } = useToast();
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        price,
        image,
        quantity: 1
      }
    });

    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </motion.div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 font-inter">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-poppins font-semibold text-orange-500 text-lg">{price}</span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedDish;