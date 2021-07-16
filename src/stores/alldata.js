import Dexie from "dexie"
import { writable } from "svelte/store"

export const allcards = writable([])
export const onecard = writable({})

// allcards.update(() => {
// 	// dexie read
// })

// onecard.


/**
 * Dexie 
 */

export const database = new Dexie('megan');
database.version(1).stores({
	card: `++id,title,body`,
});

database.insert = (pageInfo) => {
	return database.pages.put(pageInfo)
		.catch((err) => {
			console.log(">>> DATABASE 'insert' error: ", err);
		});
}
database.update = (pageInfo) => {
	database.pages.put(pageInfo)
}
database.get = (id) => {
	return database.pages.get(id)
}
database.getall = () => {
	return database.pages.where("id").above(-1)/* .reverse() */.toArray()
		.then(() => console.log(`getall success`,))
		.catch((err) => {
			console.log(">>> DATABASE 'getall' error: ", err);
		});

}