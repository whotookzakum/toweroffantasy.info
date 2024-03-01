<script>
    import RangeSlider from "svelte-range-slider-pips";
    import { weaponLevel } from "$lib/stores";
</script>

<div>
    <p class="section-title">Weapon Level</p>
    <small>Affects skill damage and weapon stats</small>
    <RangeSlider
        bind:values={$weaponLevel}
        min={0}
        max={200}
        float
        pips
        first="label"
        last="label"
    />
</div>
