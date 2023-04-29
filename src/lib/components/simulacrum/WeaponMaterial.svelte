<script>
    import Item from "../Item.svelte";

    export let type, tier, amount;
    let rarity;

    function getImgSrc(material, tier) {
        setRarity(material);
        switch (material) {
            case "red":
                return `zujian/gem_p1_FireAtkAdded_${tier}`;
            case "green":
                return `zujian/gem_p4_PhyAtkAdded_${tier}`;
            case "black":
                return `zujian/gem_p3_IceDefAdded_${tier}`;
            case "blue":
                return `zujian/Item_breakthrough_D${tier}`;
            case "volt":
                if (tier === 1) return "item/Item_Mine_thunderpatch003";
                else if (tier === 2) return "item/Item_Mine_thunder";
                return `item/Item_Mine_thunder_0${tier}`;
            case "flame":
                if (tier === 1) return "item/Item_Mine_firepatch001";
                else if (tier === 2) return "item/Item_Mine_fire";
                return `item/Item_Mine_fire_0${tier}`;
            case "ice":
                if (tier === 1) return "item/Item_Mine_icepatch002";
                else if (tier === 2) return `item/Item_Mine_ice`;
                return `item/Item_Mine_ice_2`;
            case "physical":
                if (tier === 1) return "item/Item_mine_physic";
                return `item/Item_mine_physic_0${tier}`;
        }
    }

    function setRarity(m) {
        if (m === "red" || m === "green") rarity = tier + 2;
        else if (m === "blue" || m === "black") rarity = tier === 1 ? 4 : 5;
        else rarity = tier + 1
    }
</script>

<Item {amount} {rarity}>
    <img
        src={`/images/Icon/${getImgSrc(type, tier)}.webp`}
        alt={`${type} augment material`}
        width="64"
        height="64"
        loading="lazy"
    />
</Item>
