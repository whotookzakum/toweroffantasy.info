<script>
    import EntryItemRarity from "./EntryItemRarity.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Tier from "./Tier.svelte";
    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.icon}?format=webp"
    alt=""
    width="256"
    height="256"
/>

<div class="bottom flex">
    <div class="flex">
        <CategoryIcon type={entry.element} width="30px" />
        <CategoryIcon type={entry.type} width="30px" />
    </div>
    <EntryItemRarity rarity={entry.rarity} />
</div>

<dl class="hover-details grid">
    <dt>Shatter</dt>
    <dd class="flex g-25">
        <Tier style="padding-block: 0" tier={entry.shatter.tier} />
        <span>{entry.shatter.value.toFixed(2)}</span>
    </dd>
    <dt>Charge</dt>
    <dd class="flex g-25">
        <Tier style="padding-block: 0" tier={entry.charge.tier} />
        <span>{entry.charge.value.toFixed(2)}</span>
    </dd>
    <dt class="coin-wrapper flex">
        <!-- {#if entry.banners.length > 0}
            <img
                src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem005?format=webp"
                alt="Limited-banner Simulacrum"
                width="30"
                height="30"
            />
        {:else}
            <img
                src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem004?format=webp"
                alt="Standard Banner Simulacrum"
                width="30"
                height="30"
            />
            <img
                src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem003?format=webp"
                alt=""
                width="30"
                height="30"
            />
        {/if} -->
    </dt>
</dl>

<img
    class="bg"
    src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png"
    alt=""
/>

<style lang="scss">
    .avatar {
        object-position: -30px -40px !important;
        width: 256px !important;
    }

    .bg {
        position: absolute;
        width: 120%;
        inset: -15px;
        object-position: 50%;
        opacity: 0.3;
    }

    .bottom {
        justify-content: space-between;
        align-items: end;
        z-index: 5;
    }

    .coin-wrapper {
        z-index: 8;
        position: absolute;
        right: 0.22rem;
        bottom: 1.95rem;

        img:not(:first-child) {
            margin-left: -1rem;
        }
    }

    .hover-details {
        grid-template-columns: 1fr 1fr;
        font-size: 0.7rem;
        font-weight: normal;
        position: absolute;
        padding: 0.5rem;
        width: 100%;
        height: 100%;
        padding-top: 6rem;
        z-index: 4;
        color: inherit;
        align-content: start;
        // background: linear-gradient(var(--surface1) -10%, transparent 100%);
        background: linear-gradient(transparent -10%, var(--surface1) 110%);
        transition: all 0.2s ease;
        opacity: 0;
        gap: 0.125rem;

        .flex {
            align-items: center;
        }
    }

    dl,
    dt,
    dd {
        margin: 0;
        padding: 0;
        font-size: unset;
    }

    dd {
        flex-direction: row-reverse;
        justify-content: end;
    }

    dt,
    dd span {
        text-shadow: 0 2px 6px var(--bg);
    }
</style>
