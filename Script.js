const positions = document.querySelectorAll(".position");
let player_cpu = false;
let game_state = true;
let turn_player="player"
const board = ["e", "e", "e", "e", "e", "e", "e", "e", "e"];
const game_status = document.getElementById("status");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//                0          1         2            3        4           5           6        7

function winVerification(index) {
    let compare = "e";
    let temp = "e";
    let win = true;
    compare = wins[index][0];
    temp = wins[index][0];
    let j = 0;
    while (j < wins[index].length && win) {
        compare = wins[index][j];
        if (board[compare] == board[temp]) {
            win = true;
        }
        else {
            win = false;
        }
        j++;
    }
    if(win){
        return false;
    }
    else{
        return true;
    }
}


document.getElementById("start").addEventListener("click", () => {
    game_status.innerText="Game Started " + turn_player+ "'s move";
    positions[0].addEventListener("click", () => {
        if (img1.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                //img1.classList.add("animate_red");
                img1.src = "red.png";
                player_cpu = false;
                board[0] = "o";
            }
            else {
                img1.src = "yellow.png";
                player_cpu = true;
                board[0] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(0);
        }
        if (game_state){
            game_state=winVerification(3);
        }
        if (game_state){
            game_state=winVerification(6);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });
    positions[1].addEventListener("click", () => {
        if (img2.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img2.src = "red.png";
                player_cpu = false;
                board[1] = "o";



            }
            else {
                img2.src = "yellow.png";
                player_cpu = true;
                board[1] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(4);
        }
        if (game_state){
            game_state=winVerification(0);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[2].addEventListener("click", () => {
        if (img3.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img3.src = "red.png";
                player_cpu = false;
                board[2] = "o";
            }
            else {
                img3.src = "yellow.png";
                player_cpu = true;
                board[2] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(0);
        }
        if (game_state){
            game_state=winVerification(5);
        }
        if (game_state){
            game_state=winVerification(7);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[3].addEventListener("click", () => {
        if (img4.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img4.src = "red.png";
                player_cpu = false;
                board[3] = "o";
            }
            else {
                img4.src = "yellow.png";
                player_cpu = true;
                board[3] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(1);
        }
        if (game_state){
            game_state=winVerification(3);
        }

        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[4].addEventListener("click", () => {
        if (img5.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img5.src = "red.png";
                player_cpu = false;
                board[4] = "o";
            }
            else {
                img5.src = "yellow.png";
                player_cpu = true;
                board[4] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(1);
        }
        if (game_state){
            game_state=winVerification(4);
        }
        if (game_state){
            game_state=winVerification(6);
        }
        if (game_state){
            game_state=winVerification(7);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[5].addEventListener("click", () => {
        if (img6.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img6.src = "red.png";
                player_cpu = false;
                board[5] = "o";
            }
            else {
                img6.src = "yellow.png";
                player_cpu = true;
                board[5] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(1);
        }
        if (game_state){
            game_state=winVerification(5);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[6].addEventListener("click", () => {
        if (img7.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img7.src = "red.png";
                player_cpu = false;
                board[6] = "o";
            }
            else {
                img7.src = "yellow.png";
                player_cpu = true;
                board[6] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(2);
        }
        if (game_state){
            game_state=winVerification(3);
        }
        if (game_state){
            game_state=winVerification(7);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[7].addEventListener("click", () => {
        if (img8.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img8.src = "red.png";
                player_cpu = false;
                board[7] = "o";
            }
            else {
                img8.src = "yellow.png";
                player_cpu = true;
                board[7] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(2);
        }
        if (game_state){
            game_state=winVerification(4);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });


    positions[8].addEventListener("click", () => {
        if (img9.src == "http://127.0.0.1:5500/Assignment3/Web_Assignment3/empty.png" && game_state) {
            if (player_cpu) {
                img9.src = "red.png";
                player_cpu = false;
                board[8] = "o";
            }
            else {
                img9.src = "yellow.png";
                player_cpu = true;
                board[8] = "x";
            }
        }
        if (game_state){
            game_state=winVerification(2);
        }
        if (game_state){
            game_state=winVerification(5);
        }
        if (game_state){
            game_state=winVerification(6);
        }
        console.log(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);
    });

});



