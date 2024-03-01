<script>
    import RecommendedWeapons from "./RecommendedWeapons.svelte";
    import { userLocale } from "$lib/stores"

    export let matrix;
    const { meta } = matrix

    // TODO: reactively declare based on if user is using UTC or local time in Site Settings
    const dateOptions = { year: "numeric", day: "numeric", month: "long" }
    let updateDate = meta.lastUpdated?.timestamp && new Date(meta.lastUpdated.timestamp).toLocaleString($userLocale, dateOptions)
</script>

{#if meta && (meta.recommendedWeapons.length > 0)}
    <h2 id="meta">Meta</h2>
    <RecommendedWeapons weapons={meta.recommendedWeapons} />
    {#if meta.lastUpdated}
        <small style="color: var(--text2);">
            Meta last updated by {meta.lastUpdated.username}
            {#if updateDate}
                on {updateDate}
            {/if}
        </small>
    {/if}
{/if}
