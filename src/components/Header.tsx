import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
              🌿 EcoBeauty
            </h1>
          </div>

          <nav className="flex space-x-4">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="font-medium"
              >
                О бренде
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                variant={isActive("/gallery") ? "default" : "ghost"}
                className="font-medium"
              >
                Продукция
              </Button>
            </Link>
            <Link to="/certificates">
              <Button
                variant={isActive("/certificates") ? "default" : "ghost"}
                className="font-medium"
              >
                Сертификаты
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
