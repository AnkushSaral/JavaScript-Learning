// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

const localStorageManager = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

localStorageManager("Note", {
  1: "Hello",
  2: "My Hobby",
});


