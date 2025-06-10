import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "100% Натуральные ингредиенты",
      description:
        "Только органические компоненты высочайшего качества, без химических добавок и консервантов",
    },
    {
      title: "Экологичное производство",
      description:
        "Бережное отношение к природе на всех этапах создания продукции",
    },
    {
      title: "Проверенная эффективность",
      description:
        "Каждый продукт тестируется и сертифицируется международными стандартами",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Философия бренда
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы верим, что истинная красота приходит изнутри, а наша миссия —
            помочь ей раскрыться с помощью силы природы. Каждый наш продукт
            создан с любовью и вниманием к деталям.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
