var roxyLayer = {
	buyables: [
		{
			count: 0,
			title() { return "roxy upgrade"; },
			description() { return "+1 click power"; },
			cost() { return parseInt(25 * 1.5**this.count); },
			effect() { return this.count; },
			image() { return "images/roxy.png"; },
			buy() {
				clicks -= this.cost();
				this.count++;
			}
		},
		{
			count: 0,
			title() { return "roxy upgrade TWO"; },
			description() { return "+1 click per sec"; },
			cost() { return parseInt(100 * 1.4**this.count); },
			effect() { return this.count; },
			image() { return "images/roxy.png"; },
			buy() {
				clicks -= this.cost();
				this.count++;
			}
		}
	]
}