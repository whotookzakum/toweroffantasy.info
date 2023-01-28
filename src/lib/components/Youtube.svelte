<script>
    export let source, caption, id;
    // https://developers.google.com/youtube/iframe_api_reference#Playback_controls
    // https://stackoverflow.com/questions/26257395/change-time-in-embedded-youtube-video-when-a-button-is-clicked
    // Have search params store video timestamp? so a specific timestamp can be linked
</script>

<figure {id}>
    <iframe
        src={source}
        allow="fullscreen"
        title=""
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
