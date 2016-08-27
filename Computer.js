/**
 * 
 */

function Computer (year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	var _year = year;
	var _price = price;
	var _isNotebook = isNotebook;
	var _hardDiskMemory = hardDiskMemory;
	var _freeMemory = freeMemory;
	var _operationSystem = operationSystem;
	
	this.getOpretaionSystem = function () {
		return _operationSystem;
	}
	
	this.setOperationSystem = function (newOperationSystem) {
		_operationSystem = newOperationSystem;
	}
	
	this.getFreeMemory = function () {
		return _freeMemory;
	}
	
	this.setFreeMemory = function (newFreeMemory) {
		_freeMemory = newFreeMemory;
	}
	this.getInfo = function () {
		return 'Year: ' + _year + ', Price: ' + _price +
				', Is it laptop: ' + _isNotebook + ', hardDiskMemory' + _hardDiskMemory +
				', Free memory: ' + _freeMemory + ', Operation System: ' + _operationSystem;
	}
}


Computer.prototype.changeOperationSystem = function (newOperationSystem) {
	return this.setOperationSystem(newOperationSystem);
}

Computer.prototype.useMemory = function (memory) {
	if (this.getFreeMemory() < memory) {
		console.log('There isn`t enough memory space');
	} else {
		this.setFreeMemory(this.getFreeMemory() - memory);
	}

}