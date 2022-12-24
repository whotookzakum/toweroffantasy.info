<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";
    import { getCNTranslation } from "$lib/utils";

    export let data;
    const simulacra = data.items;

    let showWeaponIcon = false;
</script>

<h1>Simulacra</h1>
<p>
    Simulacra (aka Mimics) are the player's representation of the characters
    found in Tower of Fantasy. They have an associated weapon and an optional
    passive effect. Their associated matrices must be obtained separately.
</p>

<div>
    <input
        type="checkbox"
        name="imageToggle"
        id="show-weapon-toggle"
        bind:checked={showWeaponIcon}
    />
    <label for="show-weapon-toggle">Display Weapon</label>
</div>

<div class="filters">
    <section>
        <img
            src={`/images/UI/wuqi/icon_qianggong.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_fangyu.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_zengyi.png`}
            alt="Type"
            width="60"
            height="54"
        />
    </section>

    <section>
        <img
            src={`/images/UI/wuqi/icon_element_huo.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_element_lei.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_element_bing.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_element_wu.png`}
            alt="Type"
            width="60"
            height="54"
        />
        <img
            src={`/images/UI/wuqi/icon_element_powers.png`}
            alt="Type"
            width="60"
            height="54"
        />
    </section>
</div>

<h2><span style="color: var(--tier-s)">SSR</span> Simulacra</h2>

<Menu>
    {#each simulacra as simulacrum}
        <MenuItem href={simulacrum.path}>
            {#if simulacrum.chinaOnly}
                <abbr class="absolute" title="China Exclusive" />
            {/if}
            {#if showWeaponIcon}
                <img
                    src={`/images/Icon/weapon/Icon/${simulacrum.weapon.imgSrc}.png`}
                    alt={simulacrum.weapon.name}
                    width="128"
                    height="128"
                />
                <span>{simulacrum.weapon.name}</span>
            {:else}
                <img
                    src={`/images/Icon/Avatar/touxiang_${simulacrum.cnName}.png`}
                    alt={simulacrum.name}
                    width="128"
                    height="128"
                />
                <span>{simulacrum.name}</span>
            {/if}
            <div class="type-and-element">
                <img
                    src={`/images/UI/wuqi/icon_${getCNTranslation(
                        simulacrum.weapon.type
                    )}.png`}
                    alt="Type"
                    width="60"
                    height="54"
                />
                <img
                    src={`/images/UI/wuqi/icon_element_${getCNTranslation(
                        simulacrum.weapon.element
                    )}.png`}
                    alt="Element"
                    width="60"
                    height="54"
                />
            </div>
        </MenuItem>
    {/each}
</Menu>

<h2><span style="color: var(--tier-a)">SR</span> Simulacra</h2>

<style lang="scss">
    .type-and-element {
        display: flex;
        margin-bottom: 1rem;

        img {
            width: 30px;
            height: auto;
        }
    }

    .filters {
        img {
            width: 30px;
            height: auto;
        }
    }
</style>