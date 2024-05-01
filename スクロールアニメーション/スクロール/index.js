const boxes = document.querySelectorAll(".box");
let timeout;

window.addEventListener("scroll", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }, 100); // スクロールイベントの発火を100ミリ秒遅延させる
});