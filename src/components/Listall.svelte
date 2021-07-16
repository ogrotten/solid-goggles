<script>
	import {database, allcards} from "../stores/alldata"

	let list = []

	allcards.subscribe( x => list = x)
</script>
{#each list as card}
<p>{card.title}</p>
{/each}