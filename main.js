const button = document.getElementById("random");
let data = [
  {
    number: 1,
    Name: "nature picture ",
    img: " https://picsum.photos/200/300",
  },
  {
    number: 2,
    Name: "nature images",
    img: "https://picsum.photos/200/300",
  },
  {
    number: 3,
    Name: "nature img",
    img: "https://picsum.photos/200/300",
  },
  {
    number: 4,
    Name: "images",
    img: "https://picsum.photos/200/300",
  },
  {
    number: 5,
    Name: "mountain",
    img: "https://picsum.photos/200/300",
  },
];
button.addEventListener("click", function () {
  function randomobj() {
    const allbody = document.body;
    const randomarr = Math.floor(Math.random() * data.length);
    const objitem = data[randomarr];
    const objDiv = document.createElement("div");
    objDiv.innerHTML =
      "<h3>" +
      objitem.Name +
      "</h3><img src='" +
      objitem.img +
      "' alt='" +
      objitem.Name +
      "'>";
    allbody.appendChild(objDiv);
  }
  button = randomobj();
});