import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Christof Happ',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			"Oh, it's time again for the workshop?"
		],
		// Which CI/CD tools do you use in your project?
		tools: "It's a bit sad",
		// What do you want to learn in this workshop? 
		expectations: [
			'How this idea with the playground repo works'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'reading books', 
			'cooking', 
			'playing computer games'
		]
	}
});
