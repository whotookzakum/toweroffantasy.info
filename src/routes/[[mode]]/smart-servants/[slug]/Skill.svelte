<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel } from "$lib/stores";
    import Tag from "$components/Tag.svelte";

    export let data;
</script>

<li class="box grid g-100">
    <div class="flex g-100">
        <img src={data.icon} alt="" width="64" height="64" />
        <div>
            <h3>{data.name}</h3>
        </div>
    </div>
    <SvelteMarkdown source={data.description} />
</li>

<style lang="scss">
    h3 {
        margin: 0;
        text-transform: uppercase;
        font-size: var(--step-2);
    }

    .flex {
        align-items: center;
    }

    :global(.weapon-attacks p) {
        margin: 0;
    }

    img {
        background: hsl(226, 45%, 12%);
        border: 2px solid var(--surface3);
        box-shadow: 0 2px 4px var(--bg);
        border-radius: 50%;
        padding: 0.5rem;
        place-content: center;
        box-sizing: content-box;
    }
</style>
