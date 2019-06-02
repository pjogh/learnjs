
/**
 *
 * <input id="textbox" placeholder="Выбрать время">
 *
 * <label id="time">17:12:34</label>
 */


const name = "aaa";
const timer = new Timer({
    target: "#time"
    onSelect: function(time) {
        console.log(name);
        document.querySelector("label").innerHTML = time; 
    }
});


const textbox = document.querySelector("#textbox");

textbox.addEventListener("click", function() {
    timer.show();
});

textbox.addEventListener("focus", function() {
    timer.show();
});

textbox.addEventListener("focus", function() {
    timer.close();
});


function Timer(options)
{
    options = options && typeof(options) === "object" ? options : {};
    this.target = document.querySelector(options.target);
    if (!this.target)
    {
        throw new Error("Target is required.");
    }

    this.onSelect = typeof(options.onSelect) === "function" ? options.onSelect : null;

    this.popup = null;
    this.timer = null;

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleTick = this.handleTick.bind(this);
}

Timer.prototype = {

    show: function()
    {
        if (!this.getPopup().parentNode)
        {
            document.body.appendChild(this.getPopup());
        }

        const position = this.target.getBoundingClientRect();

        if (this.interval)
        {
            clearInterval(this.interval);
        }

        document.body.addEventListener("click", this.handleDocumentClick, true);

        this.interval = setInterval(this.handleTick, 1000);
    },

    close: function()
    {
        if (this.interval)
        {
            clearInterval(this.interval);
            this.interval = null;
        }

        document.body.removeEventListener("click", this.handleDocumentClick, true);
        document.body.removeChild(this.getPopup());
        this.popup = null;
    },

    handleTick: function()
    {
        this.timer.textContent = "13:15:14";
    },

    getPopup: function()
    {
        if (this.popup === null)
        {
            this.popup = document.createElement("div");
            this.popup.className = "";
            this.timer = document.createElement("div");
            this.timer.className = "";

            this.button = document.createElement("button");
            this.button.className = "";
            this.button.addEventListener("click", this.handleButtonClick);

            this.popup.appendChild(this.timer);
            this.popup.appendChild(this.button);
        }

        return this.popup;
    },

    handleButtonClick: function()
    {
        if (this.onSelect !== null)
        {
            this.onSelect(this.timer.textContent);
        }
    },

    handleDocumentClick: function(event)
    {
        if (!this.getPopup().contains(event.target))
        {
            this.close();
        }
    }
}