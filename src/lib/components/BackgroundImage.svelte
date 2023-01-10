<script>
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import BG_IMAGES from "$lib/data/backgroundImages.json";

    // Stores are laggy and update late
    // Can't put this component on each page because it doesn't work inside the grid, must be at root level

    let img;
    let src;
    let loadingState;
    let animating = false;
    let externalLinkClicked;

    onMount(() => {
        img.addEventListener("animationstart", () => {
            animating = true;
        });
        img.addEventListener("animationend", () => {
            animating = false;
        });
    });

    beforeNavigate(({ from, to }) => {
        if (getImgSrc(from) === getImgSrc(to)) return;

        externalLinkClicked = Boolean(!to.route.id);
        if (externalLinkClicked) return;

        loadingState = "unload";
    });

    afterNavigate(({ from, to }) => {
        const isSameSrc = Boolean(from && getImgSrc(from) === getImgSrc(to));

        if (isSameSrc) return;
        if (externalLinkClicked) loadingState = "unload";

        const newImg = new Image();
        newImg.src = `/images/UI/${getImgSrc(to)}.png`;

        newImg
            .decode()
            .then(loadImg)
            .catch(() => loadImg(BG_IMAGES.default));

        function loadImg(src = newImg.src) {
            if (animating) {
                img.addEventListener("animationend", () => appendSrc(src), {
                    once: true,
                });
            } else {
                appendSrc(src);
            }
        }

        function appendSrc(newSrc = newImg.src) {
            src = newSrc;
            loadingState = "load";
        }
    });

    function getImgSrc(page) {
        if (!page) return BG_IMAGES.default;

        const propExists = (prop, obj) =>
            Boolean(typeof obj === "object" && prop in obj);

        if (
            propExists("slug", page?.params) &&
            propExists(page.params.slug, BG_IMAGES.slugs)
        ) {
            return find("slugs", page.params.slug);
        }

        const directories = page.route.id.split("/").filter((x) => x.length);
        return find("directories", ...directories);

        function find(category, ...props) {
            if (!props?.length) return BG_IMAGES.default;

            let src = BG_IMAGES[category];

            for (const prop of props) {
                if (propExists(prop, src)) {
                    src = src[prop];
                } else {
                    break;
                }
            }

            if (propExists("index", src)) src = src.index;

            return typeof src === "string" ? src : BG_IMAGES.default;
        }
    }
</script>

<svelte:head>
    <link
        rel="preload"
        as="image"
        href={`/images/UI/${BG_IMAGES.default}.png`}
    />
</svelte:head>

<img
    class="bg-img"
    {src}
    alt=""
    width="1080"
    height="1080"
    loading="lazy"
    data-state={loadingState}
    bind:this={img}
/>

<style lang="scss">
    @keyframes unload {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes load {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .bg-img {
        position: fixed;
        z-index: -5;
        right: 0;
        top: 0;
        object-fit: none;
        object-position: 200px;
        opacity: 0;
        width: auto;
        height: auto;

        &[data-state="unload"] {
            animation: unload 0.15s ease-in forwards;
        }

        &[data-state="load"] {
            animation: load 0.3s ease-in forwards;
        }

        &[src*="lan."] {
            object-position: 350px;
        }

        // Food
        &[src*="huodong_meishi"] {
            object-position: 0px;
            top: unset;
            bottom: 0;
        }

        // Ruby sitting
        &[src*="UI_nuanyang_renwu1"] {
            top: unset;
            bottom: 0;
        }
    }
</style>
