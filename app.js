const html = document.getElementById("html");
let hue = 0;

function createRipple(e) {
    // Use pointer coordinates so touch and mouse both work
    const x = e.clientX;
    const y = e.clientY;

    const ripple = document.createElement("div");
    ripple.className = "ripple";
    // Position relative to the page / container
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.borderColor = `hsl(${hue}, 100%, 50%)`;
    html.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });

    hue = (hue + 10) % 28;
}

html.addEventListener("pointermove", createRipple);