import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('accreditation');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "МЕДИДУОТКА — Ваш надежный партнер",
      subtitle: "15 лет на рынке медицинского образования",
      content: "Лицензированный образовательный центр с полным циклом подготовки медицинских специалистов. Более 2,800 успешно аккредитованных врачей и медсестер.",
      image: "/img/8cc1248a-9e94-4292-9821-da3fa982d79d.jpg",
      stats: "2,847 специалистов"
    },
    {
      id: 2,
      title: "Современные методы обучения",
      subtitle: "Онлайн и офлайн форматы",
      content: "Индивидуальный подход к каждому специалисту. Гибкий график, качественные материалы, опытные преподаватели-практики. Обучение без отрыва от работы.",
      image: "/img/18be3f94-2a53-4d2b-be30-c45356a5c237.jpg",
      stats: "97% успешной аккредитации"
    },
    {
      id: 3,
      title: "Полное сопровождение процесса",
      subtitle: "От консультации до получения выписки",
      content: "Берем на себя всю бумажную работу: подготовка документов, внесение данных в ФИС ФРДО, подача заявки в ФРМР, получение выписки с Госуслуг.",
      image: "/img/cc3998c1-a988-48cc-b70e-862a0b5f4f58.jpg",
      stats: "100% соответствие требованиям"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const sections = [
    {
      id: 'accreditation',
      title: 'Периодическая аккредитация',
      icon: 'GraduationCap',
      description: 'Подтверждение профессиональной квалификации каждые 5 лет',
      courses: 28,
      completed: 15
    },
    {
      id: 'retraining',
      title: 'Профессиональная переподготовка',
      icon: 'BookOpen',
      description: 'Получение новой специальности или квалификации',
      courses: 12,
      completed: 8
    },
    {
      id: 'qualification',
      title: 'Повышение квалификации',
      icon: 'TrendingUp',
      description: 'Совершенствование профессиональных знаний и навыков',
      courses: 45,
      completed: 32
    },
    {
      id: 'nmo',
      title: 'Курсы НМО',
      icon: 'Heart',
      description: 'Непрерывное медицинское образование для специалистов',
      courses: 67,
      completed: 42
    }
  ];

  const reportData = [
    { period: 'Q1 2024', completed: 156, inProgress: 89, certified: 134 },
    { period: 'Q2 2024', completed: 203, inProgress: 76, certified: 187 },
    { period: 'Q3 2024', completed: 178, inProgress: 94, certified: 165 },
    { period: 'Q4 2024', completed: 142, inProgress: 118, certified: 128 }
  ];

  const licenses = [
    { name: 'Лицензия на образовательную деятельность', number: 'Л035-01213-77/00180832', expires: '15.06.2026' },
    { name: 'Свидетельство об аккредитации', number: '1234-ОД-2023', expires: '20.12.2025' },
    { name: 'Сертификат соответствия ISO 9001', number: 'ISO-2024-MED-001', expires: '30.03.2026' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-gray to-white">


      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue/10 to-medical-green/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
                  <Icon name="Award" size={14} className="mr-1" />
                  Лицензированный образовательный центр
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Профессиональное
                  <span className="block text-medical-blue">медицинское образование</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Аккредитация, повышение квалификации и переподготовка медицинских работников 
                  с полной отчетностью для регулирующих органов
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-medical-blue hover:bg-blue-600">
                  <Icon name="Play" size={16} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d9ea04a7-ac8a-45fe-b487-08e96d61fe30.jpg" 
                alt="Медицинское образование" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-medical-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                    <p className="text-sm text-gray-600">Сертифицированных специалистов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Presentation */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Знакомство с академией МЕДИДУОТКА</h2>
            <p className="text-xl text-gray-300">Презентация нашего образовательного центра</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-medical-blue to-medical-green rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                      <div>
                        <Badge className="bg-white/20 text-white border-white/30 mb-4">
                          Слайд {index + 1} из {slides.length}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-xl text-white/80 mb-4">{slide.subtitle}</p>
                      </div>
                      <p className="text-lg text-white/90 leading-relaxed">{slide.content}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Award" size={20} className="text-yellow-400" />
                          <span className="font-semibold">{slide.stats}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-medical-blue/20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={24} className="text-white" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <Icon name="ChevronRight" size={24} className="text-white" />
            </button>
          </div>

          {/* Academy Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-medical-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold mb-2">2,847</p>
              <p className="text-gray-300">Выпускников</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-medical-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold mb-2">15</p>
              <p className="text-gray-300">Лет опыта</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold mb-2">152</p>
              <p className="text-gray-300">Программы обучения</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <p className="text-3xl font-bold mb-2">97%</p>
              <p className="text-gray-300">Успешная аккредитация</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Направления обучения</h2>
            <p className="text-xl text-gray-600">Полный спектр образовательных программ для медицинских работников</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Card key={section.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center mb-4">
                    <Icon name={section.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription className="text-sm">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Прогресс</span>
                      <span className="text-sm font-semibold">{Math.round((section.completed / section.courses) * 100)}%</span>
                    </div>
                    <Progress value={(section.completed / section.courses) * 100} className="h-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Курсов: {section.courses}</span>
                      <span>Завершено: {section.completed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что входит в нашу работу</h2>
            <p className="text-xl text-gray-600">Полный цикл сопровождения медицинских специалистов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medical-blue to-medical-green"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-medical-blue" />
                  </div>
                  <div>
                    <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20 text-xs">
                      Этап 1
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Проверим, какие документы на аккредитацию у вас есть. Если чего-то не достает, поможем получить.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Анализ имеющихся документов
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Составление плана аккредитации
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Помощь в получении недостающих справок
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medical-green to-medical-blue"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-lg flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-medical-green" />
                  </div>
                  <div>
                    <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20 text-xs">
                      Этап 2
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Набор баллов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Если нужно — проведем повышение квалификации, внесем данные об образовании в ФИС ФРДО, а удостоверение доставим вам курьером.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Курсы повышения квалификации
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Внесение данных в ФИС ФРДО
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Курьерская доставка удостоверений
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-medical-blue"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <Badge className="bg-purple-100 text-purple-500 border-purple-200 text-xs">
                      Этап 3
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Подготовка документов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мы готовим все необходимые документы за вас. Вам не придется выделять на это время.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Сбор необходимых справок
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Оформление документации
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Проверка на соответствие требованиям
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="Send" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <Badge className="bg-orange-100 text-orange-500 border-orange-200 text-xs">
                      Этап 4
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Подача заявки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Помогаем правильно заполнить заявление и прикрепить необходимые документы в личном кабинете ФРМР.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Заполнение заявления в ФРМР
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Прикрепление документов
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Контроль статуса заявки
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Download" size={24} className="text-green-500" />
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-500 border-green-200 text-xs">
                      Этап 5
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">Получение выписки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Когда аккредитация пройдена, помогаем получить выписку о прохождении с Госуслуг.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Помощь в работе с Госуслугами
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Получение официальной выписки
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Check" size={14} className="mr-2 text-medical-green" />
                    Доставка документов
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-medical-blue hover:bg-blue-600">
              <Icon name="CalendarCheck" size={16} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-medical-blue/5 to-medical-green/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-600">Более 2,800 медицинских специалистов доверили нам свою аккредитацию</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    ЕА
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Елена Андреева</h4>
                    <p className="text-sm text-gray-600">Врач-терапевт, 8 лет стажа</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Благодаря МЕДИДУОТКА прошла аккредитацию без единой проблемы. Все документы подготовили за меня, 
                  курсы были качественными и практичными. Особенно понравилось, что удостоверение привезли курьером прямо на работу!"
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Декабрь 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-green to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    МС
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Михаил Соколов</h4>
                    <p className="text-sm text-gray-600">Врач-хирург, 15 лет стажа</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Как главврач рекомендую МЕДИДУОТКА всем коллегам. Помогли провести аккредитацию для 23 врачей нашей клиники. 
                  Отчеты для Минздрава подготовили идеально, никаких замечаний от контролирующих органов не было."
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Ноябрь 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    ТН
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Татьяна Никитина</h4>
                    <p className="text-sm text-gray-600">Медсестра высшей категории</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Очень волновалась перед аккредитацией, но специалисты центра поддерживали на каждом этапе. 
                  Курсы НМО были интересными, а главное - применимыми в работе. Результат - успешная аккредитация за 2 месяца!"
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Октябрь 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    АК
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Александр Козлов</h4>
                    <p className="text-sm text-gray-600">Врач-кардиолог, 12 лет стажа</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Переходил из частной клиники в государственную и нужна была срочная переподготовка. 
                  МЕДИДУОТКА организовали всё за 3 недели! Документы в ФИС ФРДО внесли моментально, 
                  теперь работаю кардиохирургом в областной больнице."
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Сентябрь 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    ОВ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ольга Васильева</h4>
                    <p className="text-sm text-gray-600">Врач-педиатр, 6 лет стажа</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Молодая мама, времени катастрофически не хватало на подготовку к аккредитации. 
                  Центр взял на себя всю бумажную работу, а обучение проходила онлайн в удобное время. 
                  Аккредитацию прошла с первого раза!"
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Август 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    ДР
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Дмитрий Романов</h4>
                    <p className="text-sm text-gray-600">Врач-анестезиолог, 20 лет стажа</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "Опытный врач, но технологии — не мой конек. Специалисты МЕДИДУОТКА помогли разобраться с ФРМР, 
                  заполнили все заявления в электронном виде. Даже выписку с Госуслуг получили за меня. 
                  Сервис на высшем уровне!"
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  Июль 2024
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9 из 5</span>
              <span className="text-gray-600">• 1,247 отзывов</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы об аккредитации</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img 
                src="/img/a327b9af-5287-47d3-a1f4-0f1ff13b8848.jpg" 
                alt="Медицинская консультация" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center">
                    <Icon name="HelpCircle" size={20} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Консультации</p>
                    <p className="text-sm text-gray-600">Бесплатно</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-900">
                      Если врач менял места трудовой деятельности за последние пять лет, как оформлять отчет?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700">
                    <div className="space-y-4">
                      <p>Наши специалисты рекомендуют указать в отчете:</p>
                      <ul className="space-y-2 list-disc list-inside ml-4">
                        <li>название текущего места работы</li>
                        <li>вашу должность на момент подачи отчета</li>
                        <li>все трудовые функции, которые вы выполняли за последние пять лет, не обозначая при этом места работы</li>
                      </ul>
                      <p>Этот отчет должен подписать ваш руководитель. Он имеет право заверить только те функции, которые относятся к текущему месту работы. Если же он отказывается подписывать отчет, прикладывайте мотивированный отказ.</p>
                      <p className="text-medical-blue font-medium">При смене работы запрашивайте сведения о функциях у мед. статистика, это поможет вам при написании отчета.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-900">
                      Врач работает на врачебной и руководящей должности одновременно, кто заверяет отчет?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700">
                    <p>Такой отчет отправляется без заверения. Будет плюсом, если добавить к нему документ о подтверждении руководящей должности.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-900">
                      Где должны стоять подписи руководителя в отчете?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700">
                    <p>Подпись с расшифровкой и печать нужны на листе отчета о профессиональной деятельности.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-900">
                      Можно ли подать на аккредитацию менее чем за полгода до конца действия сертификата?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700">
                    <p>Подавайте ваши документы не ранее чем за три месяца до истечения действия свидетельства. Если подавать раньше, ФАЦ пришлет отказ.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-900">
                      Врач в декрете, нужно пройти аккредитацию, нужна ли подпись начальника в отчете?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700">
                    <p>Да. Ваш текущий работодатель в любом случае должен либо заверить отчет, либо вы должны приложить его мотивированный отказ.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 p-6 bg-gradient-to-r from-medical-blue/10 to-medical-green/10 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-blue/20 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-medical-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Не нашли ответ на свой вопрос?</h4>
                    <p className="text-gray-600">Получите бесплатную консультацию наших специалистов</p>
                  </div>
                  <Button className="bg-medical-blue hover:bg-blue-600">
                    Задать вопрос
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отчетность для регулирующих органов</h2>
            <p className="text-xl text-gray-600">Автоматизированная система учета и формирования отчетов</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="accreditation">Аккредитация</TabsTrigger>
              <TabsTrigger value="statistics">Статистика</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
            </TabsList>

            <TabsContent value="statistics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Статистика обучения по периодам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Период</TableHead>
                        <TableHead>Завершено курсов</TableHead>
                        <TableHead>В процессе</TableHead>
                        <TableHead>Сертифицировано</TableHead>
                        <TableHead>Эффективность</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reportData.map((item) => (
                        <TableRow key={item.period}>
                          <TableCell className="font-medium">{item.period}</TableCell>
                          <TableCell>{item.completed}</TableCell>
                          <TableCell>{item.inProgress}</TableCell>
                          <TableCell>{item.certified}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-medical-green/10 text-medical-green">
                              {Math.round((item.certified / item.completed) * 100)}%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileCheck" size={20} className="mr-2" />
                    Лицензии и сертификаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {licenses.map((license, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Icon name="Shield" size={20} className="text-medical-green" />
                          <div>
                            <p className="font-medium">{license.name}</p>
                            <p className="text-sm text-gray-600">{license.number}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Действует до</p>
                          <p className="font-medium">{license.expires}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accreditation" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Users" size={18} className="mr-2 text-medical-blue" />
                      Всего специалистов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-medical-blue">2,847</p>
                    <p className="text-sm text-gray-600 mt-1">+12% за квартал</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Award" size={18} className="mr-2 text-medical-green" />
                      Аккредитовано
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-medical-green">2,614</p>
                    <p className="text-sm text-gray-600 mt-1">91.8% от общего числа</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Clock" size={18} className="mr-2 text-orange-500" />
                      В процессе
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-orange-500">233</p>
                    <p className="text-sm text-gray-600 mt-1">Завершение до 31.12.2024</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">МЕДИДУОТКА</h3>
              </div>
              <p className="text-gray-400">
                Лицензированный центр медицинского образования с полным циклом подготовки специалистов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Образование</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Периодическая аккредитация</li>
                <li>Профпереподготовка</li>
                <li>Повышение квалификации</li>
                <li>Курсы НМО</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензии</li>
                <li>Сертификаты</li>
                <li>Отчеты</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@mediduotka.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Медицинская, 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;