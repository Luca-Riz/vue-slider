const app = new Vue(
    {

        created : function(){
            //ogni 3 secondi fai nextImg
            setInterval(() => this.nextImg(), 3000);
        },

        el: '#app',
        data: {
            count: 0,
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

            nextImg: function() {
                this.count++;
                if(this.count == this.images.length){
                    this.count = 0
                }
            },

            precImg: function() {
                this.count--;
                if(this.count < 0){
                    this.count = this.images.length-1
                }
            },

            navImg: function(i) {
                this.count = i;
            }, 
        }
    });





