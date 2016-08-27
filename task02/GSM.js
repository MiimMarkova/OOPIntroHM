/**
 * model – модел на телефона
hasSimCard – дали в телефона е заредена SIM карта
simMobileNumber – номер на SIM картата(телефонен номер), ако е
заредена такава.
outgoingCallsDuration – общото време (в минути) на изходящите
повиквания
lastIncomingCall – последното входящо повикване
lastOutgoingCall – последното изходящо повикване
 */

function GSM (model) {
	
	var _model = model;
	var _hasSimCard = false;
	var _simMobileNumber = 0;
	var _outgoingCalls = 0;
	var _lastIncomingCall = 0;
	var _lastOutgoingCall = 0;
	
	this.getModel = function () {
		return _model;
	}
	
	this.getHasSimCard = function () {
		return _hasSimCard;
	}
	
	this.setHasSimCard = function (hasSimCard) {
		_hasSimCard = hasSimCard;
	}
	this.getSimMobileNumber = function () {
		return _simMobileNumber;
	}
	
	this.setSimMobileNumber = function (simMobileNumber) {
		_simMobileNumber = simMobileNumber;
	}
	this.getOutgoingCalls = function () {
		return _outgoingCalls;
	}
	this.setOutgoingCalls = function (OutgoingCalls) {
		_outgoingCalls = OutgoingCalls;
	}
	this.getLastIncomingCall = function () {
		return _lastIncomingCall;
	}
	
	this.setLastIncomingCall = function (LastIncomingCall) {
		_lastIncomingCall = LastIncomingCall;
	}
	this.getLastOutgoingCall = function () {
		return _lastOutgoingCall;
	}
	
	this.setLastOutgoingCall = function (LastOutgoingCall) {
		_lastOutgoingCall = LastOutgoingCall;
	}
}
//function insertSimCard(simMobileNumber)
GSM.prototype.insertSimCard = function(simMobileNumber) {
	if ((simMobileNumber.lenght != 10) && (simMobileNumber.slice(0, 2) != '08') {
		console.log(simMobileNumber.slice(0, 2));
		throw new Error('This is not a valid Number!');
	} else {
		this.setHasSimCard(true);
		this.setSimMobileNumber(simMobileNumber);
	}
}

GSM.prototype.removeSimCard = function () {
	this.setHasSimCard(false);
	this.setSimMobileNumber(0);
}

GSM.prototype.call(receiver, duration) {
	if (duration < 0 || duration > 120) {
		throw new Error ('Invalid call duration.');
	}
	if (receiver == this) {
		throw new Error('You are calling yourself.');
	}
	
 }
