import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContentInDb } from '../utils/db.js';

export const addOneContact = async () => {
  try {
    const contactsData = Array.from({ length: 1 }, createFakeContact);
    const response = await writeContentInDb(contactsData);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

await addOneContact();
