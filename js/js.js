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


async function sendApiRequest() {


    let nasa_key = 'MbAJsBq0FyTfvPhk20u3Jci6uojEN8KgG8MrGQan';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`);
    console.log(response);

    let data = await response.json();

    console.log(data);

    useApi(data);
}

function useApi(data) {

    document.getElementById("title").innerHTML += data.title;

    document.getElementById("content").innerHTML += `<img  id="apodimg" class="img-fluid rounded"  src="${data.url}" alt="nasaapi"></img>;`
};
