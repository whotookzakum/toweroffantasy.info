<script>
    export let unit;
</script>

{#if unit === "player" || unit.includes("lb2")}
    <div id={`nn_${unit}`} class={unit} />
{:else}
    <div
        class={`container full-bleed ${unit}`}
        class:mobile={unit.includes("mobile")}
    >
        <div id={`nn_${unit}`} class={`unit ${unit}`} />
        <small class="background-message">
            🥺 Please consider whitelisting us. Ads support free resources like
            this!
        </small>
    </div>
{/if}

<style lang="scss">
    .container {
        margin: var(--space-2xs) auto;
        position: relative;
        z-index: 90;
        display: grid;
        place-items: center;
        background: var(--surface3);
        border: 1px solid var(--tier-s);
        box-sizing: border-box;
    }

    .unit {
        position: absolute;
        z-index: 1;
    }

    .background-message {
        text-align: center;
        font-size: var(--step--2);
        color: var(--tier-s);
        padding: 0 2rem;
        line-height: 1.4;
    }

    // ------------------------------------
    // VIDEO PLAYER
    // ------------------------------------
    #nn_player {
        // position: fixed;
        // bottom: 0;
        // right: 0;
        // z-index: 100;
    }

    // ------------------------------------
    // DESKTOP
    // ------------------------------------
    .lb1,
    .lb2,
    .lb3,
    .lb4,
    .lb5 {
        width: 728px;
        height: 90px;
    }

    @media (max-width: 990px) {
        .container:not(.mobile) {
            display: none;
        }
    }

    // ------------------------------------
    // MOBILE
    // ------------------------------------
    .mobile_lb1,
    .mobile_lb2,
    .mobile_lb3,
    .mobile_lb4,
    .mobile_lb5 {
        width: 320px;
        height: 50px;
    }

    .mobile_mpu1,
    .mobile_mpu2 {
        width: 300px;
        height: 250px;
    }

    @media (min-width: 991px) {
        .container.mobile {
            display: none;
        }
    }
</style>
