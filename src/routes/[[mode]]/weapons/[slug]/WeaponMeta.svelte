<script>
    import Youtube from "$components/Youtube.svelte";
    import Rating from "$components/simulacrum/Rating.svelte";
    import RecommendedMatrices from "./RecommendedMatrices.svelte";
    import RecommendedPairings from "./RecommendedPairings.svelte";
    import { userLocale } from "$lib/stores"

    export let weapon;
    const { meta } = weapon
    meta.lastUpdated = {
        timestamp: 1704284562505,
        username: "Emi"
    }

    // TODO: reactively declare based on if user is using UTC or local time in Site Settings
    const dateOptions = { year: "numeric", day: "numeric", month: "long" }
    let updateDate = new Date(meta.lastUpdated.timestamp).toLocaleString($userLocale, dateOptions)
</script>

{#if meta && (meta.analyticVideoId || meta.recommendedMatrices.length > 0 || meta.recommendedPairings.length > 0 || meta.rating.length > 0)}
    <h2 id="meta">Meta</h2>
    {#if meta.analyticVideoId}
        <h3>Analysis</h3>
        <Youtube source={meta.analyticVideoId} />
    {/if}
    {#if meta.rating}
        <h3>Rating</h3>
        <Rating {weapon} />
    {/if}
    <RecommendedMatrices matrices={meta.recommendedMatrices} />
    <RecommendedPairings weapons={meta.recommendedPairings} />
    <small style="color: var(--text2);">Meta last updated by {meta.lastUpdated.username} on {updateDate}</small>
{/if}
