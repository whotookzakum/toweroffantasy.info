<script>
    import { userLocale } from "$lib/stores";
    import SimulacrumV2Query from "./SimulacrumV2Query.svelte";
    import Icon from "@iconify/svelte";

    export let currentBanners, timeNow, dateOptions;
</script>

<div>
    <div class="flex g-50" style="align-items: baseline;">
        <h3 style="font-size: var(--step-2); margin-block: 0 0.5rem">
            Current Banners
        </h3>
        <button on:click={() => (timeNow = new Date().getTime())}>
            <span class="visually-hidden">Update time</span>
            <Icon icon="mdi:refresh" />
        </button>
    </div>

    <small style="color: var(--text2); display: block; margin-bottom: 0.5rem;">
        Last updated: <time>
            {new Date(timeNow).toLocaleDateString($userLocale, {
                ...dateOptions,
                second: "numeric",
                timeZoneName: "short",
            })}
        </time>
    </small>

    <ul class="entry-list">
        {#each currentBanners as banner}
            <SimulacrumV2Query
                id={banner.simulacrumId}
                isNew={banner.totalBanners === 1}
            />
        {/each}
    </ul>
</div>

<style lang="scss">
    button {
        display: flex;
        font-size: var(--step-1);
        border-radius: 0.5rem;
        padding: 0.35rem;
        align-items: center;
        justify-content: center;

        &:hover,
        &:focus-visible {
            color: var(--accent);
            background: var(--surface2);
        }
    }
</style>
