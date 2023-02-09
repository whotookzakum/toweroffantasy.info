<script>
    import SvelteMarkdown from "svelte-markdown";
    import SliderRadio from "../SliderRadio.svelte";
    import SliderRadioInput from "../SliderRadioInput.svelte";
    export let traits;
    let affinity = 4000;
</script>

<h3>Traits</h3>
<div class="slider-wrapper awakening-traits">
    <small class="section-header">Affinity</small>
    <SliderRadio>
        {#each traits as trait}
            <SliderRadioInput
                name="traits"
                value={trait.affinity}
                bind:group={affinity}
            />
        {/each}
    </SliderRadio>
    <SvelteMarkdown
        source={traits.find((t) => t.affinity === affinity).description}
    />
</div>

<style lang="scss">
    h3 {
        margin-bottom: var(--space-xs);
    }

    .slider-wrapper {
        display: grid;
    }
</style>
