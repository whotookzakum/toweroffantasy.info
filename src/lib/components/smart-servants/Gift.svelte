<script>
    import Item from "../Item.svelte";

    export let gift;
    let rarity = 0;

    function getImgSrc() {
        switch (gift.gift) {
            // Purples
            case "lava":
                rarity = 4;
                return "1"
            case "red":
                rarity = 3;
                return "2"
            case "lunar":
                rarity = 3;
                return "8"
            case "blue":
                rarity = 3;
                return "4";
            case "purple":
                rarity = 3;
                return "3";
            case "grey":
                rarity = 3;
                return "7";
            case "yellow":
                rarity = 3;
                return "5";
            case "armor":
                rarity = 3;
                return "6";
        }
    }
</script>

<Item {rarity} amount={gift.points}>
    <img
        src={`/images/Icon/ImitationGift/FightPet/servant_gift_${getImgSrc()}.png`}
        alt={gift}
        width="64"
        height="64"
        loading="lazy"
    />
</Item>
