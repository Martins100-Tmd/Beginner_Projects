const LIGHT = document.getElementById("light");
const HTML = document.querySelector("html");
const BODY = document.querySelector("body");
if (
  localStorage.length !== 0 &&
  localStorage.getItem("theme") == "bg-slate-900"
) {
  BODY.classList.add(localStorage.getItem("theme"));
  HTML.classList.add(localStorage.getItem("text"));
}
function Theme() {
  if (
    localStorage.getItem("theme") == null ||
    localStorage.getItem("theme") !== "bg-slate-900"
  ) {
    localStorage.setItem("theme", "bg-slate-900");
    localStorage.setItem("text", "text-white");
  } else {
    localStorage.setItem("theme", "bg-gray-50");
    localStorage.setItem("text", "text-black");
  }
  setTimeout(() => {
    window.location.reload();
  }, 200);
}
