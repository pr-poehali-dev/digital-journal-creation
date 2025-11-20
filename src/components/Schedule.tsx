import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ScheduleProps {
  selectedClass: string;
}

const schedule = {
  'Понедельник': [
    { time: '8:00 - 8:45', subject: 'Математика', room: 'Каб. 201' },
    { time: '8:55 - 9:40', subject: 'Русский язык', room: 'Каб. 203' },
    { time: '9:50 - 10:35', subject: 'Англ. яз.', room: 'Каб. 105' },
    { time: '10:55 - 11:40', subject: 'Физкультура', room: 'Спортзал' },
    { time: '11:50 - 12:35', subject: 'История', room: 'Каб. 301' },
  ],
  'Вторник': [
    { time: '8:00 - 8:45', subject: 'Литература', room: 'Каб. 203' },
    { time: '8:55 - 9:40', subject: 'Математика', room: 'Каб. 201' },
    { time: '9:50 - 10:35', subject: 'Биология', room: 'Каб. 305' },
    { time: '10:55 - 11:40', subject: 'Англ. яз.', room: 'Каб. 105' },
  ],
  'Среда': [
    { time: '8:00 - 8:45', subject: 'Физика', room: 'Каб. 401' },
    { time: '8:55 - 9:40', subject: 'Математика', room: 'Каб. 201' },
    { time: '9:50 - 10:35', subject: 'Англ. яз.', room: 'Каб. 105' },
    { time: '10:55 - 11:40', subject: 'Русский язык', room: 'Каб. 203' },
    { time: '11:50 - 12:35', subject: 'Технология', room: 'Каб. 108' },
  ],
  'Четверг': [
    { time: '8:00 - 8:45', subject: 'География', room: 'Каб. 304' },
    { time: '8:55 - 9:40', subject: 'Химия', room: 'Каб. 402' },
    { time: '9:50 - 10:35', subject: 'Математика', room: 'Каб. 201' },
    { time: '10:55 - 11:40', subject: 'Англ. яз.', room: 'Каб. 105' },
  ],
  'Пятница': [
    { time: '8:00 - 8:45', subject: 'История', room: 'Каб. 301' },
    { time: '8:55 - 9:40', subject: 'Физкультура', room: 'Спортзал' },
    { time: '9:50 - 10:35', subject: 'Литература', room: 'Каб. 203' },
    { time: '10:55 - 11:40', subject: 'Англ. яз.', room: 'Каб. 105' },
    { time: '11:50 - 12:35', subject: 'ОБЖ', room: 'Каб. 110' },
  ],
};

export default function Schedule({ selectedClass }: ScheduleProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {Object.entries(schedule).map(([day, lessons]) => (
        <Card key={day} className="p-4 bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
            <Icon name="Calendar" size={20} className="text-primary" />
            {day}
          </h3>
          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <div 
                key={index} 
                className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-blue-600 mb-1">
                  <Icon name="Clock" size={14} />
                  {lesson.time}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{lesson.subject}</div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Icon name="MapPin" size={12} />
                  {lesson.room}
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
