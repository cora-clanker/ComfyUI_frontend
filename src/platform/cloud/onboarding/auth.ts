import { isEmpty } from 'es-toolkit/compat'

import { api } from '@/scripts/api'

interface UserCloudStatus {
  status: 'active'
}

const ONBOARDING_SURVEY_KEY = 'onboarding_survey'

export async function getUserCloudStatus(): Promise<UserCloudStatus> {
  const response = await api.fetchApi('/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error(`Failed to get user: ${response.statusText}`)
  }

  return response.json()
}

export async function getSurveyCompletedStatus(): Promise<boolean> {
  try {
    const response = await api.fetchApi(`/settings/${ONBOARDING_SURVEY_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      return false
    }
    const data = await response.json()
    return !isEmpty(data.value)
  } catch {
    return false
  }
}

export async function submitSurvey(
  survey: Record<string, unknown>
): Promise<void> {
  const response = await api.fetchApi('/settings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ [ONBOARDING_SURVEY_KEY]: survey })
  })

  if (!response.ok) {
    throw new Error(`Failed to submit survey: ${response.statusText}`)
  }
}
