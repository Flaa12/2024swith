'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar } from '~/components/ui/calendar'
import { startOfWeek, format, addDays, isSameDay } from 'date-fns'
import { ko } from 'date-fns/locale'
import AddIcon from '~/assets/icon_add.svg'
import CalendarIcon from '~/assets/icon_calendar.svg'

interface WeekMonthCalendarProps {
  category: 'calendar' | 'assignment'
  onSelectDate: (date: string) => void
}

export default function WeekMonthCalendar({
  category,
  onSelectDate,
}: WeekMonthCalendarProps) {
  const [isMonthView, setIsMonthView] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleDateClick = (date: string) => {
    onSelectDate(date)
  }

  const toggleView = () => {
    setIsMonthView(!isMonthView)
  }

  const getWeekDays = (date: any) => {
    const start = startOfWeek(date, { weekStartsOn: 0 })
    return Array.from({ length: 7 }, (_, i) => addDays(start, i))
  }

  const renderWeekView = () => {
    const days = getWeekDays(selectedDate)
    return (
      <div className="flex justify-center space-x-3">
        {days.map((day) => {
          const isToday = isSameDay(day, new Date())
          return (
            <div
              key={day}
              className="flex flex-col items-center justify-center text-center"
            >
              <div
                className={`text-sm font-semibold ${
                  isToday ? 'text-meetie-blue-4' : 'text-meetie-gray-40'
                }`}
              >
                {format(day, 'EEE', { locale: ko })}
              </div>
              <div
                onClick={() =>
                  handleDateClick(format(day, 'M월 d일 EEEE', { locale: ko }))
                }
                className={`mt-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f4f4f4] ${
                  isToday
                    ? 'border-2 border-meetie-blue-4'
                    : 'border border-meetie-gray-20'
                }`}
              >
                {format(day, 'd')}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  const getMonthYear = (date: any) => {
    return format(date, 'MMMM', { locale: ko })
  }

  return (
    <div className="bg-[#f9f9f9] py-4">
      {category === 'calendar' ? (
        <div className="flex justify-between px-4 pb-4">
          <div className="text-lg font-semibold">
            {getMonthYear(selectedDate)}
          </div>
          {/* + / 캘린더 아이콘 */}
          <div className="flex gap-1">
            <Link href="/studyroom/calendarAdd">
              <AddIcon />
            </Link>
            <button onClick={toggleView}>
              <CalendarIcon />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      {/* 캘린더 영역 */}
      {isMonthView ? (
        <div className="flex items-center justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ko}
            weekStartsOn={0}
          />
        </div>
      ) : (
        renderWeekView()
      )}
    </div>
  )
}