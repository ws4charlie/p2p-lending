import Web3 from 'web3'

export const getWeb3 = (function() {
  let instance

  function initialize() {
    if (window.ethereum) {
      console.log("currentProvider-1", window.ethereum)
      // eslint-disable-next-line no-undef
      return new Web3(ethereum)
    } else if (typeof window.web3 !== 'undefined') {
      console.log("currentProvide2", window.web3.currentProvider)
      return new Web3(window.web3.currentProvider)
    } else {
        console.log("currentProvide-else")
      return null
    }
  }

  return {
    get: async function() {
      if (!instance) {
        instance = initialize()
        if (instance) {
            console.log("return")
          // eslint-disable-next-line no-undef
          await ethereum.enable()
        }
      }
      return instance
    },
  }
})()
