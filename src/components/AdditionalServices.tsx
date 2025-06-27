const AdditionalServices = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      title: "Бесплатный перенос данных",
      description:
        "Бесплатный перенос базы объектов, клиентов, заявок в платформу. Интеграция рекламных кабинетов",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      title: "Брендирование платформы",
      description: "Ваши агенты и сотрудники будут видеть Ваш логотип",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      title: "Колл-центр",
      description:
        "Колл-центр принимает все звонки и обращения. Ни одно обращения не останется без внимания",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Обучение работе с платформой",
      description:
        "Циклический курс для стажеров, школа РОПа, HR, руководителя агентства",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Бизнес консалтинг партнеров",
      description:
        "Профессиональная консультация по развитию бизнеса и оптимизации процессов",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      title: "Дополнительные сервисы",
      description: "Сервисы назначения встреч, удаленный юрист, маркетолог",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Дополнительные услуги для наших пользователей
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Расширьте возможности заработка с нашими дополнительными сервисами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center"
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
