const All = document.getElementById("container");
const PREV = document.querySelector(".prev");
const NEXT = document.querySelector(".next");
const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const Rotate = document.querySelector("#pic");
const NAME = document.getElementById("name");
const ALLMUSIC = document.querySelectorAll(".allmusic audio");
const CONTROL = document.getElementById("cont");
const READING = document.getElementById("start");
const FINAL = document.getElementById("end");
const MOVE = document.getElementById("move");
var TimeStamp = function (time) {
  time = time.toFixed(2);
  let s = new String(time).split("");
  Newtime = "";
  time = s.map((item) => {
    if (item == ".") {
      item = ":";
    }
    Newtime += item;
  });
  return Newtime;
};
const MISC = [
  ["music", "Raining in Paris"],
  ["music1", "Heavenly Aakash"],
  ["music2", "Raining in Yokohama"],
  ["music", "Raining in Paris"],
];
Rotate.setAttribute("src", "B4.jpeg");
READING.innerHTML = "00:00";
document.getElementById("music").onloadeddata = () => {
  FINAL.innerHTML = TimeStamp(
    document.getElementById(`${MISC[0][0]}`).duration / 60
  );
};
const arr = ["B1.jpg", "B2.jpg", "B3.png", "b4.jpeg"];
let index = (ROBOT = 0);
PREV.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = 0;
  }
  ROBOT = index;
  ALLMUSIC.forEach((item) => {
    if (item.id == MISC[ROBOT + 1][0]) {
      item.pause();
      PLAY.style.display = "inline";
      PAUSE.style.display = "none";
    }
    if (item.id == MISC[ROBOT][0]) {
      let duration = item.duration;
      FINAL.innerHTML = TimeStamp(duration / 60);
      READING.innerHTML = "00:00";
    }
  });
  Rotate.setAttribute("src", `${arr[index]}`);
  Rotate.classList.remove("sk");
  NAME.innerHTML = MISC[ROBOT][1];
});
NEXT.addEventListener("click", () => {
  if (index < arr.length - 1) {
    index++;
  } else {
    index = 1;
  }
  ROBOT = index;
  ALLMUSIC.forEach((item) => {
    if (item.id == MISC[ROBOT - 1][0]) {
      item.pause();
      PLAY.style.display = "inline";
      PAUSE.style.display = "none";
    }
    if (item.id == MISC[ROBOT][0]) {
      let duration = item.duration;
      FINAL.innerHTML = TimeStamp(duration / 60);
      READING.innerHTML = "00:00";
    }
  });
  Rotate.setAttribute("src", `${arr[index]}`);
  Rotate.classList.remove("sk");
  NAME.innerHTML = MISC[ROBOT][1];
});
PLAY.addEventListener("click", () => {
  Rotate.classList.add("sk");
  localStorage.setItem("clear", "notdone");
  PLAY.style.display = "none";
  PAUSE.style.display = "inline";
  ALLMUSIC.forEach((item) => {
    if (item.id == MISC[ROBOT][0]) {
      item.play();
      item.volume = 0.1;
    }
  });
});

PAUSE.addEventListener("click", () => {
  Rotate.classList.remove("sk");
  PLAY.style.display = "inline";
  PAUSE.style.display = "none";
  MOVE.style.width = i + "px";
  ALLMUSIC.forEach((item) => {
    if (item.play()) {
      item.pause();
    }
  });
});
