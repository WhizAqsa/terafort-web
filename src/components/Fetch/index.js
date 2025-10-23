import { API_CONSTANTS } from '../API_CONSTANTS'

export async function postData(url, data) {
  const response = await fetch(`${API_CONSTANTS.BASE_URL}/${url}`, {
    method: 'POST',
    body: JSON.stringify({ data: data }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json()
}
