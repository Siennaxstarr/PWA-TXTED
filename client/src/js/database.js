import { openDB } from 'idb';

const initdb = async () =>
//creating jate store
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
//method to update jate content
export const putDb = async (content) => {
  console.log('PUT to the database');
  //opening the database store
  const database = await openDB('jate', 1);
  //allowing readwrite permission in jate store 
  const tx = database.transaction('jate', 'readwrite');
  //creating a reference to the store to do something later
  const store = tx.objectStore('jate');
  //creating a request to store to keep state of txt editor
  const request = store.put({ id: 0, value: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
//method to grab jate content
export const getDb = async () => {
  console.log('GET all from the database');
//
  const todosDb = await openDB('jate', 1);
  const tx = todosDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(0);
  const result = await request;
  console.log('result.value', result.value);
  return result.value; 
};


initdb();
