function Robot() {
	var self = this;
	var speech = '';
	self.work = function() {
		console.log(self.speech);
	}

	self.setSpeech = function(value) {
		self.speech = value;
	}
}

function CoffeeRobot() {
	Robot.call(this);
}

function RobotDancer() {
	Robot.call(this);
}

function RobotCoocker() {
	Robot.call(this);
}

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
