    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
    import { 
      getFirestore, 
      collection, 
      addDoc, 
      getDocs, 
      onSnapshot, 
      deleteDoc, 
      doc, 
      getDoc, 
      updateDoc 
    } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAQfA5O6MS4-NuVK2fJ6XTaWBAjTTmTshw",
      authDomain: "fir-crud-457db.firebaseapp.com",
      projectId: "fir-crud-457db",
      storageBucket: "fir-crud-457db.appspot.com",
      messagingSenderId: "148115036421",
      appId: "1:148115036421:web:d8fce2086969eec00c3f6c"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    export const saveTask = (title, description) => 
      addDoc(collection(db, 'tasks'), {title, description});
    
    export const getTasks = () => 
      getDocs(collection(db, 'tasks'));
    
    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

    export const deleteTask = (id) => deleteDoc (doc(db, 'tasks', id))

    export const getTask = (id) => getDoc (doc(db, 'tasks', id))

    export const updateTask = (id, newFields) => updateDoc (doc(db, 'tasks', id), newFields)

    
