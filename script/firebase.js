// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Cấu hình Firebase (dán thông tin của bạn vào đây)
const firebaseConfig = {
  apiKey: "AIza...dán vào đây",
  authDomain: "tên-project.firebaseapp.com",
  databaseURL: "https://tên-project.firebaseio.com",
  projectId: "tên-project",
  storageBucket: "tên-project.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, onValue, update };
