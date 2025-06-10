import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
            Бренд Натуральной Косметики
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
