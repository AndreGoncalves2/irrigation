class Layout {
    constructor() {
        this.lastUpadateTime();
        this.upadateMoisture();
        this.openIrrigation();
        this.closeIrrigation();
    };

    upadateMoisture() {
        setInterval(this.upadateMoistureNow, 59000);
    };
    
    lastUpadateTime() {
        this.time = 0;
        setInterval(this.updateMessage, 1000);
    };

    upadateMoistureNow() {
        window.location.reload(true);
    };

    updateMessage = () => {
        this.time +=1 ;

        const message = document.querySelector('h3');
        message.innerHTML = `
            Ultima aferição feita há ${this.time} segundos
        `;
    };

    openIrrigation() {
        const buttonOpen = document.querySelector('.button-open');
        buttonOpen.addEventListener('click', (event) => {
            event.preventDefault();

            fetch("http://127.0.0.1:5000/open", {
                method: "POST"});
    
            alert('Irrigação aberta !');
            this.countdown = setTimeout(this.buttonClose, 10000);
        });
    };

    closeIrrigation() {
        const buttonOpen = document.querySelector('.button-close');
        buttonOpen.addEventListener('click', (event) => {
            event.preventDefault();

            this.buttonClose();
            clearTimeout(this.countdown);
        });
    };

    buttonClose() {
        fetch("http://127.0.0.1:5000/close", {
                method: "POST"
            });

        alert('Irrigação fechada !');
    };
  };
  
  new Layout();
