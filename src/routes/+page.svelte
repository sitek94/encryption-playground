<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);

	let userInput = '';
	let messages: string[] = [];

	function sendUserMessage() {}
</script>

<main>
	<div>
		<h2>User</h2>
		<input type="text" bind:value={userInput} />
		<button on:click={sendUserMessage}>Send</button>
	</div>
	<div>
		<h2>Server</h2>
		<ul>
			{#each messages as message}
				<li>{message}</li>
			{/each}
		</ul>
	</div>
	<div>Leader</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	div {
		padding: 1rem;
		border: 1px solid #ccc;
	}
</style>
