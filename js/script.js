const app = new Vue(
    {
        el: '#app',
        data: {
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
            ]
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
                console.log(this.interval);

            },

            play() {
                this.interval = setInterval(this.nextImg, 3000);
            }

        },

        mounted() {
            console.log(this.interval);
            this.interval = setInterval(this.nextImg, 3000);
            console.log(this.interval);
        }

    });
