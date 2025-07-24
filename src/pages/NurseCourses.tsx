import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  format: 'online' | 'offline' | 'hybrid';
  category: string;
  credits: string;
  profession: 'nurse' | 'pharmacist';
  popular?: boolean;
}

const NurseCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProfession, setSelectedProfession] = useState<'all' | 'nurse' | 'pharmacist'>('all');

  const courses: Course[] = [
    // Медсестры
    {
      id: '1',
      title: 'Аккредитация специалистов "Сестринское дело"',
      description: 'Подготовка к первичной и периодической аккредитации медицинских сестер всех специальностей',
      duration: '144 часа',
      price: '18 000 ₽',
      format: 'hybrid',
      category: 'accreditation',
      credits: '144 ЗЕТ',
      profession: 'nurse',
      popular: true
    },
    {
      id: '2',
      title: 'Операционное дело',
      description: 'Специализация по операционному делу. Подготовка операционных медсестер, инструментальных сестер',
      duration: '252 часа',
      price: '32 000 ₽',
      format: 'offline',
      category: 'specialization',
      credits: '252 ЗЕТ',
      profession: 'nurse'
    },
    {
      id: '3',
      title: 'Анестезиология и реаниматология (сестринское дело)',
      description: 'Специализация медсестер по анестезиологии и реаниматологии. Работа в ОРИТ',
      duration: '288 часов',
      price: '38 000 ₽',
      format: 'hybrid',
      category: 'specialization',
      credits: '288 ЗЕТ',
      profession: 'nurse'
    },
    {
      id: '4',
      title: 'Педиатрия (сестринское дело)',
      description: 'Особенности сестринского ухода в педиатрии. Вакцинопрофилактика, неотложная помощь детям',
      duration: '216 часов',
      price: '28 000 ₽',
      format: 'online',
      category: 'specialization',
      credits: '216 ЗЕТ',
      profession: 'nurse'
    },
    {
      id: '5',
      title: 'Профпереподготовка "Сестринское дело в терапии"',
      description: 'Комплексная переподготовка медсестер для работы в терапевтических отделениях',
      duration: '504 часа',
      price: '45 000 ₽',
      format: 'hybrid',
      category: 'retraining',
      credits: '504 ЗЕТ',
      profession: 'nurse'
    },
    {
      id: '6',
      title: 'Инфекционный контроль и эпидемиологическая безопасность',
      description: 'Современные принципы инфекционного контроля в медицинских организациях',
      duration: '72 часа',
      price: '15 000 ₽',
      format: 'online',
      category: 'continuing',
      credits: '72 ЗЕТ',
      profession: 'nurse'
    },

    // Фармацевты
    {
      id: '7',
      title: 'Аккредитация специалистов "Фармация"',
      description: 'Подготовка к аккредитации фармацевтов и провизоров. Фармакология, фармакогнозия',
      duration: '144 часа',
      price: '22 000 ₽',
      format: 'hybrid',
      category: 'accreditation',
      credits: '144 ЗЕТ',
      profession: 'pharmacist',
      popular: true
    },
    {
      id: '8',
      title: 'Клиническая фармакология',
      description: 'Рациональная фармакотерапия, взаимодействие лекарственных средств, побочные эффекты',
      duration: '216 часов',
      price: '35 000 ₽',
      format: 'online',
      category: 'specialization',
      credits: '216 ЗЕТ',
      profession: 'pharmacist'
    },
    {
      id: '9',
      title: 'Управление и экономика фармации',
      description: 'Организация фармацевтической деятельности, маркетинг, фармакоэкономика',
      duration: '144 часа',
      price: '28 000 ₽',
      format: 'hybrid',
      category: 'specialization',
      credits: '144 ЗЕТ',
      profession: 'pharmacist'
    },
    {
      id: '10',
      title: 'Промышленная фармация',
      description: 'Технология изготовления лекарственных форм, контроль качества, GMP',
      duration: '180 часов',
      price: '32 000 ₽',
      format: 'offline',
      category: 'specialization',
      credits: '180 ЗЕТ',
      profession: 'pharmacist'
    },
    {
      id: '11',
      title: 'Профпереподготовка "Фармацевтическая технология"',
      description: 'Переподготовка специалистов по фармацевтической технологии и контролю качества',
      duration: '504 часа',
      price: '52 000 ₽',
      format: 'hybrid',
      category: 'retraining',
      credits: '504 ЗЕТ',
      profession: 'pharmacist'
    },
    {
      id: '12',
      title: 'Фармакогнозия и лекарственные растения',
      description: 'Изучение лекарственного растительного сырья, методы анализа, стандартизация',
      duration: '108 часов',
      price: '24 000 ₽',
      format: 'online',
      category: 'continuing',
      credits: '108 ЗЕТ',
      profession: 'pharmacist'
    }
  ];

  const categories = [
    { id: 'all', label: 'Все курсы', icon: 'BookOpen' },
    { id: 'accreditation', label: 'Аккредитация', icon: 'Award' },
    { id: 'specialization', label: 'Специализация', icon: 'Stethoscope' },
    { id: 'retraining', label: 'Переподготовка', icon: 'GraduationCap' },
    { id: 'continuing', label: 'Повышение квалификации', icon: 'TrendingUp' }
  ];

  const professions = [
    { id: 'all', label: 'Все специальности', icon: 'Users' },
    { id: 'nurse', label: 'Медсестры', icon: 'Heart' },
    { id: 'pharmacist', label: 'Фармацевты', icon: 'Pill' }
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const professionMatch = selectedProfession === 'all' || course.profession === selectedProfession;
    return categoryMatch && professionMatch;
  });

  const getFormatBadge = (format: Course['format']) => {
    switch (format) {
      case 'online':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Онлайн</Badge>;
      case 'offline':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Очно</Badge>;
      case 'hybrid':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-700">Смешанный</Badge>;
    }
  };

  const getProfessionBadge = (profession: Course['profession']) => {
    switch (profession) {
      case 'nurse':
        return <Badge variant="outline" className="border-pink-200 text-pink-700">Медсестра</Badge>;
      case 'pharmacist':
        return <Badge variant="outline" className="border-indigo-200 text-indigo-700">Фармацевт</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Курсы для медсестер и фармацевтов
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Профессиональное развитие среднего медицинского персонала и фармацевтических специалистов
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1,607+</h3>
                <p className="text-purple-100">Медсестер обучено</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Pill" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">432+</h3>
                <p className="text-purple-100">Фармацевтов обучено</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">96%</h3>
                <p className="text-purple-100">Успешная аккредитация</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Profession Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Специальность:</h3>
            <div className="flex flex-wrap gap-3">
              {professions.map((profession) => (
                <Button
                  key={profession.id}
                  variant={selectedProfession === profession.id ? "default" : "outline"}
                  onClick={() => setSelectedProfession(profession.id as any)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={profession.icon as any} size={16} />
                  <span>{profession.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <Icon name={category.icon as any} size={16} />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Найдено курсов: <span className="font-semibold">{filteredCourses.length}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    {course.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {course.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        {getProfessionBadge(course.profession)}
                        {getFormatBadge(course.format)}
                      </div>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {course.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Icon name="Clock" size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            <Icon name="Trophy" size={16} className="inline mr-1" />
                            {course.credits}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-purple-600">
                            {course.price}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-600/90 hover:to-purple-600/90">
                          <Icon name="BookOpen" size={16} className="mr-2" />
                          Записаться на курс
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Наши специалисты помогут выбрать подходящую программу обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-50">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-50">
              <Icon name="Mail" size={20} className="mr-2" />
              info@medidoutka.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NurseCourses;