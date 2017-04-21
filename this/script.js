const Portland = {
	bridges: 12,
	airport: 1,
	soccerTeams: 1,
	logNumberofBridges: () => {
		console.log('There are ' + this.bridges + ' bridges in Portland!');
	}
}

const logTeams = () => console.log(this.soccerTeams);

Portland.foo = logTeams;
Portland.foo();
Portland.logNumberofBridges();