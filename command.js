var Command = {};
var Contact = require('./contact');

Command.getOperation = function(){
	return process.argv[2];
}

Command.getOperationData = function(){
	return process.argv[3];
}

Command.add = function(done) {
	console.log(Command.getOperationData());
	var newContact = Contact.createContact(Command.getOperationData());
	console.log(newContact);
	Contact.saveContact(newContact, done);
//	if (err){return done(err)};
};

Command.find = function(done) {
	var name = this.getOperationData();
	
	var foundContacts = Contact.findContacts(name);
	
	return foundContacts;
};

module.exports = Command;