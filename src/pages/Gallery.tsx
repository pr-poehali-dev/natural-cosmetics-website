import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556228578-dd7c7044497b?w=500&h=400&fit=crop",
      title: "Увлажняющий крем для лица",
      description:
        "Легкий крем с маслом жожоба и экстрактом алоэ вера. Идеально подходит для ежедневного ухода за кожей всех типов. Обеспечивает глубокое увлажнение и защиту от внешних воздействий.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      title: "Очищающая пенка с экстрактом ромашки",
      description:
        "Мягкая пенка для деликатного очищения кожи лица. Содержит натуральные экстракты ромашки и календулы, которые успокаивают кожу и снимают раздражение. Подходит для чувствительной кожи.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Наша продукция
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждый продукт создан с использованием лучших природных
              ингредиентов для вашей красоты и здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
