import { useState } from 'react';
import { isSameDay, isSameMonth } from 'date-fns';
//
import useToggle from './useToggle';

// ----------------------------------------------------------------------

export default function useDateRangePicker(date) {
  const { toggle: openPicker, onOpen: onOpenPicker, onClose: onClosePicker } = useToggle();

  const [startTime, setStartTime] = useState(date[0]);

  const [endTime, setEndTime] = useState(date[1]);

  const isSameDays = startTime && endTime ? isSameDay(new Date(startTime), new Date(endTime)) : false;

  const isSameMonths = startTime && endTime ? isSameMonth(new Date(startTime), new Date(endTime)) : false;

  const handleChangeStartTime = (newValue) => {
    setStartTime(newValue);
  };

  const handleChangeEndTime = (newValue) => {
    setEndTime(newValue);
  };

  return {
    startTime,
    endTime,
    onChangeStartTime: handleChangeStartTime,
    onChangeEndTime: handleChangeEndTime,
    //
    openPicker,
    onOpenPicker,
    onClosePicker,
    //
    isSameDays,
    isSameMonths,
  };
}
