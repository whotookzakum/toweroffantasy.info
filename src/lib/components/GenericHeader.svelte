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
    export let alternateIcons = [];

    let allIcons = [icon, ...alternateIcons];
    let iconIndex = 0;

    function cycleIcons() {
        if (iconIndex + 1 < allIcons.length) iconIndex++;
        else iconIndex = 0;
    }
</script>

<div class="generic-header-wrapper flex flex-wrap g-100 box" class:hideOverflow>
    <div
        class="img-border grid"
        class:animate-border={eleColor}
        style="--ele-color: var(--element-{eleColor});"
    >
        <img
            src={allIcons[iconIndex]}
            alt=""
            width="128"
            height="128"
            style={imgStyle}
        />
        {#if allIcons.length > 1}
            <button class="box" on:click={cycleIcons}>Toggle Skin</button>
        {/if}
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

    button {
        position: absolute;
        bottom: -0.25rem;
        justify-self: center;
        background: var(--bg);
        z-index: 4;
        padding: 0.25rem 0.5rem;
        font-size: var(--step--2);
        border: 1px solid rgb(255, 255, 255, 0.06);
        --bs: 0 2px 4px rgba(0, 0, 0, 0.3);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        transition:
            all 0.1s,
            outline 0s;

        &:hover,
        &:focus-visible {
            background: var(--surface1);
            color: var(--accent);
        }

        &:active {
            transform: translateY(1px);
            box-shadow:
                var(--bs),
                inset 0 2px 8px rgba(0, 0, 0, 0.1);
            filter: brightness(0.97);
        }
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

    .animate-border:has(:focus-visible, :hover) .circle {
        .foreground {
            stroke-dashoffset: 0;
            opacity: 1;
            transform: rotate(-135deg);
        }
    }

    @supports not selector(:has(*)) {
        .animate-border:where(:focus-within, :hover) .circle {
            .foreground {
                stroke-dashoffset: 0;
                opacity: 1;
                transform: rotate(-135deg);
            }
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
