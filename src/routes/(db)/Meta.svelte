<script>
	import { page } from "$app/stores";
	export let title = "";
	export let description = "";
	export let color = "#377dcb";
	export let image = "/images/mia.webp";
	export let bigImage = false;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="theme-color" content={color} />
	<link
		rel="canonical"
		href="https://toweroffantasy.info{$page.url.pathname}"
	/>

	{#if bigImage}
		<meta
			name="twitter:card"
			content="summary_large_image"
			key="misc-card"
		/>
	{/if}
</svelte:head>
