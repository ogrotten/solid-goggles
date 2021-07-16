<script>
	import NewForm from "./NewForm.svelte"
	import Listall from "./Listall.svelte"

	let tab = 1

	const changetab = (e) => {
		tab = e.target.value
	}

</script>
<div class="p-4">
	<button value=1 on:click={()=>tab=1} class:selected={tab === 1} class="w-24 text-sm h-8 font-bold text-indigo-600">List</button>
	<button value=0 on:click={()=>tab=0} class:selected={tab === 0} class="w-24 text-sm h-8 font-bold text-indigo-600">New</button>
	<div class="my-4">
		{#if tab === 1 }
		<Listall />
		{:else}
		<NewForm />
		{/if}
	</div>
</div>

<style>
	.selected {
		border-bottom: 2px solid darkgray;
	}
</style>