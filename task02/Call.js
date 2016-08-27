/**
 * 
 */

function Call (caller, receiver, duration) {
	var _priceForAMinute = 0.39;
	var _caller = caller;
	var _receiver = receiver;
	var _duration = duration;
	
	this.getPriceForAMinute = function () {
		return _priceForAMinute;
	}
	
	this.getCaller = function () {
		return _caller;
	}
	
	this.setCaller = function (newCaller) {
		_caller = caller;
	}
	this.getReceiver = function () {
		return _receiver;
	}
	this.setReceiver = function (receiver) {
		_receiver = reciver;
	}
	
	this.getDuration = function () {
		return _duration;
	}
	
	this.setDuration = function (duration) {
		if((duration > 0) && (duration < 120)) {
		_duration = duration;
		}
	}
}