<script>
  import {onMount} from "svelte"
	import {database, allcards} from "./stores/alldata"

  import Content from './components/Content.svelte';
  import Tailwind from './components/Tailwind.svelte';
  import Appstyles from "./Appstyles.svelte"

	onMount(database.getall()
    .then((result) => {
      allcards.update(result)
      setAllData(result)
      // console.log(15, result);
    }
  ));

</script>

<Appstyles />
<Tailwind />

<div class="container">
	<div class="header border border-gray-700 bg-gray-100">Header</div>
	<div class="sidebar border border-red-400">Sidebar</div>
	<div class="content border border-blue-400"><Content /></div> 
</div>

