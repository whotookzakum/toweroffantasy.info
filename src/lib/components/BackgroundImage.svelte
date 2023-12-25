<script>
    import { page } from "$app/stores";
    import { bgImg } from "$lib/stores";
    import { fade } from "svelte/transition";
    import { sineInOut } from "svelte/easing"
    export let src;
    $: showNewestChar = ["/", "/simulacra", "/weapons", "/matrices"].includes($page.url.pathname) || !$bgImg
</script>

{#if showNewestChar}
    <div class="bg-img-wrapper" transition:fade={{ duration: 300, easing: sineInOut }}>
        <img
            class="bg-img"
            {src}
            alt="Background"
            width="1080"
            height="1080"
        />
    </div>
{:else}
    <div class="bg-img-wrapper" transition:fade={{ duration: 300, easing: sineInOut }}>
        <img
            class="bg-img"
            src={$bgImg}
            alt="Background"
            width="1080"
            height="1080"
        />
    </div>
{/if}

<style lang="scss">
    .bg-img-wrapper {
        background-color: var(--bg);
        position: fixed;
        z-index: -5;
        right: 0;
        top: 0;
        mask-image: linear-gradient(to left, black 30%, transparent 80%);
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .bg-img {
        object-fit: none;
        object-position: 200px;
        transition: opacity 0.5s ease;
        width: auto;
        height: auto;
    }

    // /UI/shizhuang/nitai/xiangqing (new, full pic no fade, higher res)
    [src*="xiangqing"] {
        object-position: 250px;
    }


    // /UI/huanxing/lihui (old, with triangles and fading out, low res)

    // [src*="/lan."] {
    //     object-position: 350px;
    // }

    // // Food
    // [src*="huodong_meishi"] {
    //     object-position: 0px;
    //     top: unset;
    //     bottom: 0;
    // }

    // // Ruby sitting
    // [src*="UI_nuanyang_renwu1"] {
    //     top: unset;
    //     bottom: 0;
    // }

    // [src*="liuhuo"] {
    //     object-position: 325px;
    // }
</style>
