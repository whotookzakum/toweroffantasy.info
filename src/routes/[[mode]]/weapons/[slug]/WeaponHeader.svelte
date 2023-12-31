<script>
    import { weaponLevel, weaponStars } from "$lib/stores";
    import Tier from "$components/EntryItem/Tier.svelte";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";

    export let weapon
</script>

<div class="flex g-100" style="justify-content: space-between;">
    <div class="flex box g-100" style="align-items: start">
        <img
            src={weapon.assets.icon}
            alt=""
            width="200"
            height="200"
            style="align-self: center"
        />
        <ul class="stats">
            <li class="stat">
                <CategoryIcon type={weapon.element} />
                <div class="stat-text">
                    <span class="stat-name">Element</span>
                    <b class="stat-value">{weapon.element}</b>
                </div>
            </li>
            <li class="stat">
                <CategoryIcon type={weapon.category} />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{weapon.category}</b>
                </div>
            </li>
            <li class="stat">
                <Tier
                    tier={weapon.weaponAdvancements[$weaponStars - 1].shatter
                        .tier}
                    style="font-size: var(--step-2); width: 40px;"
                />
                <div class="stat-text">
                    <span class="stat-name">Shatter</span>
                    <b class="stat-value"
                        >{weapon.weaponAdvancements[
                            $weaponStars - 1
                        ].shatter.value.toFixed(2)}</b
                    >
                </div>
            </li>
            <li class="stat">
                <Tier
                    tier={weapon.weaponAdvancements[$weaponStars - 1].charge
                        .tier}
                    style="font-size: var(--step-2); width: 40px;"
                />
                <div class="stat-text">
                    <span class="stat-name">Charge</span>
                    <b class="stat-value"
                        >{weapon.weaponAdvancements[
                            $weaponStars - 1
                        ].charge.value.toFixed(2)}</b
                    >
                </div>
            </li>
        </ul>

        <ul class="stats">
            {#each weapon.weaponStats as stat}
                <li class="stat col-2">
                    <img
                        src={stat.icon}
                        alt=""
                        width="40"
                        height="40"
                        class="invert"
                    />
                    <div class="stat-text">
                        <span class="stat-name">{stat.name}</span>
                        <b class="stat-value">{$weaponLevel}</b>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
