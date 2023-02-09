import httpService from './http-service'

class HumidityService {
  _getSeed(){
    return "seed"
  }
  getHumidity(){
    return httpService.get('http://109.215.14.143:3001/v1/humidity/',{
      params: {
        seed: this._getSeed(),
      },
    })
  }
}

export default new HumidityService()