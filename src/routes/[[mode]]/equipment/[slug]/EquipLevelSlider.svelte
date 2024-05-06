<script>
    import { equipLevel } from "$lib/stores";
    import RangeSlider from "svelte-range-slider-pips";

    export let gear;
</script>

<div class="notranslate">
    <p class="section-title" style="margin: 0">
        Equipment Enhancements (levels)
    </p>
    <small>Affects base stats</small>
    <div class="notranslate">
        <RangeSlider
            bind:values={$equipLevel}
            min={0}
            max={gear.maxLevel}
            float
            pips
            pipstep={5}
            first="label"
            last="label"
        />
    </div>
</div>
