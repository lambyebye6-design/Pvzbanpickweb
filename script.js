function createRoom() {
  const roomId = 'room-' + Math.random().toString(36).substring(2, 8);
  window.location.href = `room.html?room=${roomId}`;
}

function joinRoom() {
  const roomId = document.getElementById("roomId").value;
  if (roomId.trim() !== "") {
    window.location.href = `room.html?room=${roomId}`;
  }
}
