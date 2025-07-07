import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-4 lg:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Icon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              JollyLevelUP
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Особенности
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Как работает
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none">
                  🇷🇺 Первая в России AI-платформа
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Обучение как
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                    увлекательная игра
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Представь, что обучение — это игра. Только в этой игре ты —
                  главный герой. Твой цифровой двойник растёт с тобой, а
                  AI-ассистент превращается в живого напарника.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8"
                >
                  Начать бесплатно
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8"
                >
                  Смотреть демо
                  <Icon name="Play" className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="w-4 h-4" />
                  <span>1000+ учеников</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="w-4 h-4 text-yellow-500" />
                  <span>4.9 рейтинг</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="w-4 h-4 text-green-500" />
                  <span>Данные в России</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/9c61bf59-6b2b-4b1c-b034-e1bcf5fc0481.jpg"
                  alt="Цифровой персонаж JollyLevelUP"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 lg:px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Особенности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Три основных преимущества, которые делают JollyLevelUP уникальной
              образовательной платформой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Gamepad2" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-900">Геймификация</CardTitle>
                <CardDescription className="text-purple-700">
                  XP, уровни, достижения и виртуальная валюта. Обучение
                  превращается в увлекательную игру.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Brain" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-900">
                  AI-персонализация
                </CardTitle>
                <CardDescription className="text-green-700">
                  Искусственный интеллект адаптирует обучение под твой темп и
                  стиль восприятия.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900">
                  Цифровой двойник
                </CardTitle>
                <CardDescription className="text-orange-700">
                  Твой персональный персонаж растёт и развивается вместе с тобой
                  в реальном времени.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простая визуальная цепочка процесса обучения с JollyLevelUP
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ставишь цель
              </h3>
              <p className="text-gray-600">
                Говоришь AI-ассистенту, что хочешь изучить
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckSquare" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Выполняешь задания
              </h3>
              <p className="text-gray-600">
                Получаешь персонализированные задачи и упражнения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Зарабатываешь XP
              </h3>
              <p className="text-gray-600">
                За каждое выполненное задание получаешь опыт
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Получаешь награды
              </h3>
              <p className="text-gray-600">
                Твой персонаж развивается и получает новые возможности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите план, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Для начинающих</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  Бесплатно
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Базовый AI-ассистент
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Простой цифровой персонаж
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    3 предмета для изучения
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>
            <Card className="border-purple-500 border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Для активных учеников</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  990₽ <span className="text-sm font-normal">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Продвинутый AI-ассистент
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Полная кастомизация персонажа
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Безлимитные предметы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Командные челленджи
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Для школ и центров</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  2990₽ <span className="text-sm font-normal">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Все функции Стандарт
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Управление классами
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Аналитика прогресса
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                О JollyLevelUP
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создали первую в России AI-платформу, где реальный прогресс
                отражается в виртуальном мире. Наша миссия — сделать обучение
                увлекательным и эффективным для каждого.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">
                    Все данные хранятся в России
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Готовим включение в Реестр российского ПО
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Подходит для учеников, учителей и школ
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Что будет через год?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <Icon
                    name="Sparkles"
                    className="w-5 h-5 text-purple-600 mt-1"
                  />
                  <span>Персонажи полностью оживают</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Heart" className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Ассистент учит, как лучший друг</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Users" className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Ты становишься частью комьюнити</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="GraduationCap"
                    className="w-5 h-5 text-purple-600 mt-1"
                  />
                  <span>Школы получают новый способ мотивации</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 px-4 lg:px-6 bg-gradient-to-r from-purple-600 to-indigo-600"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готов начать своё обучающее приключение?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйся к JollyLevelUP и преврати обучение в увлекательную
            игру. Твой цифровой двойник уже ждёт тебя!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8"
            >
              Начать бесплатно
              <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 px-4 lg:px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">JollyLevelUP</span>
              </div>
              <p className="text-gray-400 text-sm">
                Первая в России AI-платформа обучения с геймификацией и цифровым
                персонажем
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Особенности
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    Как работает
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Тарифы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 JollyLevelUP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
