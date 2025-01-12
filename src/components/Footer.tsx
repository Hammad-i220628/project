import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Food Delight</h3>
            <p className="font-inter text-gray-600">Delicious food delivered fresh to your doorstep.</p>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="/menu" className="text-gray-600 hover:text-primary">Menu</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-primary">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600 font-inter">
            © {new Date().getFullYear()} Food Delight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;