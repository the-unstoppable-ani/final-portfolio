const toggle = document.querySelector(".toggle").addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle('active');
});

console.log(toggle)
