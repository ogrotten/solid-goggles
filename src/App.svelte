<script>
  import marked from "marked"

  import Content from './components/Content.svelte';
  import Tailwind from './components/Tailwind.svelte';
</script>

<Tailwind />

<div class="container">
	<div class="header border border-gray-700 bg-gray-100">Header</div>
	<div class="sidebar border border-red-400">Sidebar</div>
	<div class="content border border-blue-400"><Content /></div> 
</div>

<style global lang="postcss">
	/* https://grid.layoutit.com/?id=jJ2U26S */
	.container {
		max-width: 900px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 180px 1fr;
		grid-template-rows: 100px 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
		"header header"
		"sidebar content";
	}

	.header { grid-area: header; }

	.sidebar {
		grid-area: sidebar;
		min-height: 500px;
	}
	
	.content {
		grid-area: content;
		min-height: 500px;
	}

</style>