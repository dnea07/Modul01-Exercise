const QueueFood = require("./Day11-Exercise-DevinaNathania");

const queue = new QueueFood();
queue.enQueue("Nasi Padang");
queue.enQueue("Nasi Rames");
queue.enQueue("Gule Ayam");
queue.enQueue("Sate Ayam");
queue.enQueue("Sate");

queue.executeOrder();
