var Contact = {};

Contact.parseName = function(str){
	var part = str.split(','); //array
	return part[0];
};

Contact.parseNumber = function(str){
	var part = str.split(',');
	return part[1].trim();
};

Contact.createContact = function(str){
	var contactObj = {name: this.parseName(str),
									 	number: this.parseNumber(str)};
	return contactObj;
};

Contact.loadContacts = function (done){
	var jsonfile = require('jsonfile');
	jsonfile.readFile('data.json', function(err,data){
		done(err, data);
	});
};

Contact.saveContacts = function(contacts, done) {
		var jsonfile = require('jsonfile');
	 	jsonfile.writeFile('data.json',contacts,done);
};

Contact.saveContact = function(contact, done) {
  var _this = this;
	
	this.loadContacts(function(err, contacts){
		if (err){return done(err)};
		
		contacts.push(contact);
		_this.saveContacts(contacts, done);
	});
};

Contact.findContacts = function(name, done) {
	
  this.loadContacts(function(err, contacts){
		if (err){return done(err)};
		
		foundContacts = contacts.filter(function(value){
			return value.name === name;
		});
		console.log(foundContacts);
		done(err, foundContacts);
	});
}

module.exports = Contact;