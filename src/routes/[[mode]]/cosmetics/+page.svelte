<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import Ad from "$lib/components/Ad.svelte";

    const links = [
        {
            name: "Outfits",
            href: "/cosmetics/outfits",
            imgSrc: "UI/shizhuang/Fashion_icon/item_fashion_icon/fashion_f19",
        },
        {
            name: "Accessories",
            href: "/cosmetics/accessories",
            imgSrc: "UI/shizhuang/Fashion_icon/fashion_icon_shipin_045",
        },
        {
            name: "Headwear",
            href: "/cosmetics/headwear",
            imgSrc: "UI/shizhuang/Fashion_icon/fashion_icon_shipin_087",
        },
        {
            name: "Refit",
            href: "/cosmetics/refit",
            imgSrc: "UI/shizhuang/Fashion_icon/Overlooker",
        },
        {
            name: "Mi-a Outfits",
            href: "/cosmetics/mia",
            imgSrc: "Icon/item/256mia011",
        },
        {
            name: "Avatars",
            href: "/cosmetics/avatars",
            imgSrc: "Icon/Avatar/Avatar33",
        },
        {
            name: "Avatar Frames",
            href: "/cosmetics/avatar-frames",
            imgSrc: "Icon/AvatarFrame/AvatarFrame_47",
        },
        {
            name: "Chat Bubbles",
            href: "/cosmetics/chat-bubbles",
            imgSrc: "Icon/chat/qipao/icon_qipao_48",
        },
    ];
</script>

<svelte:head>
    <title>Cosmetics | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Cosmetic items allow you customize the appearance of your character and other social features. Many cosmetics require you to spend real money, but some can be acquired for free."
    />
    <meta property="og:title" content="Cosmetics" />
    <meta
        property="og:description"
        content="Cosmetic items allow you customize the appearance of your character and other social features. Many cosmetics require you to spend real money, but some can be acquired for free. Cosmetic gachapon items may have reruns."
    />
    <meta
        property="og:image"
        content="/images/UI/shizhuang/Fashion_icon/item_fashion_icon/fashion_f19.webp"
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Cosmetics</h1>
<p>
    Cosmetic items allow you customize the appearance of your character and
    other social features. Many cosmetics require you to spend real money, but
    some can be acquired for free. Cosmetic gachapon items may have reruns.
</p>

<Ad unit="Banner1" />

<Menu>
    {#each links as link}
        <MenuItem href={link.href}>
            <img
                src={`/images/${link.imgSrc}.webp`}
                alt={link.name}
                width="128"
                height="128"
            />
            <span class="menu-item-name">{link.name}</span>
        </MenuItem>
    {/each}
</Menu>
