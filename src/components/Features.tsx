import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Database",
      title: "Полная база объектов недвижимости",
      description:
        "Централизованная база данных со всеми объектами недвижимости",
    },
    {
      icon: "Target",
      title: "Автоматическая подборка клиентов и объектов",
      description:
        "Умное сопоставление потребностей клиентов с доступными объектами",
    },
    {
      icon: "Layout",
      title: "40+ рабочих столов с предустановленными виджетами",
      description:
        "Настроенные рабочие пространства в зависимости от роли сотрудника",
    },
    {
      icon: "Upload",
      title: "Автоматическая выгрузка на рекламные площадки",
      description: "Размещение объявлений на всех площадках из одного окна",
    },
    {
      icon: "BarChart3",
      title: "Мощная система аналитики в каждом модуле",
      description:
        "Детальная аналитика по заявкам, объектам, рекламе, сделкам и другим процессам",
    },
    {
      icon: "Scale",
      title: "Виртуальный юрист",
      description:
        "Автоматическая проверка документов и юридическое сопровождение сделок",
    },
    {
      icon: "FileText",
      title: "Шаблоны документов",
      description:
        "Готовые шаблоны для всех типов документов в сфере недвижимости",
    },
    {
      icon: "Shield",
      title: "Гибкая настройка прав доступа",
      description:
        "Более 40 ролей для точного контроля доступа к функциям системы",
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
