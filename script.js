document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snowflakes");
  const numberOfFlakes = 50;

  for (let i = 0; i < numberOfFlakes; i++) {
    let snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowflake.style.width = snowflake.style.height = `${Math.random() * 10 + 5}px`;
    snowContainer.appendChild(snowflake);
  }
});
