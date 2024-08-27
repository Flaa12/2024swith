'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { cn } from '../../../src/utils/cn'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Textarea } from '~/components/ui/textarea'
import Link from 'next/link'
import { Chip } from '~/components/ui/chip'
import { Input } from '~/components/ui/input'
import { StudyHeaderProgress } from '~/components/studycreate/study-header'
import CreateProgress from '~/components/studycreate/create-progress'

export default function Step2Input({
  onNext,
}: {
  onNext: (curriculum: string) => void
}) {
  const [startdate, setStartDate] = React.useState<Date>()
  const [enddate, setEndDate] = React.useState<Date>()
  const [regulardate, setRegularDate] = React.useState<Date>()

  const [count, setCount] = React.useState<number>(0)

  const [inputType, setInputType] = React.useState('text')

  const [curriculum, setCurriculum] = React.useState<string>('')

  const handleIncrease = () => {
    setCount(count < 10 ? count + 1 : 10)
  }

  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : 0) // 최소 0명으로 제한
  }

  const handleFocus = () => {
    setInputType('time')
  }

  // useEffect to log startdate when it changes
  React.useEffect(() => {
    if (startdate) {
      console.log('선택한 시작일:', format(startdate, 'yyyy년 MM월 dd일'))
    }
  }, [startdate])

  // useEffect to log startdate when it changes
  React.useEffect(() => {
    if (enddate) {
      console.log('선택한 종료일:', format(enddate, 'yyyy년 MM월 dd일'))
    }
  }, [enddate])

  const handleNext = () => {
    onNext(curriculum)
  }

  return (
    <>
      <section className="flex min-h-dvh flex-col bg-white pb-8">
        <StudyHeaderProgress progressNum={2} href="create" />
        <div className="fixed mt-[60px]">
          <CreateProgress currentProgress={100} />
        </div>
        <div className="space-y-0 px-3">
          <div className="space-y-2 pt-[100px]">
            <h2 className="font-bold">진행방식과 커리큘럼</h2>
            <Textarea
              placeholder="스터디의 진행방식과 커리큘럼을 소개해주세요"
              className="resize-none border-gray-400"
              rows={6}
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
            />
          </div>

          <div className="flex flex-row space-x-3 pt-10">
            <div className="items-center">
              <h2 className="font-bold leading-3">시작일</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                      !startdate && 'text-muted-foreground',
                    )}
                  >
                    {startdate ? (
                      format(startdate, 'yyyy년 MM월 dd일')
                    ) : (
                      <span className="text-gray-400">날짜 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    selected={startdate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="items-center">
              <h2 className="font-bold leading-3">종료일</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                      !enddate && 'text-muted-foreground',
                    )}
                  >
                    {enddate ? (
                      format(enddate, 'yyyy년 MM월 dd일')
                    ) : (
                      <span className="text-gray-400">날짜 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    selected={enddate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <p className="pt-2 text-xs text-meetie-blue-4">
            스터디 시작일이 모집 마감일로 설정됩니다
          </p>
          <div className="flex flex-row space-x-3 pt-10">
            <div className="items-center">
              <h2 className="font-bold leading-3">정기일정</h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                      !regulardate && 'text-muted-foreground',
                    )}
                  >
                    {regulardate ? (
                      format(regulardate, 'yyyy년 MM월 dd일')
                    ) : (
                      <span className="text-gray-400">날짜 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    selected={regulardate}
                    onSelect={setRegularDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="items-center">
              <h2 className="invisible font-bold leading-3">정기일정</h2>
              <Input
                placeholder="시간 선택"
                className="required mr-0 mt-3 h-[55px] w-[170px] border-gray-400 text-base focus:outline-none"
                onFocus={handleFocus}
                type={inputType}
              />
            </div>
          </div>

          <div className="pt-10">
            <h2 className="font-bold leading-3">스터디 모집 인원</h2>
            <div className="mx-auto mt-3 flex flex-row space-x-[100px]">
              <div>
                <Button onClick={handleDecrease} className="w-[50px] text-base">
                  -
                </Button>
              </div>
              <div className="my-3 text-lg">
                <span style={{ margin: '0 10px' }}>{count}</span>
              </div>
              <div>
                <Button onClick={handleIncrease} className="w-[50px] text-base">
                  +
                </Button>
              </div>
            </div>
          </div>

          <p className="pt-2 text-xs text-meetie-blue-4">
            4~8명이 적당한 스터디 인원이에요
          </p>

          <div className="pt-10">
            <h2 className="font-bold leading-3">관련 태그</h2>
            <div className="grid grid-cols-4 gap-1 pt-4 text-xs">
              <Chip>온라인</Chip>
              <Chip>오프라인</Chip>
              <Chip>프론트엔드</Chip>
              <Chip>백엔드</Chip>
              <Chip>UX/UI</Chip>
              <Chip>PM</Chip>
              <Chip>어플</Chip>
              <Chip>웹</Chip>
              <Chip className="w-[120px]">사이드 프로젝트</Chip>
            </div>
          </div>
          <p className="pt-2 text-xs text-meetie-blue-4">
            최대 4개까지 선택이 가능합니다
          </p>
          <div className="space-y-2 pt-40"></div>
        </div>

        <div className="fixed bottom-8 flex w-[375px] items-center justify-center space-x-2 bg-white px-[20px]">
          <Link href="create">
            <Button
              variant="secondary"
              className="w-[110px] flex-initial border-[1px] border-gray-200"
            >
              이전
            </Button>
          </Link>

          <Button
            className="w-[220px] flex-initial border-[1px] border-solid"
            onClick={handleNext}
          >
            작성완료
          </Button>

          {/* 비활성화 상태일때 */}
          {/* <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
      내용이 부족해요!
    </Button> */}
        </div>
      </section>
    </>
  )
}