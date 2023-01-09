<script>
    export let source, caption;
</script>

<figure>
    <iframe
        src={source}
        class=""
        allow="fullscreen"
        title="Preview of weapon skills"
        style=""
    />
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>

<style>
    iframe {
        border: none;
        width: 100%;
        aspect-ratio: 16/9;
    }
</style>
