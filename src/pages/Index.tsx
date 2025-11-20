import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import GradesJournal from '@/components/GradesJournal';
import Schedule from '@/components/Schedule';
import Analytics from '@/components/Analytics';

export default function Index() {
  const [selectedClass, setSelectedClass] = useState('3Б');
  const [selectedSubject, setSelectedSubject] = useState('Англ. яз.');

  const classes = ['1А', '2В', '3Б', '4А', '5Г', '6Б', '7А', '8В', '9Б', '10А', '11Б'];
  const subjects = ['Англ. яз.', 'Математика', 'Русский язык', 'Литература', 'История', 'Физика', 'Химия', 'Биология'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Электронный журнал</h1>
                <p className="text-sm text-gray-500">МАОУ "Гимназия № 3"</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="User" size={18} />
                <span>Самойлова И. А.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="journal" className="space-y-6">
          <TabsList className="bg-white shadow-sm">
            <TabsTrigger value="journal" className="flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              Журнал
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              Расписание
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Icon name="BarChart3" size={18} />
              Отчеты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="space-y-4">
            <Card className="p-4 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold text-gray-900">Класс {selectedClass}</h2>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Icon name="FileSpreadsheet" size={16} />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Icon name="FileText" size={16} />
                    PDF
                  </Button>
                </div>
              </div>
              <GradesJournal selectedClass={selectedClass} selectedSubject={selectedSubject} />
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Schedule selectedClass={selectedClass} />
          </TabsContent>

          <TabsContent value="analytics">
            <Analytics selectedClass={selectedClass} selectedSubject={selectedSubject} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
