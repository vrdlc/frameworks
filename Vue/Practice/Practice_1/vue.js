new Vue({
	el: '#practice1',
	data: {
		name: 'Hobbies',
		elements: ['farting', 'eating', 'running', 'smelling']
	},
	methods: {
		addHobby: function() {

			this.elements.push(document.getElementById('hobby').value)
		}
	}
})
