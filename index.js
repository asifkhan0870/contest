
let response = fetch("https://kontests.net/api/v1/all");

response.then((value) => {

    return value.json();

}).then((contest) => {

    inhtml = "";

    for (item in contest) {

        console.log(contest[item]);


        inhtml +=
            `  
               <div id="cardContainer" class="card" style="width: 18rem;">
        
        <img src="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=" class="card-img-top" alt="...">
         
        <div class="card-body">
                <h5 class="card-title">${contest[item].site}</h5>
                <p class="card-text">programing is back bone  of the software world.</p>
                <p class="card-text">Start time: ${contest[item].start_time}</p>
                <p class="card-text">End time: ${contest[item].end_time}</p>
                <p class="card-text">${contest[item].name} is very popular website to boost programming skill and critical think</p>

                <a href="${contest[item].url}" class="btn btn-primary">visit the website</a>
        </div>
   </div>

        `


    }
    cardContainer.innerHTML = inhtml;




})






