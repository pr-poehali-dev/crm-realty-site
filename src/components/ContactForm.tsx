import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl text-purple-100">
              Оставьте заявку и получите персональную демонстрацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-purple-100">+7 (495) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-purple-100">sales@vtcrm.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Офис</div>
                      <div className="text-purple-100">
                        Москва, ул. Тверская, 15
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Gift" size={24} className="text-yellow-400" />
                  <span className="font-semibold">Специальное предложение</span>
                </div>
                <p className="text-purple-100">
                  При заключении договора до конца месяца - скидка 25% на первый
                  год использования!
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название компании
                  </label>
                  <Input placeholder="ООО «Ваша компания»" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о ваших потребностях..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить демо
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
