import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <section className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-montserrat">
              О нашем бренде
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Наша косметика создается только из натуральных ингредиентов, без
              добавления химических веществ и парабенов. Мы заботимся о вашем
              здоровье и о природе.
            </p>

            <div className="flex justify-center gap-6">
              <Link to="/gallery">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                >
                  Перейти на страницу 2
                </Button>
              </Link>
              <Link to="/certificates">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Перейти на страницу 3
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
