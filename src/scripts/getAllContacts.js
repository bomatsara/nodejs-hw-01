import { getContactsFromDb } from '../utils/db.js';

export const getAllContacts = async () => {
  try {
    return await getContactsFromDb();
  } catch (error) {
    return error;
  }
};

console.log(await getAllContacts());
