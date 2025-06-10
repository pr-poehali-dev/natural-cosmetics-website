import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop",
      title: "Сертификат органического производства",
      description:
        "Международный сертификат подтверждающий органическое происхождение всех ингредиентов",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
      title: "Сертификат качества ISO 22716",
      description:
        "Стандарт качества косметической продукции, признанный во всем мире",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Сертификаты качества
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наша продукция сертифицирована по международным стандартам
              качества и безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {certificates.map((certificate) => (
              <Card
                key={certificate.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600">{certificate.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
