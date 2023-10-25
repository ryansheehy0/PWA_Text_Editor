import { openDB } from 'idb';

const initdb = async () =>
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
export const putDb = async (content) => {
  // Open db
  const db = await openDB("jate", 1)
  try{
    // Make transaction
    const transaction = db.transaction("jate", "readwrite")
    // Get object store
    const jate = transaction.objectStore("jate")
    // Put content in jate
    await jate.put({id: 1, content})
  }catch(error){
    console.error(`Error with getDB: ${error}`)
  }finally{
    db.close()
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open db
  const db = await openDB("jate", 1)
  try{
    // Make transaction
    const transaction = db.transaction("jate")
    // Get object store
    const jate = transaction.objectStore("jate")
    // get data
    const data = await jate.getAll()
    // return the data
    return data[0].content
  }catch(error){
    console.error(`Error with getDB: ${error}`)
  }finally{
    db.close()
  }
}

initdb();