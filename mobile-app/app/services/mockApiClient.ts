import { Teams } from '../(domain)/types'
import { teams } from '../(util)/fixtures'
type ApiClient = {
  getTeams: () => Promise<Array<Teams>>
}

export const apiclient: ApiClient = {
  getTeams: () => {
    throw new Error('Not implemented')
  },
}

export const mockApiClient: ApiClient = {
  getTeams: async () => teams,
}
