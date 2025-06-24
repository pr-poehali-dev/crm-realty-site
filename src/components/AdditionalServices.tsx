import Icon from "@/components/ui/icon";

const AdditionalServices = () => {
  const services = [
    {
      icon: "MapPin",
      title: "Межрегиональные сделки",
      description: "Зарабатывайте передавая клиентов в любые регионы",
    },
    {
      icon: "Headphones",
      title: "Контакт-центр",
      description: "Каждое обращение будет учтено",
    },
    {
      icon: "Home",
      title: "Ипотечный брокеридж",
      description: "Комиссия до 50 тыс. руб за проданный полис",
    },
    {
      icon: "Shield",
      title: "Страхование недвижимости, здоровья и жизни",
      description: "Зарабатывайте на комиссии страховщиков",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-white"
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
