import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop",
      description: "Сертификат экологической чистоты нашей продукции.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
      description:
        "Сертификат, подтверждающий естественность всех компонентов.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши сертификаты
            </h2>
          </div>

          <div className="space-y-12">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img
                    src={certificate.image}
                    alt={`Сертификат ${certificate.id}`}
                    className="w-full md:w-80 h-80 object-cover rounded-lg"
                  />
                  <p className="text-lg text-gray-600 leading-relaxed flex-1">
                    {certificate.description}
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
            <Link to="/gallery">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              >
                Перейти на страницу 2
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
