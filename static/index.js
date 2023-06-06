class Layout {
    constructor() {
        this.lastUpadateTime();
        this.upadateMoisture();
        this.openIrrigation();
        this.closeIrrigation();
    };

    upadateMoisture() {
        const timer = setInterval(this.upadateMoistureNow, 59000);
    };
    
    lastUpadateTime() {
        this.time = 0;
        const timer = setInterval(this.updateMessage, 1000);
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
        buttonOpen.addEventListener('click', () => {
            alert('Irrigação aberta !');
        });
    };

    closeIrrigation() {
        const buttonOpen = document.querySelector('.button-close');
        buttonOpen.addEventListener('click', () => {
            alert('Irrigação fechada !');
        });
    };
  };
  
  new Layout();
