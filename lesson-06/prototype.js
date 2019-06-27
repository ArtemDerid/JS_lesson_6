function Robot() {
	var self = this;
	var speech = '';
}

Robot.prototype.work = function() {
	console.log(this.speech);
}

Robot.prototype.setSpeech = function(value) {
	this.speech = value;
}

function CoffeeRobot() {
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

function RobotDancer() {
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker() {
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var r = new Robot();
r.setSpeech('Я Robot – я просто працюю');
var cr = new CoffeeRobot();
cr.setSpeech('Я CoffeRobot – я варю каву');
var rd = new RobotDancer();
rd.setSpeech('Я RobotDancer – я просто танцюю');
var rc = new RobotCoocker();
rc.setSpeech('Я RobotCoocker – я просто готую');

var arrayOfRobots = [ r, cr, rd, rc ];

for (var i = 0; i < arrayOfRobots.length; i++) {
	arrayOfRobots[i].work();
}
