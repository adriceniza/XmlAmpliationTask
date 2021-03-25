window.onload = initialize();
window.addEventListener('scroll', parallax , true);

function parallax(){
    const parallax = document.querySelector('.parallax');
    const parallaxsub = document.querySelector('.parallax-1');

    let scrollposition = window.pageYOffset;
    
    parallax.style.transform = 'translateY(' + scrollposition *.9 + 'px)';
    parallaxsub.style.transform = 'translateY(' + scrollposition *.9 + 'px)';
   
}




function initialize() {
    sendApiRequest();

    


    
}
var isLoading ;

async function sendApiRequest() {

    


    let nasa_key = 'MbAJsBq0FyTfvPhk20u3Jci6uojEN8KgG8MrGQan';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`);
    console.log(response);

    let data = await response.json();

    console.log("Data object ->")
    console.log(data);

    useApi(data);
}
async function changeday(event){
    isLoading = true;
    displayLoading();
    var day = event.target.value;
    let nasa_key = 'MbAJsBq0FyTfvPhk20u3Jci6uojEN8KgG8MrGQan';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&date=${day}`);
    console.log(response);
    isLoading = false;
    hideLoading();

    let data = await response.json();

    console.log("Data object ->")
    console.log(data);

    useApi(data);
}

function displayLoading(){
    document.getElementById("loading").classList.remove("hidden");

}
function hideLoading(){
    document.getElementById("loading").classList.add("hidden");

}
function useApi(data) {

    document.getElementById("title").innerHTML = data.title;

    document.getElementById("fecha").innerHTML = data.date;

    document.getElementById("content").innerHTML = `<img  id="apodimg" class="img-fluid rounded"  src="${data.url}" alt="nasaapi"></img>;`
    document.getElementById("explanation").innerHTML = data.explanation;

    if(data.copyright != undefined ){
    document.getElementById("footer").innerHTML = data.copyright + ' © 2021';
    }else{document.getElementById("footer").innerHTML =  'adriceniza © 2021';}
};


