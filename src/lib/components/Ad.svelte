<script>
    export let unit;
</script>

{#if unit === "player" || unit.includes("lb2")}
    <div id={`nn_${unit}`} class={unit} />
{:else}
    <div
        class={`unit-container full-bleed ${unit}`}
        class:mobile={unit.includes("mobile")}
    >
        <small class="background-message">
            🥺 Please consider whitelisting us. Ads support free resources like
            this!
        </small>
        <div id={`nn_${unit}`} class={`unit ${unit}`} />
    </div>
{/if}