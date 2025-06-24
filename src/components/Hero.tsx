import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 md:py-20 overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 text-sm">
              <span></span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              CRM для агентств недвижимости{" "}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ваша цифровая платформа
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3"
              >
                Заказать презентацию
              </Button>
            </div>

            <div className="flex items-center justify-between sm:justify-start sm:space-x-8 pt-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-purple-400">
                  150+
                </div>
                <div className="text-xs md:text-sm text-gray-400">модулей</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-blue-400">
                  1000+
                </div>
                <div className="text-xs md:text-sm text-gray-400">агентов</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-green-400">
                  Аналитика
                </div>
                <div className="text-xs md:text-sm text-gray-400">под ключ</div>
              </div>
            </div>
          </div>

          {/* Right content - Real CRM interface */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/a146a461-112a-45f5-b151-e097900e4491.png"
                alt="CRM Интерфейс - Дашборд аналитики"
                className="w-full h-auto object-cover"
              />
              {/* Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
