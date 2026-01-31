function login() {
  window.location.href = "home.html";
}

const rooms = [
  {
    name: "Phòng Quận 1 - Full nội thất",
    district: "1",
    price: 3000000,
    service: "Điện 3k/kWh • Nước 20k",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    name: "Phòng Quận 7 - Gần ĐH Tôn Đức Thắng",
    district: "7",
    price: 2500000,
    service: "Điện 3k/kWh • Nước 18k",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  },
  {
    name: "Phòng Bình Thạnh - An ninh",
    district: "Bình Thạnh",
    price: 2800000,
    service: "Điện 3.5k/kWh • Nước 20k",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

function displayRooms(data) {
  const list = document.getElementById("roomList");
  list.innerHTML = "";

  data.forEach((room) => {
    list.innerHTML += `
            <div class="room">
                <img src="${room.image}">
                <div class="room-content">
                    <h3>${room.name}</h3>
                    <p><b>Giá:</b> ${room.price.toLocaleString()} VNĐ</p>
                    <p>${room.service}</p>
                </div>
            </div>
        `;
  });
}

function filterRoom() {
  const district = document.getElementById("district").value;
  const maxPrice = document.getElementById("maxPrice").value;

  let result = rooms.filter(
    (r) =>
      (district === "" || r.district === district) &&
      (maxPrice === "" || r.price <= maxPrice),
  );

  displayRooms(result);
}

if (document.getElementById("roomList")) {
  displayRooms(rooms);
}
