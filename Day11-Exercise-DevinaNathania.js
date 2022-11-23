class QueueFood {
  #container = [];

  enQueue(element) {
    return this.#container.push(element);
  }

  deQueue() {
    return this.#container.shift();
  }

  async executeOneOrder(nama, i, limit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(`QUEUE-${i + 1} ${nama} DONE process => ${limit}`));
      }, limit);
    });
  }

  executeOrder() {
    for (let i = 0; i < this.#container.length; i++) {
      let limit = Math.floor(Math.random() * 10000);
      this.executeOneOrder(this.#container[i], i, limit);
    }

    // for (let i = 0; i < this.#container.length; i++) {
    //   let a = new Promise((resolve, reject) => {
    //     let progress = 0;
    //     let limit = Math.floor(Math.random() * 10000);
    //     while (progress < limit) {
    //       progress++;
    //     }
    //     if (progress == limit) {
    //       resolve(
    //         console.log(
    //           `QUEUE-${i + 1} ${this.#container[i]} DONE process => ${limit}`
    //         )
    //       );
    //     } else {
    //       reject(`QUEUE FAILED`);
    //     }
    //   });
    //   await a;
    // }

    // return this.#container;
  }
}

module.exports = QueueFood;
