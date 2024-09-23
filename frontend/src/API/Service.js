import axios from 'axios'

export default class Service {
  static async getAllCards() {
    const response = await axios.get('/cart')
    return response.data
  }

  static async getByTitle(title) {
    const response = await axios.get('/cart/' + title)
    return response.data
  }
}
