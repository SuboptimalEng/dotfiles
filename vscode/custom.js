function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
let prevCursor = { left: 35, top: 35 };
let currCursor = { left: 100, top: 100 };
const logKey = (event) => {
  let el = document.getElementById("myRect");
  if (el !== null) {
    el.remove();
  }
  let rect = document.createElement("div");
  rect.id = "myRect";

  currCursor = getOffset(document.getElementsByClassName("cursor")[0]);
  let top = currCursor.top;
  let left = currCursor.left;
  const h = document.getElementsByClassName("view-line");
  rect.style.cssText = `
	position:absolute;
	top:${top}px;
	left:${left}px;
	width:9px;
	height:22px;
	z-index:10;
	background-color:red;
  `;
  document.body.appendChild(rect);
  prevCursor.left = currCursor.left;
  prevCursor.top = currCursor.top;

  // console.log(document.getElementsByClassName("cursor"));
  // currCursor = getOffset(cursorElement);
  // console.log("prev: ", prevCursor);
  // console.log("curr: ", currCursor);
};
document.addEventListener("keydown", logKey);
