class Contacts {
  constructor() {
    this.contacts = [];
  }

  getAllContacts() {
    return this.contacts;
  }

  getAllContactsBuId(id) {
    return this.contacts.find((contacts) => contact.id == id);
  }

  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }

  updateContactById(id, updatedContact) {
    let index = this.contact.findIndex((contact) => contact.id == id);

    this.contacts[index.name] =
      updatedContact.name || this.contacts[index].name;
    this.contacts[index.phone] =
      updatedContact.phone || this.contacts[index].phone;
    this.contacts[index.email] =
      updatedContact.email || this.contacts[index].email;
    return this.contacts[index];
  }

  deleteContactById(id) {
    let index = this.contact.findIndex((contact) => contact.id == id);
    let deletedObj = this.contacts[index];
    this.contacts = this.contact.filter((contact) => contact.id !== id);
    return deletedObj;
  }
}

module.exports = new Contacts();
