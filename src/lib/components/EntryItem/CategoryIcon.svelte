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
        Attack: "/Hotta/Content/Resources/UI/wuqi/icon_qianggong",
        DPS: "/Hotta/Content/Resources/UI/wuqi/icon_qianggong",
        Tank: "/Hotta/Content/Resources/UI/wuqi/icon_fangyu",
        SUP: "/Hotta/Content/Resources/UI/wuqi/icon_zengyi",

        // Elements
        Flame: "/Hotta/Content/Resources/UI/wuqi/icon_element_huo",
        FlamePhysics: "/Hotta/Content/Resources/UI/wuqi/icon_element_huowu",
        Ice: "/Hotta/Content/Resources/UI/wuqi/icon_element_bing",
        IceThunder: "/Hotta/Content/Resources/UI/wuqi/icon_element_leibing",
        Thunder: "/Hotta/Content/Resources/UI/wuqi/icon_element_lei",
        ThunderIce: "/Hotta/Content/Resources/UI/wuqi/icon_element_binglei",
        Physics: "/Hotta/Content/Resources/UI/wuqi/icon_element_wu",
        PhysicsFlame: "/Hotta/Content/Resources/UI/wuqi/icon_element_wuhuo",
        Superpower: "/Hotta/Content/Resources/UI/wuqi/icon_element_powers",

        // Food buffs
        AddSatiety: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_full",
        AddHealth: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_hp",
        IceAtk: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_bing",
        PhyAtk: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_wu",
        FireDef: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_def_huo",
        ThunderDef: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_def_lei",
        PhyDef: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_def",
        ThunderAtk: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_lei",
        FireAtk: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_huo",
        AddEnergyRecover: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_energy",
        IceDef: "/Hotta/Content/Resources/UI/AttributeIcon/icon_Item_def_bing",
        DiveSpeed: "/Hotta/Content/Resources/UI/AttributeIcon/icon_item_DiveSpeed",
        RecoverHp: "/Hotta/Content/Resources/UI/AttributeIcon/icon_item_RecoveryHp",
        CleanBuff: "/Hotta/Content/Resources/UI/AttributeIcon/icon_item_CleanBuff",
        EnergyConsumeDown: "/Hotta/Content/Resources/UI/AttributeIcon/icon_item_EnergyConsumeDown"
    };

    let imgSrc = URI_map[type] ?? "/Hotta/Content/Resources/UI/wuqi/icon_element_null";
</script>

{#if rarity > 0}
    <div class="rarity-{rarity}" style:background="var(--rarity-{rarity})" />
    <span class="visually-hidden">Rarity {rarity}</span>
{:else if tooltip}
    <Popper>
        <img
            class="flex"
            src="{imgSrc}.webp"
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
        src="{imgSrc}.webp"
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
