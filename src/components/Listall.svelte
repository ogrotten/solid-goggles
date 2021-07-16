<script>
	import {database, allcards} from "../stores/alldata"

	let list = []

	allcards.subscribe( x => list = x)
</script>
<p>Listall</p>