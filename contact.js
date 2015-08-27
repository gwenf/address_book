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

module.exports = Contact;