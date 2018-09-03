const divsProgress = document.querySelectorAll("[progress]");

divsProgress.forEach(divProgress => {
    const progress = divProgress.getAttribute("progress");

    for (let index = 0; index < 5; index++) {
        divProgress.appendChild(document.createElement("div"));
    }

    for (let index = 0; index < progress; index++) {
        const element = divProgress.children[index];
        element.style.backgroundColor = "#3d9ec8";
    }
});




