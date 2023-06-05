class Layout {
    constructor() {
        this.lastUpadateTime();
        this.upadateHumidity();
    };

    upadateHumidity() {
        const timer = setInterval(this.upadateHumidityNow ,6000);
    }

    upadateHumidityNow() {
        window.location.reload(true);
    }

    lastUpadateTime() {
        this.time = 0;
        const timer = setInterval(this.updateMessage ,1000);
    };

    updateMessage = () => {
        this.time +=1 ;

        const message = document.querySelector('h3');
        message.innerHTML = `
            Ultima aferição feita há ${this.time} segundos
        `;
    };
  };

  new Layout();