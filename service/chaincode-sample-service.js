const ChaincodeService = require('../helper/chaincode-service')
const logger = require('log4js').getLogger('chaincode-sample-service')

class ChaincodeSampleService extends ChaincodeService {

  async invokeSampleCCFunc(payload) {
    const params = [JSON.stringify(payload)]
    logger.info(`params ${params}`)
    let result = await this.invoke('sampleCC.invokeSampleCCFunc', params)
    return result
  }

  async querySampleCCFunc() {
    let result = await this.query('sampleCC.querySampleCCFunc', [])
    return JSON.parse(result[0])
  }
}

module.exports = ChaincodeSampleService 