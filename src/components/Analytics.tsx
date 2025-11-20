import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AnalyticsProps {
  selectedClass: string;
  selectedSubject: string;
}

const studentsData = [
  { name: 'Антропова Марина', avg: 4.57, total: 7 },
  { name: 'Бавцов Владислав', avg: 3.80, total: 5 },
  { name: 'Вехтин Олег', avg: 4.20, total: 5 },
  { name: 'Воронина Ольга', avg: 3.33, total: 3 },
  { name: 'Грибо Елена', avg: 3.00, total: 3 },
  { name: 'Денисова Юлия', avg: 3.75, total: 4 },
  { name: 'Дмитриенко Андрей', avg: 3.14, total: 7 },
  { name: 'Жданов Игорь', avg: 3.00, total: 7 },
  { name: 'Жданюк Ирина', avg: 3.67, total: 3 },
  { name: 'Зябко Алена', avg: 3.75, total: 4 },
  { name: 'Иманова Вера', avg: 3.33, total: 3 },
  { name: 'Иманова Вероника', avg: 3.57, total: 7 },
  { name: 'Краснов Павел', avg: 4.75, total: 4 },
  { name: 'Кузнецов Данил', avg: 4.33, total: 6 },
  { name: 'Левченко Эдуард', avg: 4.33, total: 3 },
];

const gradeDistribution = [
  { grade: 5, count: 23, percentage: 32 },
  { grade: 4, count: 28, percentage: 39 },
  { grade: 3, count: 18, percentage: 25 },
  { grade: 2, count: 3, percentage: 4 },
];

export default function Analytics({ selectedClass, selectedSubject }: AnalyticsProps) {
  const classAvg = (studentsData.reduce((sum, s) => sum + s.avg, 0) / studentsData.length).toFixed(2);
  const totalGrades = studentsData.reduce((sum, s) => sum + s.total, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="p-6 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Общая статистика</h3>
          <Icon name="TrendingUp" className="text-primary" size={24} />
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-600 mb-1">Средний балл класса</div>
            <div className="text-3xl font-bold text-blue-700">{classAvg}</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-600 mb-1">Всего оценок</div>
            <div className="text-3xl font-bold text-green-700">{totalGrades}</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-sm text-purple-600 mb-1">Учеников в классе</div>
            <div className="text-3xl font-bold text-purple-700">{studentsData.length}</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white shadow-sm lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Распределение оценок</h3>
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
        <div className="space-y-4">
          {gradeDistribution.map((item) => (
            <div key={item.grade} className="flex items-center gap-4">
              <div className="w-16 text-center">
                <span className="text-2xl font-bold text-gray-700">{item.grade}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div 
                      className={`h-full flex items-center justify-end pr-3 text-white text-sm font-semibold transition-all ${
                        item.grade === 5 ? 'bg-green-500' :
                        item.grade === 4 ? 'bg-blue-500' :
                        item.grade === 3 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    >
                      {item.percentage > 10 && `${item.percentage}%`}
                    </div>
                  </div>
                  <div className="w-24 text-right">
                    <span className="text-sm font-medium text-gray-700">{item.count} оценок</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-white shadow-sm lg:col-span-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Успеваемость учеников</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ученик</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Средний балл</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Оценок</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Рейтинг</th>
              </tr>
            </thead>
            <tbody>
              {studentsData
                .sort((a, b) => b.avg - a.avg)
                .map((student, index) => (
                  <tr key={student.name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-900">{student.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        student.avg >= 4.5 ? 'bg-green-100 text-green-800' :
                        student.avg >= 3.5 ? 'bg-blue-100 text-blue-800' :
                        student.avg >= 2.5 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {student.avg.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">{student.total}</td>
                    <td className="py-3 px-4 text-center">
                      {index < 3 ? (
                        <span className="inline-flex items-center gap-1 text-yellow-600">
                          <Icon name="Award" size={18} />
                          <span className="font-semibold">#{index + 1}</span>
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">#{index + 1}</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
