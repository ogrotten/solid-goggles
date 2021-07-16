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