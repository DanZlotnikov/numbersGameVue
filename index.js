var cards = new Vue({
    el: '#cards',
    data: function() {
    return {
            cards1: [
            { id: 0, selected: false },
            { id: 1, selected: false },
            { id: 2, selected: false },
            { id: 3, selected: false },
            { id: 4, selected: false },
            { id: 5, selected: false },
            { id: 6, selected: false },
            { id: 7, selected: false }
        ],
        cards2: [
            { id: 0, selected: false },
            { id: 1, selected: false },
            { id: 2, selected: false },
            { id: 3, selected: false },
            { id: 4, selected: false },
            { id: 5, selected: false },
            { id: 6, selected: false },
            { id: 7, selected: false }
        ],
        selectable1: true,
        selectable2: true,
        delay: () => new Promise(res => setTimeout(res, 2000))
        }
    },   
    methods: {
        select1: async function (card) {
            if(this.selectable1) {
                this.cards1[card.id].selected = true
                this.selectable1 = false
                console.log(this.selectable1)
                await this.delay()
                if (!this.cards2[card.id].selected) {
                    this.cards1[card.id].selected = false
                }
                this.selectable1 = true
                console.log(this.selectable1)
            }
        },
        select2: async function (card) {
            if(this.selectable2) {
                this.cards2[card.id].selected = true
                this.selectable2 = false
                await this.delay()
                if (!this.cards1[card.id].selected) {
                    this.cards2[card.id].selected = false
                }
                this.selectable2 = true
            }
        }
    }
  })
