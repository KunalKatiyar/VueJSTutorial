new Vue({
    el: '#vue-app',
    data: {
        // name: '',
        // job: 'Student',
        // website: "https://kunalkatiyar.github.io",
        // websiteTag: '<a href="https://kunalkatiyar.github.io">Kunal Katiyar Website</a>',
        // age: 20,
        // a: 0,
        // b: 0
        // x: 0,
        // y: 0
        available: false,
        nearby: false
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + " " + this.name;
        },
        add: function(inc){
            this.age+=inc;
        },
        subtract: function (dec) {
            this.age-=dec;
        },
        updateXY: function (event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('You clicked me')
        },
        logName: function(){
            console.log('You entered your name');
        },
        logAge: function(){
            console.log('You entered your age');
        }
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});