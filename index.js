new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        forLists: [{
                'i': 1,
                'o': "test"
            },
            {
                'i': 2,
                'o': "test2"
            },
            {
                'i': 3,
                'o': "test3"
            }
        ],
    },
    methods: {
        myclick() {
            console.log(this.forLists);
        }
    }


});
