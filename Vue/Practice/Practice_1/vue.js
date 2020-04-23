Vue.component('practice1-comp', {
	props: ['hobby'],
  template: '<li v-on:click="removeHobby">{{ hobby }}</li>',
  methods: {
  	removeHobby: function() {
    	this.$emit('hobbyremoved', this.hobby);
    }
  }
});

new Vue({
	el: '#practice1',
  data: {
  	elements: ['Sports', 'Cooking', 'Farting'],
    userHobby: '',
    hobbyWasDeleted: false
  },
  methods: {
  	addHobby: function() {
    	this.elements.push(this.userHobby);
    },
    removeHobby: function(hobby) {
    	var position = this.elements.indexOf(hobby);
			console.log(position + " pos")
      this.elements.splice(position, 1);
      this.hobbyRemoved = true;
    }
  }
});
