import { getContactsFromDb } from '../utils/db.js';

export const countContacts = async () => {
  try {
    const contacts = await getContactsFromDb();
    return contacts.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
