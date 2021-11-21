class Contacts {
  constructor() {
    this.contacts = [];
  }

  getAllContacts() {
    return this.contacts;
  }

  getAllContactById(id) {
    return this.contacts.find((contact) => contact.id == id);
  }

  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }

  updateContactById(id, updatedContact) {
    let index = this.contacts.findIndex((contact) => contact.id == id);

    this.contacts[index].name =
      updatedContact.name || this.contacts[index].name;
    this.contacts[index].phone =
      updatedContact.phone || this.contacts[index].phone;
    this.contacts[index].email =
      updatedContact.email || this.contacts[index].email;
    return this.contacts[index];
  }

  deleteContactById(id) {
    let index = this.contacts.findIndex((contacts) => contacts.id == id);
    let deletedObj = this.contacts[index];
    this.contacts = this.contacts.filter((contacts) => contacts.id !== id);
    return deletedObj;
  }
}

module.exports = new Contacts();