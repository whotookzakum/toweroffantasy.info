<script>
    export let data;
</script>

<article>
    <h1>{data.title}</h1>
    <p>Last updated: {data.date}</p>
    <svelte:component this={data.content} />
</article>
