<script>
	import {database, allcards} from "../stores/alldata"

	let body = "", title = ""
	let pageInfo = {title,body}

	const doSubmit = (e) => {
		console.log(8, `conlog: `, pageInfo)

		database.insert(pageInfo)
			.then((id) => {
				pageInfo = { ...pageInfo, id: id };
				console.log(13,`conlog: `, id)
			})
			.then((x) => {
				console.log(`conlog: `, x)
			})
	}

</script>

<div class="bg-gray-50 border border-gray-200 w-1/2 p-1 m-4 rounded">
	<input class="box-border border rounded m-2 px-4 py-2 w-full" bind:value={title} placeholder="title here">
	<textarea class="box-border border rounded m-2 p-4 w-full" placeholder="text goes here" bind:value={body}></textarea>
	<button class="w-24 bg-indigo-400 rounded text-sm h-8 font-bold text-white" on:click={doSubmit}>Save</button>
</div>

<style>

</style>