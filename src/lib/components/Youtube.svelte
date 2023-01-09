<script>
    export let source, caption;
</script>

<figure>
    <iframe
        src={source}
        allow="fullscreen"
        title="Preview of weapon skills"
        loading="lazy"
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
