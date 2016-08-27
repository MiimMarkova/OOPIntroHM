/**
 * 
 */

var computer = new Computer (2014, 1000, false, 1000, 300, 'Windows7');
computer.changeOperationSystem('Windows10');

var laptop = new Computer (2015, 1500, true, 1000, 500, 'Windows10');
laptop.useMemory(520);

console.log(computer.getInfo());
console.log(laptop.getInfo());