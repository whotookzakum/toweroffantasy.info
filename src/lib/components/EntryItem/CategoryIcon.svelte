<script>
    import categoriesText from "./CategoriesText.json";
    import Popper from "$components/Popper.svelte";

    export let type;
    export let width = "60";
    export let style = "";
    export let tooltip = false;
    export let rarity = 0;

    const URI_map = {
        // Weapon types
        DPS: "/UI/wuqi/icon_qianggong",
        Tank: "/UI/wuqi/icon_fangyu",
        SUP: "/UI/wuqi/icon_zengyi",

        // Elements
        Flame: "/UI/wuqi/icon_element_huo",
        FlamePhysics: "/UI/wuqi/icon_element_huowu",
        Ice: "/UI/wuqi/icon_element_bing",
        IceThunder: "/UI/wuqi/icon_element_leibing",
        Thunder: "/UI/wuqi/icon_element_lei",
        ThunderIce: "/UI/wuqi/icon_element_binglei",
        Physics: "/UI/wuqi/icon_element_wu",
        PhysicsFlame: "/UI/wuqi/icon_element_wuhuo",
        Superpower: "/UI/wuqi/icon_element_powers",

        // Food buffs
        AddSatiety: "/UI/AttributeIcon/icon_Item_full",
        AddHealth: "/UI/AttributeIcon/icon_Item_hp",
        IceAtk: "/UI/AttributeIcon/icon_Item_bing",
        PhyAtk: "/UI/AttributeIcon/icon_Item_wu",
        FireDef: "/UI/AttributeIcon/icon_Item_def_huo",
        ThunderDef: "/UI/AttributeIcon/icon_Item_def_lei",
        PhyDef: "/UI/AttributeIcon/icon_Item_def",
        ThunderAtk: "/UI/AttributeIcon/icon_Item_lei",
        FireAtk: "/UI/AttributeIcon/icon_Item_huo",
        AddEnergyRecover: "/UI/AttributeIcon/icon_Item_energy",
        IceDef: "/UI/AttributeIcon/icon_Item_def_bing",
        DiveSpeed: "/UI/AttributeIcon/icon_item_DiveSpeed",
        RecoverHp: "/UI/AttributeIcon/icon_item_RecoveryHp",
        CleanBuff: "/UI/AttributeIcon/icon_item_CleanBuff",
        EnergyConsumeDown: "/UI/AttributeIcon/icon_item_EnergyConsumeDown"
    };

    let imgSrc = URI_map[type] ?? "/UI/wuqi/icon_element_null";
</script>

{#if rarity > 0}
    <div class="rarity-{rarity}" style:background="var(--rarity-{rarity})" />
    <span class="visually-hidden">Rarity {rarity}</span>
{:else if tooltip}
    <Popper>
        <img
            class="flex"
            src="https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp{imgSrc}.webp"
            alt={type}
            width="60"
            height="54"
            {style}
            style:width
            loading="lazy"
        />
        <span slot="tooltip">{categoriesText[type]}</span>
    </Popper>
{:else}
    <img
        src="https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp{imgSrc}.webp"
        alt={type}
        width="60"
        height="54"
        {style}
        style:width
        loading="lazy"
    />
{/if}

<style lang="scss">
    img, button {
        width: 40px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
    }

    div:not(.rarity-0) {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
</style>
