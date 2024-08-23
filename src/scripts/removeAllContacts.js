import { clearDb } from '../utils/db.js';

export const removeAllContacts = async () => {
  try {
    const response = await clearDb();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

await removeAllContacts();
