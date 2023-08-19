const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } /* else {
            entry.target.classList.remove('show');
        } */

    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add(" active");
    }
}