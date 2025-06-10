import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556228578-dd7c7044497b?w=500&h=400&fit=crop",
      description:
        "Описание продукта 1: Это натуральный крем, который увлажняет кожу и придает ей сияние.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      description:
        "Описание продукта 2: Это маска для лица, которая очищает поры и смягчает кожу.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши продукты
            </h2>
          </div>

          <div className="space-y-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img
                    src={product.image}
                    alt={`Продукт ${product.id}`}
                    className="w-full md:w-80 h-60 object-cover rounded-lg"
                  />
                  <p className="text-lg text-gray-600 leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <Link to="/">
              <Button size="lg" variant="outline" className="px-8 py-3">
                На главную
              </Button>
            </Link>
            <Link to="/certificates">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              >
                Перейти на страницу 3
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
