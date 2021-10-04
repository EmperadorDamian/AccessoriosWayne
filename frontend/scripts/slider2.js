class textoSlider {
    constructor(selector) {
        this.move = this.move.bind(this);
        this.slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0;
        let itemsCount = this.slider.querySelectorAll(".textos_slider-container > *").length;
        console.log(itemsCount)
        this.start();
    }
    start() {
        this.interval = window.setInterval(this.move, 4000);
    }
    move() {
        let itemsCount = this.slider.querySelectorAll(".textos_slider-container > *").length;
        this.contador++;
        if (this.contador > itemsCount - 1) this.contador = 0;
        this.moveTo(this.contador);
    }
    moveTo(index) {
        let left = index * 100;

        this.slider.querySelector(".textos_slider-container").style.left = "-" + left + "%";
    }
}
(function() {
    new textoSlider(".textos_slider");
})();