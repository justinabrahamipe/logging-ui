import { differenceInHours, differenceInMinutes, differenceInSeconds, format, isSameDay } from 'date-fns';
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";

export function Logcard({ data }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startTime = data.startTime ? new Date(data.startTime) : null;
  const formattedDate = startTime && !isSameDay(currentTime, startTime) ? format(startTime, 'dd/MM/yyyy') : '';
  const formattedTime = startTime ? format(startTime, 'HH:mm') : '';

  let timeDifference = '';
  if (startTime) {
    const hours = String(differenceInHours(currentTime, startTime)).padStart(2, '0');
    const minutes = String(differenceInMinutes(currentTime, startTime) % 60).padStart(2, '0');
    const seconds = String(differenceInSeconds(currentTime, startTime) % 60).padStart(2, '0');
    timeDifference = `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="flex w-max flex-row  flex-wrap gap-2 rounded-lg  border-2 border-cyan-600 p-2">
       <div className='flex flex-col gap-2 p-2'>
      <div className='flex flex-row gap-2'>
      <div className=" flex text-lg text-gray-900 dark:text-white">{data.emoji} {data.activity}</div>
      <div className=" flex text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {formattedDate && `${formattedDate} `}
        {formattedTime}
      </div>
      <div className="text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {timeDifference}
      </div>    
      </div>
      <div className='flex  flex-row self-start  dark:text-gray-400 '>{data?.tags}</div>
      </div>  <div className='flex justify-center self-center align-middle'><Button  className='p-0'>Stop</Button></div>
    </div>
  );
}
