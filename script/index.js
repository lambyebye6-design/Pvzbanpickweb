import { db, ref, set } from "./firebase.js";

document.getElementById("createRoom").addEventListener("click", () => {
  const roomId = Math.random().toString(36).substring(2, 7); // mã ngẫu nhiên
  set(ref(db, "rooms/" + roomId), {
    createdAt: Date.now()
  }).then(() => {
    window.location.href = `room.html?room=${roomId}`;
  });
});

document.getElementById("joinRoomBtn").addEventListener("click", () => {
  const roomId = document.getElementById("joinRoomId").value.trim();
  if (roomId) {
    window.location.href = `room.html?room=${roomId}`;
  }
});
