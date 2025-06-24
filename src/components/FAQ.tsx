import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Сколько времени требуется на внедрение CRM?",
      answer:
        "Базовая настройка занимает 1-2 дня. Полное внедрение с обучением персонала и настройкой интеграций - до 2 недель. Мы предоставляем персонального менеджера для сопровождения.",
    },
    {
      question: "Можно ли интегрировать CRM с существующими системами?",
      answer:
        "Да, наша CRM поддерживает интеграцию с 200+ внешними сервисами через API. Включая популярные порталы недвижимости, банковские системы и телефонию.",
    },
    {
      question: "Какая стоимость использования системы?",
      answer:
        "Стоимость зависит от количества пользователей и модулей. Стартовый тариф от 5000₽/мес на 5 пользователей. Предоставляем 30-дневный бесплатный период для тестирования.",
    },
    {
      question: "Есть ли мобильная версия?",
      answer:
        "Да, у нас есть мобильные приложения для iOS и Android, а также адаптивная веб-версия. Все данные синхронизируются в реальном времени.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Мы используем шифрование AES-256, регулярно создаем резервные копии и соответствуем требованиям 152-ФЗ. Данные хранятся в сертифицированных дата-центрах в России.",
    },
    {
      question: "Предоставляется ли техническая поддержка?",
      answer:
        "Да, круглосуточная техподдержка в тарифах Профессиональный и Корпоративный. В базовом тарифе - поддержка в рабочие часы. Также доступны видеоуроки и база знаний.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашей CRM системе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
