const OfficeVisit = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Приглашаем на экскурсию в наш офис
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Посетите нас в Москве или Владимире для детального знакомства с
              продуктом, персоналом и бизнес-процессами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Москва</h3>
              <p className="text-gray-600">
                Познакомьтесь с командой разработки и увидите все возможности
                платформы
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Владимир
              </h3>
              <p className="text-gray-600">
                Изучите бизнес-процессы и получите персональную консультацию
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Записаться на экскурсию
            </button>
            <p className="text-gray-500 text-sm">
              Экскурсия займет 2-3 часа и включает демонстрацию всех
              возможностей CRM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeVisit;
