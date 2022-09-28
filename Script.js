let positions = document.querySelectorAll(".position");
positions[0].addEventListener("click", () =>{
    document.getElementById("img1").src = "red.png";
    if (document.getElementById("img1").src == "red.png"){
        console.log("hi");
    }
});