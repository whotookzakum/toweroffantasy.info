<script>
    import Ad from "$components/Ad/Ad.svelte";
    import Meta from "$components/Meta.svelte"

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

<Meta
    title="Cosmetics | Tower of Fantasy Index"
    description="Cosmetic items allow you customize the appearance of your character and other social features. Many cosmetics require you to spend real money, but some can be acquired for free. Cosmetic gachapon items may have reruns."
    image={""}
/>

<h1>Cosmetics</h1>
<p>
    Cosmetic items allow you customize the appearance of your character and
    other social features. Many cosmetics require you to spend real money, but
    some can be acquired for free. Cosmetic gachapon items may have reruns.
</p>

<ul class="entry-list">

</ul>

<!-- <Ad unit="Banner1" /> -->

<!-- <Menu>
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
</Menu> -->
