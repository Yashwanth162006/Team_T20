let players = {
    data: [
        {
            playerName: "Rohit Sharma(c)",
            role: "Batsman",
            image: "./Images/Rohit.png",
            age: "37",
            style: "RHB",
            jersy_no: "45",
        },
        {
            playerName: "Virat Kohli",
            role: "Batsman",
            image: "./Images/Kohli.png",
            age: "35",
            style: "RHB",
            jersy_no: "18",
        },
        {
            playerName: "Rishab Pant(wk)",
            role: "Batsman",
            image: "./Images/Pant.png",
            age: "26",
            style: "LHB",
            jersy_no: "17",
        },
        {
            playerName: "Surya Kumar Yadav",
            role: "Batsman",
            image: "./Images/Surya.png",
            age: "33",
            style: "RHB",
            jersy_no: "63",
        },
        {
            playerName: "Shivam Dube",
            role: "AllRounder",
            image: "./Images/Dube.png",
            age: "30",
            style: "LHB",
            jersy_no: "25",
        },
        {
            playerName: "Hardik Pandya(vc)",
            role: "AllRounder",
            image: "./Images/Hardik.png",
            age: "30",
            style: "RHB",
            jersy_no: "33",
        },
        {
            playerName: "Ravindra Jadeja",
            role: "AllRounder",
            image: "./Images/Jadeja.png",
            age: "35",
            style: "LHB",
            jersy_no: "8",
        },
        {
            playerName: "Axar Patel",
            role: "AllRounder",
            image: "./Images/Axar.png",
            age: "30",
            style: "LHB",
            jersy_no: "20",
        },
        {
            playerName: "Jasprit Bumrah",
            role: "Bowler",
            image: "./Images/Bumrah.png",
            age: "30",
            style: "RHB",
            jersy_no: "93",
        },
        {
            playerName: "Arshdeep singh",
            role: "Bowler",
            image: "./Images/Arshdeep.png",
            age: "25",
            style: "LHB",
            jersy_no: "2",
        },
        {
            playerName: "Mohammed Siraj",
            role: "Bowler",
            image: "./Images/Siraj.png",
            age: "30",
            style: "RHB",
            jersy_no: "73",
        },
        {
            playerName: "Kuldeep Yadav",
            role: "Bowler",
            image: "./Images/Kuldeep.png",
            age: "29",
            style: "LHB",
            jersy_no: "23",
        },
        {
            playerName: "Sanju Samson",
            role: "Batsman",
            image: "./Images/Samson.png",
            age: "29",
            style: "RHB",
            jersy_no: "14",
        },
        {
            playerName: "Yashasvi Jaiswal",
            role: "Batsman",
            image: "./Images/Jaiswal.png",
            age: "22",
            style: "LHB",
            jersy_no: "64",
        },
        {
            playerName: "Shubman Gill",
            role: "Reserves",
            image: "./Images/Gill.png",
            age: "24",
            style: "RHB",
            jersy_no: "77",
        },
        {
            playerName: "Rinku Singh",
            role: "Reserves",
            image: "./Images/Rinku.png",
            age: "26",
            style: "LHB",
            jersy_no: "35",
        },
        {
            playerName: "Avesh Khan",
            role: "Reserves",
            image: "./Images/Avesh.png",
            age: "27",
            style: "RHB",
            jersy_no: "65",
        },
    ],
};


for(let i of players.data){
    let player_card = document.createElement("div"); 
    player_card.classList.add("player-card",i.role,"hide");
    
    let img_container = document.createElement("div");
    img_container.classList.add("img-container");
    
    let image = document.createElement("img");
    image.setAttribute("src",i.image);

    let jersy_no = document.createElement("h1")
    jersy_no.classList.add("jersy-no");
    jersy_no.innerHTML = i.jersy_no;

    img_container.appendChild(image);
    img_container.appendChild(jersy_no);
    
    player_card.appendChild(img_container);
    
    document.querySelector(".players").appendChild(player_card);
    
    let info_container = document.createElement("div");
    info_container.classList.add("info-container");

    let player_name = document.createElement("h2");
    player_name.classList.add("player-name");
    player_name.innerHTML = i.playerName;

    let style = document.createElement("h3");
    style.classList.add("player-style");
    style.innerHTML = i.style;
    
    let player_age = document.createElement("h4");
    player_age.classList.add("player-age");
    player_age.innerHTML = "Age "+i.age;

    info_container.appendChild(player_name);
    info_container.appendChild(style);
    info_container.appendChild(player_age);

    player_card.appendChild(info_container);

}

/* Filter by clicking buttons */
function filterProducts(value){
    let buttons = document.querySelectorAll(".button-value");
    for(let i=0;i<buttons.length; i++){
        if(value === buttons[i].innerHTML){
            buttons[i].style.color = "white";
            buttons[i].style.backgroundColor = "#6759ff";
        }else{
                buttons[i].style.color = "#6759ff";
                buttons[i].style.backgroundColor = "white";
        }
    }
    let elements = document.querySelectorAll(".player-card");

    for(let i=0;i<elements.length;i++){
        if(value === "All"){
            elements[i].classList.remove("hide");
        }else{
            if(elements[i].classList.contains(value)){
                elements[i].classList.remove("hide");
            }
            else{
                elements[i].classList.add("hide");
            }
        }
    }
  
}
  /* Search bar */
  let search_button = document.querySelector(".search-button").addEventListener("click",function(){

    let input = document.querySelector(".text-input").value.toUpperCase();
    let temp = input.slice(1,input.length).toLowerCase();
    let modified_input = input[0]+temp;
    let players_names = document.querySelectorAll(".player-name");
    let player_cards = document.querySelectorAll(".player-card");

    let count = 0;
    for(let i=0;i<players_names.length;i++){
        if(players_names[i].innerText.includes(modified_input)){
            count++;
        }
    }
    if(count === 0){
        filterProducts("All");
    }

    for(let i=0;i<players_names.length;i++){
        if(players_names[i].innerText.includes(modified_input)){
            player_cards[i].classList.remove("hide");
        }
        else{
            player_cards[i].classList.add("hide");
        }
    }
    if(input === ""){
        filterProducts("All");
    }
})
document.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        document.querySelector(".search-button").click();
    }
})
window.onload = () => {
    filterProducts("All");
}