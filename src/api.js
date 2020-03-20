import Chance from "chance"
import random from "lodash.random"

/**
 * Do not edit this file.
 */
class MessageGenerator {
  constructor(options) {
    this.messageCallback = options.messageCallback
    this.stopGeneration = false
    this.chance = new Chance()
  }

  stop() {
    this.stopGeneration = true
  }

  start() {
    this.stopGeneration = false
    this.generate()
  }

  isStarted() {
    return !this.stopGeneration
  }

  /**
   * priority from 1 to 3, 1 = error, 2 = warning, 3 = info
   * */
  generate() {
    if (this.stopGeneration) {
      return
    }
    const message = this.chance.sentence({ words: 3 })
    const id = this.chance.guid()
    const priority = random(1, 3)
    const nextInMS = random(500, 3000)
    this.messageCallback({
      message,
      priority,
      id
    })
    setTimeout(() => {
      this.generate()
    }, nextInMS)
  }
}

export default MessageGenerator
