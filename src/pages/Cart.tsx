import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
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
            Your Cart
          </motion.h1>

          {state.items.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl text-gray-600 mb-8">Your cart is empty</p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                onClick={() => window.location.href = '/menu'}
              >
                Browse Menu
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {state.items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    layout
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                          <p className="text-orange-500 font-bold">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => handleRemoveItem(item.id)}
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-lg sticky top-24">
                    <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between text-lg">
                        <span>Subtotal</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span>Delivery Fee</span>
                        <span>$5.00</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-xl font-bold">
                          <span>Total</span>
                          <span>${(state.total + 5).toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="space-y-4 pt-6">
                        <Button 
                          className="w-full h-12 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        >
                          Checkout
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full"
                          onClick={handleClearCart}
                        >
                          Clear Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;