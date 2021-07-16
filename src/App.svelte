<script>
  import Tailwind from './components/Tailwind.svelte';

  export let name;
</script>

<Tailwind />

<div class="container">
	<div class="header border border-gray-700 bg-gray-100">Header</div>
	<div class="sidebar">Sidebar</div>
	<div class="content">Content</div>
</div>

<style global lang="postcss">
	/* https://grid.layoutit.com/?id=jJ2U26S */
	.container {
		max-width: 900px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 240px 1fr;
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