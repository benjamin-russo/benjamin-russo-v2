import { useEffect, useState } from 'react';
import getYear from 'date-fns/getYear';

import Select from '../Select/Select';
import SelectItem from '../Select/SelectItem/SelectItem';

import styles from './DatePicker.module.scss';
import { days, months } from './data';

interface DatePickerProps {
  label: string;
  labelId: string;
  onChange: (labelId: string, value: string) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const { label, labelId, onChange } = props;

  const currentYear = getYear(new Date());

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  useEffect(() => {
    const { day, month, year } = date;
    if (day && month && year) {
      onChange(labelId, `${day} ${month} ${year}`);
    }
  }, [date]);

  const handleOnFieldChange = (fieldId: string, value: string) => {
    setDate({
      ...date,
      [fieldId]: value,
    });
  };

  const daysItems = days.map((day) => (
    <SelectItem key={day} value={day.toString()}>
      {day}
    </SelectItem>
  ));

  const monthsItems = months.map((month) => (
    <SelectItem key={month} value={month.toString()}>
      {month}
    </SelectItem>
  ));

  return (
    <div className={styles['DatePicker']}>
      <label className={styles['DatePicker-label']} htmlFor='day'>
        {label}
      </label>
      <div className={styles['DatePicker-fields']}>
        <Select
          className={styles['DatePicker-day']}
          labelId='day'
          onChange={handleOnFieldChange}
          placeholder='Jour'
          value={date.day}
        >
          {daysItems}
        </Select>
        <Select
          className={styles['DatePicker-month']}
          labelId='month'
          onChange={handleOnFieldChange}
          placeholder='Mois'
          value={date.month}
        >
          {monthsItems}
        </Select>
        <Select
          className={styles['DatePicker-year']}
          labelId='year'
          onChange={handleOnFieldChange}
          placeholder='Année'
          value={date.year}
        >
          <SelectItem value={currentYear.toString()}>{currentYear}</SelectItem>
          <SelectItem value={(currentYear + 1).toString()}>{currentYear + 1}</SelectItem>
          <SelectItem value={(currentYear + 2).toString()}>{currentYear + 2}</SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default DatePicker;
