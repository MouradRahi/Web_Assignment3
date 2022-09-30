const positions = document.querySelectorAll(".position");
let player_cpu = false;
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");





positions[0].addEventListener("click", () => {
    if (img1.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            //img1.classList.add("animate_red");
            img1.src = "red.png";
            player_cpu = false;
        }
        else {
            img1.src = "yellow.png";
            player_cpu = true;
        }
    }
    
});
positions[1].addEventListener("click", () => {
    if (img2.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img2.src = "red.png";
            player_cpu = false;
        }
        else {
            img2.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[2].addEventListener("click", () => {
    if (img3.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img3.src = "red.png";
            player_cpu = false;
        }
        else {
            img3.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[3].addEventListener("click", () => {
    if (img4.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img4.src = "red.png";
            player_cpu = false;
        }
        else {
            img4.src = "yellow.png";
            player_cpu = true;
        }
    }

});


positions[4].addEventListener("click", () => {
    if (img5.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img5.src = "red.png";
            player_cpu = false;
        }
        else {
            img5.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[5].addEventListener("click", () => {
    if (img6.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img6.src = "red.png";
            player_cpu = false;
        }
        else {
            img6.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[6].addEventListener("click", () => {
    if (img7.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img7.src = "red.png";
            player_cpu = false;
        }
        else {
            img7.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[7].addEventListener("click", () => {
    if (img8.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img8.src = "red.png";
            player_cpu = false;
        }
        else {
            img8.src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[8].addEventListener("click", () => {
    if (img9.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            img9.src = "red.png";
            player_cpu = false;
        }
        else {
            img9.src = "yellow.png";
            player_cpu = true;
        }
    }
});

