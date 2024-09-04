import { useState } from 'react'
import { postOnboarding, testPost } from '~/apis/onboarding-rls'

const useOnboardingController = () => {
  const [user, setUser] = useState<any[]>([])

  const onPostProfiles = async ({
    job,
    purpose,
    personality,
    period,
  }: {
    job: string
    purpose: string[]
    personality: string[]
    period: string | null
  }) => {
    try {
      const result = await postOnboarding({ job, purpose, personality, period })
    } catch (error) {
      console.error(error)
    }
  }

  return { onPostProfiles }
}

export default useOnboardingController