Vue.component('app-username', {
	props: ['username'],
	data: function() {
		return {
			//username: 'Butt'
		}
	},
	template: '<p v-on:click="usernameClicked">{{ username }}</p>',
	methods: {
		usernameClicked() {
			this.$emit('usrclicked', this.username);
		}

	}
});
	


new Vue({
  el: '#app',
  data: {
    name: 'Fart',
    elements: []
  },
  methods: {
    changeName: function() {
        this.name = 'Poop';
    },
    addElement: function() {
    	this.elements.push(this.elements.length + 1);
    },
		getColor: function(number) {
			return number % 2 == 0 ? 'green' : 'red';
		},
		userWasClicked(name) {
		alert(name);
		}
  }
});

new Vue({
	el: '#app2',
	data: {
		message: 'Poop Fart'
	}
});
