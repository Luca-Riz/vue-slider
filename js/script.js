const app = new Vue(
    {
        el: '#app',
        data: {
            playCheck: '',
            pausaCheck: '',
            count: 0,
            interval: '',
            images: [
                'img/B01.jpg',
                'img/B02.jpg',
                'img/B03.jpg',
                'img/B04.jpg',
                'img/B05.jpg',
                'img/B06.jpg',
                'img/B07.jpg',
                'img/B08.jpg'
            ],

        },

        methods: {    

            nextImg() {
                this.count++;
                if(this.count == this.images.length){
                    this.count = 0
                }
            },

            precImg() {
                this.count--;
                if(this.count < 0){
                    this.count = this.images.length-1
                }
            },

            navImg(i) {
                this.count = i;
            }, 

            pausa() {
                clearInterval(this.interval);
                // freccia play grigia
                this.playCheck = false;
                // freccia pausa bianca
                this.pausaCheck = true;
            },

            play() {
                this.interval = setInterval(this.nextImg, 3000);
                // freccia play bianca
                this.playCheck = true;
                // freccia pausa grigia
                this.pausaCheck = false;
            }

        },

        // all'apertura del file faccio partire il setInteval
        mounted() {
            this.interval = setInterval(this.nextImg, 3000);
            // ..e setto su true il valore playcheck (freccia play bianca)
            this.playCheck = true;
        }

    });
