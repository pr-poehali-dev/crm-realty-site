import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "Building2",
      number: "5000+",
      label: "Агентств недвижимости",
      description: "используют нашу CRM",
    },
    {
      icon: "Home",
      number: "2.5М+",
      label: "Объектов недвижимости",
      description: "в единой базе данных",
    },
    {
      icon: "DollarSign",
      number: "150 млрд ₽",
      label: "Сделок проведено",
      description: "через нашу платформу",
    },
    {
      icon: "Clock",
      number: "67%",
      label: "Экономия времени",
      description: "на рутинных операциях",
    },
    {
      icon: "TrendingUp",
      number: "+43%",
      label: "Рост продаж",
      description: "в среднем у клиентов",
    },
    {
      icon: "Shield",
      number: "99.9%",
      label: "Надежность",
      description: "время работы системы",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">VT CRM в цифрах</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={stat.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>

              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>

              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>

              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
