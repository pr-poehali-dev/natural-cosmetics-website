import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
          Красота от природы
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Натуральная косметика премиум-класса, созданная с заботой о вашей коже
          и окружающей среде
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
        >
          Узнать больше
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
