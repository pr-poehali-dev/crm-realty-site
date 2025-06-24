import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const menuItems = [
    { label: "Возможности", href: "#features" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/6839900a-8cfd-4a0b-8eb9-5d19c54647fc.jpg"
              alt="VT CRM Logo"
              className="h-12 w-12 rounded-lg"
            />
            <div className="text-white">
              <div className="text-xl font-bold">VT CRM</div>
              <div className="text-sm text-gray-300">Недвижимость</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6"
            >
              Демо
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
