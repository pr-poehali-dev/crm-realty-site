import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 text-sm">
              <Icon name="Zap" size={16} className="text-yellow-400" />
              <span>Лидер рынка CRM для недвижимости</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              CRM для агентств недвижимости{" "}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Ваша цифровая платформа
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3"
              >
                Заказать презентацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3"
              >
                Узнать подробней
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">150+</div>
                <div className="text-sm text-gray-400">модулей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1000+</div>
                <div className="text-sm text-gray-400">агентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  Аналитика
                </div>
                <div className="text-sm text-gray-400">под ключ</div>
              </div>
            </div>
          </div>

          {/* Right content - Mock dashboard */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Icon name="Building" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">ЖК "Северная звезда"</div>
                      <div className="text-sm text-gray-400">3-комн, 85м²</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">12.5М ₽</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <div className="text-blue-400 text-sm">Новые лиды</div>
                    <div className="text-2xl font-bold">+47</div>
                  </div>
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <div className="text-green-400 text-sm">Сделки</div>
                    <div className="text-2xl font-bold">23</div>
                  </div>
                </div>

                <div className="h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-purple-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
