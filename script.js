window.addEventListener("load",function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        console.log(json) {
        const containter = document.querySelector('#containter');
        let astronauts = ''
        for (astronauts of json)
            astronauts +=
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${$astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join</li>
                    </ul>
                </div>
            </div>
        }
    }

})