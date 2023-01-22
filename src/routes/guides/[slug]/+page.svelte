<script>
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.title} | Tower of Fantasy Index</title>
    <meta name="description" content={data.description} />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={`/images/mia.png`} />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>{data.title}</h1>
<strong>By {data.author}</strong>
<p>
    Last updated {new Date(data.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })}
</p>

<svelte:component class="hey" this={data.content} />
