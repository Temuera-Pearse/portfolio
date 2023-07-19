import request from 'superagent'

const rootUrl = '/api/v1'

export function getTem(): Promise<string[]> {
  return request.get(rootUrl + '/Tem').then((res) => {
    return res.body.fruits
  })
}
