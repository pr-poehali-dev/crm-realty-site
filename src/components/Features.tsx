import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Brain",
      title: "ИИ-аналитика",
      description:
        "Автоматический анализ рынка и прогнозирование цен на недвижимость",
    },
    {
      icon: "Users",
      title: "Автоматический подбор",
      description: "Умное сопоставление клиентов и объектов по 50+ параметрам",
    },
    {
      icon: "Globe",
      title: "Интеграции с порталами",
      description: "Синхронизация с Авито, ЦИАН, Домофонд и другими площадками",
    },
    {
      icon: "MapPin",
      title: "Межрегиональные сделки",
      description: "Единая база объектов по всей России с геолокацией",
    },
    {
      icon: "Phone",
      title: "Контакт-центр",
      description:
        "24/7 обработка звонков с ИИ-ассистентом и записью разговоров",
    },
    {
      icon: "CreditCard",
      title: "Ипотечное брокерство",
      description: "Интеграция с 50+ банками для быстрого оформления ипотеки",
    },
    {
      icon: "Scale",
      title: "Виртуальный юрист",
      description:
        "Автоматическая проверка документов и юридическое сопровождение",
    },
    {
      icon: "BarChart",
      title: "Продвинутая аналитика",
      description:
        "Дашборды, отчеты и KPI для принятия решений на основе данных",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Преимущества нашей CRM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный набор инструментов для автоматизации агентства недвижимости
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
