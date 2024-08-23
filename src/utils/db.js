import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const checkDb = async () => {
  try {
    await fs.access(PATH_DB);
  } catch (error) {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
  }
};

export const getContactsFromDb = async () => {
  try {
    await checkDb();
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return error;
  }
};

export const writeContentInDb = async (data) => {
  try {
    const jsonData = await getContactsFromDb();
    const updatedData = [...jsonData, ...data];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2), 'utf-8');
    return `Data has been successfully added to ${PATH_DB}`;
  } catch (error) {
    return error;
  }
};

export const clearDb = async () => {
  try {
    await checkDb();
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    return 'Db has been cleared';
  } catch (error) {
    return error;
  }
};

export const clearLastContactInDb = async () => {
  try {
    await checkDb();
    const jsonData = await getContactsFromDb();

    if (jsonData.length < 1) {
      return 'Db is empty';
    }

    jsonData.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(jsonData, null, 2), 'utf-8');
    return 'The last element has been deleted';
  } catch (error) {
    return error;
  }
};
