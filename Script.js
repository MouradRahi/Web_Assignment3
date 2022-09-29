const positions = document.querySelectorAll(".position");
let player_cpu = false;





positions[0].addEventListener("click", () => {
    console.log(document.getElementById("img1").src);
    if (document.getElementById("img1").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img1").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img1").src = "yellow.png";
            player_cpu = true;
        }
    }
    
});
positions[1].addEventListener("click", () => {
    if (document.getElementById("img2").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img2").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img2").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[2].addEventListener("click", () => {
    if (document.getElementById("img3").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img3").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img3").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[3].addEventListener("click", () => {
    if (document.getElementById("img4").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img4").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img4").src = "yellow.png";
            player_cpu = true;
        }
    }

});


positions[4].addEventListener("click", () => {
    if (document.getElementById("img5").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img5").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img5").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[5].addEventListener("click", () => {
    if (document.getElementById("img6").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img6").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img6").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[6].addEventListener("click", () => {
    if (document.getElementById("img7").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img7").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img7").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[7].addEventListener("click", () => {
    if (document.getElementById("img8").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img8").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img8").src = "yellow.png";
            player_cpu = true;
        }
    }
});


positions[8].addEventListener("click", () => {
    if (document.getElementById("img9").src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png") {
        if (player_cpu) {
            document.getElementById("img9").src = "red.png";
            player_cpu = false;
        }
        else {
            document.getElementById("img9").src = "yellow.png";
            player_cpu = true;
        }
    }
});

