const Features = () => {
  const features = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Сквозная аналитика",
      description:
        "Данные по рекламе, заявкам, сделкам, объектам и агентам в удобном формате, в любом разрезе",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Единая база объектов",
      description: "Вы найдете все объекты рынка — без перехода по агрегаторам",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      title: "Финансовая прозрачность",
      description: "Выручка и рекламные расходы видны в реальном времени",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "Кошелёк агента",
      description:
        "Персональные лимиты на рекламу и другие траты каждого менеджера",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      title: "Полная база новостроек",
      description: "Зарабатывайте на продаже объектов от застройщиков",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "CRM-воронка продаж",
      description:
        "Находите узкие места и повышайте конверсию покупателей и продавцов",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      title: "Управление рекламой",
      description: "Гибкие права + фиды: запустите кампанию в пару кликов",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=300&fit=crop",
      title: "Звонки и чаты",
      description: "Записи разговоров и ответы на сообщения прямо из платформы",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      title: "Мобильное приложение",
      description: "Полный функционал CRM всегда в вашем смартфоне",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      title: "Интеграции связи",
      description: "Работает со всеми крупными операторами телефонии",
    },
    {
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      title: "Шаблоны документов",
      description: "Генерируйте договоры и акты одним нажатием",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      title: "Интеграция с ИИ",
      description:
        "ИИ напишет текст, удаляет логотипы с фото и другой функционал",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему именно VT 24
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный набор инструментов для автоматизации агентства недвижимости
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
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
