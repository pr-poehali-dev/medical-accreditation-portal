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
  popular?: boolean;
}

const DoctorCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Аккредитация специалистов "Терапия"',
      description: 'Подготовка к первичной и периодической аккредитации врачей-терапевтов с изучением современных протоколов лечения',
      duration: '144 часа',
      price: '25 000 ₽',
      format: 'hybrid',
      category: 'accreditation',
      credits: '144 ЗЕТ',
      popular: true
    },
    {
      id: '2',
      title: 'Кардиология: современные методы диагностики',
      description: 'Инновационные подходы в диагностике сердечно-сосудистых заболеваний. ЭКГ, ЭхоКГ, стресс-тесты',
      duration: '72 часа',
      price: '35 000 ₽',
      format: 'online',
      category: 'specialization',
      credits: '72 ЗЕТ'
    },
    {
      id: '3',
      title: 'Профессиональная переподготовка "Хирургия"',
      description: 'Комплексная программа переподготовки с практическими занятиями на базе ведущих клиник',
      duration: '576 часов',
      price: '95 000 ₽',
      format: 'offline',
      category: 'retraining',
      credits: '576 ЗЕТ'
    },
    {
      id: '4',
      title: 'Неврология: дифференциальная диагностика',
      description: 'Современные методы диагностики неврологических заболеваний. МРТ, КТ, электронейромиография',
      duration: '108 часов',
      price: '42 000 ₽',
      format: 'hybrid',
      category: 'specialization',
      credits: '108 ЗЕТ'
    },
    {
      id: '5',
      title: 'Аккредитация "Педиатрия"',
      description: 'Подготовка педиатров к аккредитации. Особенности детского возраста, вакцинопрофилактика',
      duration: '144 часа',
      price: '28 000 ₽',
      format: 'online',
      category: 'accreditation',
      credits: '144 ЗЕТ'
    },
    {
      id: '6',
      title: 'Эндокринология и диабетология',
      description: 'Современные подходы к лечению сахарного диабета, заболеваний щитовидной железы',
      duration: '96 часов',
      price: '38 000 ₽',
      format: 'hybrid',
      category: 'specialization',
      credits: '96 ЗЕТ'
    },
    {
      id: '7',
      title: 'Профпереподготовка "Анестезиология-реаниматология"',
      description: 'Интенсивная терапия, анестезиологическое пособие, реанимационные мероприятия',
      duration: '576 часов',
      price: '105 000 ₽',
      format: 'offline',
      category: 'retraining',
      credits: '576 ЗЕТ'
    },
    {
      id: '8',
      title: 'Онкология: ранняя диагностика',
      description: 'Скрининговые программы, современные методы диагностики онкологических заболеваний',
      duration: '120 часов',
      price: '45 000 ₽',
      format: 'online',
      category: 'specialization',
      credits: '120 ЗЕТ'
    }
  ];

  const categories = [
    { id: 'all', label: 'Все курсы', icon: 'BookOpen' },
    { id: 'accreditation', label: 'Аккредитация', icon: 'Award' },
    { id: 'specialization', label: 'Специализация', icon: 'Stethoscope' },
    { id: 'retraining', label: 'Переподготовка', icon: 'GraduationCap' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue via-blue-600 to-medical-green py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Курсы для врачей
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Профессиональное развитие и повышение квалификации медицинских специалистов
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1,240+</h3>
                <p className="text-blue-100">Врачей обучено</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">85</h3>
                <p className="text-blue-100">Программ обучения</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-blue-100">Успешная аккредитация</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Icon name={category.icon as any} size={16} />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-6">
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
                        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-medical-blue transition-colors">
                          {course.title}
                        </CardTitle>
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
                          {getFormatBadge(course.format)}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <Icon name="Trophy" size={16} className="inline mr-1" />
                            {course.credits}
                          </div>
                          <div className="text-2xl font-bold text-medical-blue">
                            {course.price}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-blue/90 hover:to-medical-green/90">
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
      <section className="py-16 bg-gradient-to-r from-medical-blue to-medical-green text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Наши специалисты помогут выбрать подходящую программу обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-medical-blue hover:bg-gray-50">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-medical-blue hover:bg-gray-50">
              <Icon name="Mail" size={20} className="mr-2" />
              info@medidoutka.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorCourses;