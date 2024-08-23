import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContentInDb } from '../utils/db.js';

const generateContacts = async (number) => {
  try {
    const contactsData = Array.from({ length: number }, createFakeContact);
    const response = await writeContentInDb(contactsData);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);
