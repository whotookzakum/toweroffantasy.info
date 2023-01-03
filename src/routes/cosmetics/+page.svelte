<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";

    const links = [
        {
            name: "Outfits",
            href: "/cosmetics/outfits",
            imgSrc: "UI/shizhuang/Fashion_icon/item_fashion_icon/fashion_f19"
        },
        {
            name: "Accessories",
            href: "/cosmetics/accessories",
            imgSrc: "UI/shizhuang/Fashion_icon/fashion_icon_shipin_045"
        },
        {
            name: "Headwear",
            href: "/cosmetics/headwear",
            imgSrc: "UI/shizhuang/Fashion_icon/fashion_icon_shipin_087"
        },
        {
            name: "Mi-a Outfits",
            href: "/cosmetics/mia",
            imgSrc: "Icon/item/256mia011"
        },
        {
            name: "Avatars",
            href: "/cosmetics/avatars",
            imgSrc: "Icon/Avatar/Avatar33"
        },
        {
            name: "Avatar Frames",
            href: "/cosmetics/avatar-frames",
            imgSrc: "Icon/AvatarFrame/AvatarFrame_47"
        },
        {
            name: "Chat Bubbles",
            href: "/cosmetics/chat-bubbles",
            imgSrc: "Icon/chat/qipao/icon_qipao_48"
        }
    ];
</script>

<h1>Cosmetics</h1>

<Menu>
    {#each links as link}
        <MenuItem href={link.href}>
            <img
                src={`/images/${link.imgSrc}.png`}
                alt={link.name}
                width="128"
                height="128"
            />
            <span>{link.name}</span>
        </MenuItem>
    {/each}
</Menu>
