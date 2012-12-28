var User = function(options) {

	this.attributes = {
		health: options.health || 10,
		stamina: options.stamina || 10,
		XP: options.XP || 0,
		weapon: options.weapon || 'Axe',
		name: options.name || 'Player',
		opponent: options.opponent || null
	};
	this.initialize()
}

User.prototype.initialize = function() {
	_.bindAll(this)
	this.template = _.template($('.user-template').html());
	this.$el = $('<div class="player">');
	
}

User.prototype.attackOpponent = function(e) {
	e.preventDefault();
	this.attack(users[this.attributes.opponent])
	this.render();
	users[this.attributes.opponent].render();

}

User.prototype.attack = function(user) {
	this.drain(weapons[this.attributes.weapon].drain);
	user.takeDamage(weapons[this.attributes.weapon].damage)

}

User.prototype.drain = function(points) {
	
	if (points > this.attributes.stamina) {
		points = this.attributes.stamina;
	}
	this.attributes.stamina -= points;
}

User.prototype.takeDamage = function(points) {

	this.attributes.health -= points;
}

User.prototype.render = function() {
	this.$el.html(this.template(this.attributes));
	this.$el.find('.attack').click(this.attackOpponent);
	return this;
}