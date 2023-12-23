<script>
    export let src;
    export let top;
</script>

<div class="bg-img-wrapper" class:top>
    <img
        class="bg-img"
        {src}
        alt="Background"
        width="1080"
        height="1080"
        loading="lazy"
    />
</div>

<style lang="scss">
    .bg-img-wrapper {
        background-color: var(--bg);
        position: fixed;
        z-index: -5;
        right: 0;
        top: 0;
    }

    .top {
        z-index: -4;
        // animation: 1s ease-in 1s infinite forwards both running fade-in;
        animation: 1s ease-in both running fade-in;
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

    [src*="/lan."] {
        object-position: 350px;
    }

    // Food
    [src*="huodong_meishi"] {
        object-position: 0px;
        top: unset;
        bottom: 0;
    }

    // Ruby sitting
    [src*="UI_nuanyang_renwu1"] {
        top: unset;
        bottom: 0;
    }

    [src*="liuhuo"] {
        object-position: 325px;
    }
</style>
