<script>
  import {onMount} from "svelte"
	import {database, allcards} from "./stores/alldata"

  import Content from './components/Content.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Tailwind from './components/Tailwind.svelte';
  import Appstyles from "./Appstyles.svelte"

  let pageCount

	onMount(async () => {
    const res = await database.getall()
    console.log(14, res.length)
    allcards.update(() => res)
  })
  allcards.subscribe(x => {
    pageCount = x.length
  })
  console.log(`conlog: `, pageCount)

</script>

<Appstyles />
<Tailwind />

<div class="container">
	<div class="header border border-gray-700 bg-gray-100">Header</div>
	<div class="sidebar border border-red-400"><Sidebar {pageCount}/></div>
	<div class="content border border-blue-400"><Content /></div> 
</div>

