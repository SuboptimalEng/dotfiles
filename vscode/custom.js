// function getOffset(el) {
//   const rect = el.getBoundingClientRect();
//   return {
//     left: rect.left + window.scrollX,
//     top: rect.top + window.scrollY,
//   };
// }
// let prevCursor = { left: 35, top: 35 };
// let currCursor = { left: 100, top: 100 };
// const logKey = (event) => {
//   let el = document.getElementById("myRect");
//   if (el !== null) {
//     el.remove();
//   }
//   let rect = document.createElement("div");
//   rect.id = "myRect";
//   let top = prevCursor.top;
//   let left = prevCursor.left;
//   console.log(top, left);
//   rect.style.cssText = `position:absolute;top:${top}px;left:${left}px;width:10px;height:14px; z-index:10; background-color:red; transform:skew(5deg, 5deg);`;
//   document.body.appendChild(rect);
//   prevCursor.left = currCursor.left;
//   prevCursor.top = currCursor.top;
//   const cursorElement = document.getElementsByClassName("cursor")[0];
//   console.log(document.getElementsByClassName("cursor"));
//   currCursor = getOffset(cursorElement);
//   console.log("prev: ", prevCursor);
//   console.log("curr: ", currCursor);
// };
// document.addEventListener("keydown", logKey);
