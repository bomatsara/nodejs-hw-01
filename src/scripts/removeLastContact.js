import { clearLastContactInDb } from '../utils/db.js';

export const removeLastContact = async () => {
  try {
    const response = await clearLastContactInDb();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

await removeLastContact();
