function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

const displayEffect = (event) => {
  setTimeout(function () {
    let offset = getOffset(document.getElementsByClassName("cursor")[0]);
    let top = offset.top;
    let left = offset.left;
    console.log(top, left);
  }, 40);

  console.log(event);
  let existingRect = document.getElementById("myRect");
  if (existingRect !== null) {
    existingRect.remove();
  }

  let rect = document.createElement("div");
  let offset = getOffset(document.getElementsByClassName("cursor")[0]);
  let top = offset.top;
  let left = offset.left;
  console.log(top, left);

  rect.id = "myRect";
  rect.style.cssText = `
	position:absolute;
	top:${top}px;
	left:${left}px;
	width:9px;
	height:20px;
	z-index:10;
	background-color:red;
  opacity: 0.5;
  `;
  rect.animate(
    [
      // keyframes
      { transform: "scale(1) skew(25deg, 10deg)" },
      { transform: "scale(0) skew(25deg, 10deg)" },
    ],
    {
      // timing options
      duration: 1000,
      easing: "ease-in-out",
      direction: "alternate",
      iterations: Infinity,
    }
  );

  document.body.appendChild(rect);
};

document.addEventListener("keydown", displayEffect);
