const ChaincodeService = require('../helper/chaincode-service')
const logger = require('log4js').getLogger('chaincode-sample-service')

class ChaincodeSampleService extends ChaincodeService {

  async invokeSampleCCFunc(payload) {
    const params = [JSON.stringify(payload)]
    logger.info(`params ${params}`)
    return await this.invoke('sampleCC.invokeSampleCCFunc', params)
  }

//   async invokeSampleCCFunc() {
//     return await this.invoke('sampleCC.invokeSampleCCFunc', [])
//   }

  async querySampleCCFunc(payload) {
    const params = [JSON.stringify(payload)]
    logger.info(`params ${params}`)
    return await this.query('sampleCC.querySampleCCFunc', params)
  }

//   async querySampleCCFunc() {
//     return await this.query('sampleCC.querySampleCCFunc', [])
//   }
}

module.exports = ChaincodeSampleService 