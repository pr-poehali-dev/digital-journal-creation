import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface GradesJournalProps {
  selectedClass: string;
  selectedSubject: string;
}

const students = [
  { id: 1, name: 'Антропова Марина', grades: [4, 5, 5, 4, 5, 4, 5] },
  { id: 2, name: 'Бавцов Владислав', grades: [3, 4, 5, 4, 3, null, null] },
  { id: 3, name: 'Вехтин Олег', grades: [5, null, null, 4, 5, 3, 4] },
  { id: 4, name: 'Воронина Ольга', grades: [3, null, 5, null, 2, null, null] },
  { id: 5, name: 'Грибо Елена', grades: [4, 2, 3, null, null, null, null] },
  { id: 6, name: 'Денисова Юлия', grades: [null, 4, null, 4, 3, 4, null] },
  { id: 7, name: 'Дмитриенко Андрей', grades: [2, 4, 5, null, 2, 4, 2] },
  { id: 8, name: 'Жданов Игорь', grades: [4, 2, 4, 2, 3, 2, 4] },
  { id: 9, name: 'Жданюк Ирина', grades: [null, 4, null, 5, null, 2, null] },
  { id: 10, name: 'Зябко Алена', grades: [5, 3, 5, null, 2, null, null] },
  { id: 11, name: 'Иманова Вера', grades: [null, null, 5, null, null, 2, 3] },
  { id: 12, name: 'Иманова Вероника', grades: [2, 4, 5, 5, 2, null, 3] },
  { id: 13, name: 'Краснов Павел', grades: [null, 5, null, 5, 5, 4, null] },
  { id: 14, name: 'Кузнецов Данил', grades: [4, 2, null, 5, 5, 5, 5] },
  { id: 15, name: 'Левченко Эдуард', grades: [5, null, 4, null, null, null, 4] },
];

const dates = ['22 окт', '24 окт', '29 окт', '31 окт', '5 ноя', '7 ноя', '12 ноя'];

const calculateAverage = (grades: (number | null)[]): number => {
  const validGrades = grades.filter((g): g is number => g !== null);
  if (validGrades.length === 0) return 0;
  return Number((validGrades.reduce((a, b) => a + b, 0) / validGrades.length).toFixed(2));
};

const getGradeColor = (grade: number | null): string => {
  if (grade === null) return '';
  if (grade === 5) return 'text-green-600 font-semibold';
  if (grade === 4) return 'text-blue-600 font-semibold';
  if (grade === 3) return 'text-orange-600 font-semibold';
  return 'text-red-600 font-semibold';
};

const getAverageBadge = (avg: number) => {
  if (avg === 0) return null;
  if (avg >= 4.5) return <Badge className="bg-green-100 text-green-800 border-green-200">{avg}</Badge>;
  if (avg >= 3.5) return <Badge className="bg-blue-100 text-blue-800 border-blue-200">{avg}</Badge>;
  if (avg >= 2.5) return <Badge className="bg-orange-100 text-orange-800 border-orange-200">{avg}</Badge>;
  return <Badge className="bg-red-100 text-red-800 border-red-200">{avg}</Badge>;
};

export default function GradesJournal({ selectedClass, selectedSubject }: GradesJournalProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-8 font-semibold text-gray-700">#</TableHead>
            <TableHead className="min-w-[200px] font-semibold text-gray-700">ФИО ученика</TableHead>
            {dates.map((date) => (
              <TableHead key={date} className="text-center w-16 font-semibold text-gray-700">
                {date}
              </TableHead>
            ))}
            <TableHead className="text-center w-20 font-semibold text-gray-700">Средний балл</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => {
            const avg = calculateAverage(student.grades);
            return (
              <TableRow key={student.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="text-gray-500">{index + 1}</TableCell>
                <TableCell className="font-medium text-gray-900">{student.name}</TableCell>
                {student.grades.map((grade, gradeIndex) => (
                  <TableCell key={gradeIndex} className="text-center">
                    {grade !== null ? (
                      <Input 
                        value={grade} 
                        className={`w-12 h-8 text-center border-gray-200 ${getGradeColor(grade)}`}
                        readOnly
                      />
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  {getAverageBadge(avg)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
