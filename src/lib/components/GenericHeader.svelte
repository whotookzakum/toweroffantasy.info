<script>
    import SvelteMarkdown from "svelte-markdown";
    import RarityIcon from "./EntryItem/RarityIcon.svelte";

    export let icon = "";
    export let desc = "";
    export let eleColor = "";
    export let imgStyle = "";
    export let h1 = "";
    export let rarity = "";
    export let h1id = "";
    export let hideOverflow = false;
</script>

<div class="generic-header-wrapper flex flex-wrap g-100 box" class:hideOverflow>
    <div
        class="img-border grid"
        class:animate-border={eleColor}
        style="--ele-color: var(--element-{eleColor});"
    >
        <img src={icon} alt="" width="128" height="128" style={imgStyle} />
        <svg class="circle" xmlns="http://www.w3.org/2000/svg">
            <g>
                <ellipse
                    class="background"
                    ry="74"
                    rx="74"
                    cy="76"
                    cx="76"
                    stroke-width="4"
                />
                <ellipse
                    class="foreground"
                    ry="74"
                    rx="74"
                    cy="76"
                    cx="76"
                    stroke-width="4"
                />
            </g>
        </svg>
        <div class="bg-wrapper">
            <img
                class="bg"
                src="/Hotta/Content/Resources/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.webp"
                alt=""
            />
        </div>
    </div>
    <div style="flex: 1; flex-basis: 30ch">
        <div class="flex g-50" style="align-items: last baseline">
            <h1 id={h1id}>{h1}</h1>
            {#if rarity}
                <RarityIcon {rarity} />
            {/if}
        </div>
        <SvelteMarkdown source={desc} />
    </div>
</div>

<style lang="scss">
    .generic-header-wrapper {
        align-items: center;
        justify-content: center;
    }

    :global(.generic-header-wrapper p) {
        margin: 0;
    }

    .img-border {
        background-color: hsl(226, 45%, 12%);
        box-shadow: 0 2px 4px var(--bg);
        border-radius: 50%;
        width: 152px;
        height: 152px;
        place-content: center;
        position: relative;
        z-index: 1;

        img {
            position: relative;
            z-index: 3;
            display: flex;
        }
    }

    .hideOverflow .img-border {
        overflow: hidden;
        border: 4px solid var(--surface3);
        

        .circle {
            display: none;
        }
    }

    .circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 152px;
        height: 152px;
        z-index: 2;
        pointer-events: none;

        .background,
        .foreground {
            fill: transparent;
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            stroke: var(--ele-color);
            transform-origin: 50% 50%;
            transform: rotate(-270deg);
            opacity: 0;
            transition:
                stroke-dashoffset 0.8s ease,
                stroke-dasharray 0.8s ease,
                transform 0.8s ease,
                opacity 0.2s ease;
        }

        .background {
            stroke-dashoffset: 0;
            stroke: var(--surface3);
            opacity: 1;
        }
    }

    .animate-border:hover .circle {
        .foreground {
            stroke-dashoffset: 0;
            opacity: 1;
            transform: rotate(-135deg);
        }
    }

    .bg-wrapper {
        overflow: hidden;
        position: absolute;
        z-index: -1;
        inset: 0;
        border-radius: 50%;
    }

    .bg {
        width: 100%;
        inset: 0;
        opacity: 0.3;
    }
</style>
