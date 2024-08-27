'use client'

import { useFunnel } from '@use-funnel/browser'
import ApprovalPage from '../approval/page'
import Step1Input from '~/components/studycreate/step-first-input'
import Step2Input from '~/components/studycreate/step-second-input'
import { useEffect } from 'react'
import TotalInput from '~/components/studycreate/step-total'

type Step1Data = {
  // recruit_type?: string[]
  title?: string
  goal?: string
  info?: string
  curriculum?: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  // membernum?: number
  // tags?: string[]
}

type Step2Data = {
  // recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum?: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  // membernum?: number
  // tags?: string[]
}

type TotalData = {
  // recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  // membernum?: number
  // tags?: string[]
}

export default function CreateStudyPage() {
  const funnel = useFunnel<{
    Step1Data: Step1Data
    Step2Data: Step2Data
    TotalData: TotalData
  }>({
    id: 'input-funnel',
    initial: {
      step: 'Step1Data',
      context: {},
    },
  })
  return (
    <funnel.Render
      Step1Data={({ history }) => (
        <Step1Input
          onNext={({ title, goal, info }) => {
            const step1Data = { title, goal, info }
            console.log('Step 1 데이터:', step1Data)
            history.push('Step2Data', { title, goal, info })
          }}
        />
      )}
      Step2Data={({ context, history }) => (
        <Step2Input
          onNext={(curriculum) => {
            const step2Data = { ...context, curriculum }
            console.log('Step 2 데이터:', step2Data)
            history.push('TotalData', step2Data)
          }}
        />
      )}
      TotalData={({ context }) => (
        <TotalInput
          title={context.title}
          goal={context.goal}
          info={context.info}
          curriculum={context.curriculum}
        />
      )}
    />
  )
}
