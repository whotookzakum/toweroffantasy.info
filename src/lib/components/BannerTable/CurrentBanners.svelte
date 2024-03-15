<script>
    import { userLocale } from "$lib/stores";
    import EntryItem from "../EntryItem/EntryItem.svelte";
    import Icon from "@iconify/svelte";
    import { DateTime } from "luxon";

    export let currentBanners, timeNow, dateOptions;
</script>

<div>
    <div class="flex g-50" style="align-items: baseline;">
        <h3 style="font-size: var(--step-2); margin-block: 1rem 0.5rem">
            Current Banners
        </h3>
        <button on:click={() => (timeNow = DateTime.now())}>
            <span class="visually-hidden">Update time</span>
            <Icon icon="mdi:refresh" />
        </button>
    </div>

    <small style="color: var(--text2); display: block; margin-bottom: 0.5rem;">
        Last updated: <time>
            {timeNow.setLocale($userLocale).toLocaleString({
                ...dateOptions,
                second: "numeric",
                timeZoneName: "short",
            })}
        </time>
    </small>

    <ul class="entry-list">
        {#each currentBanners as banner}
            <EntryItem entry={banner.simulacrum} />
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
