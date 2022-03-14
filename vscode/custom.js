const logKey = (event) => {
  if (event.key === "j") {
    console.log(event.key);
  }
};
document.addEventListener("keydown", logKey);
