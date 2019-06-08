const textbox = document.querySelector("#textbox");

const timer = new Timer({
    target: "#time",

});

textbox.addEventListener("click", function() {
    timer.show();
});

function Timer(options)
{
    
}

Timer.prototype = {

}