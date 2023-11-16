<script>
    export let group, groupName, data, name;
    // Note for Firefox: without "name" attribute, user must tab through all radio options. with "name", tabbing will skip the entire group and arrow keys must be used to select an option

    let sliderElement;

    function translateSlider(index) {
        if (sliderElement)
            sliderElement.style.transform = 
                `translateX(calc(${index + 1}00% - 100%))`;
    }
</script>

<div class="sliders-wrapper" style:--total-options={data.length}>
    {#each data as { label, value }, index}
        <input
            class="visually-hidden"
            type="radio"
            {value}
            id="{groupName}-{label}"
            {name}
            on:input={() => translateSlider(index)}
            bind:group
        />
        <label for="{groupName}-{label}">{label}</label>
    {/each}
    <div class="slider" bind:this={sliderElement} />
</div>
<p>{group}</p>

<style lang="scss">
    .sliders-wrapper {
        --total-options: 2;
        $total-options: var(--total-options);

        background: var(--surface1);
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: repeat(var(--total-options), 1fr);
        position: relative;

        // Doesn't work so using javascript solution for now
        // @for $i from 2 through $total-options {
        //     input:nth-of-type(#{$i}):checked ~ .slider {
        //         transform: translateX(100% * $i - 100%) !important;
        //     }
        // }
    }

    label {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        justify-content: center;
        position: relative;
        z-index: 10;
        padding: 0.5rem;
        font-size: var(--step--1);
    }

    .slider {
        background: var(--surface3);
        z-index: 2;
        width: calc(100% / var(--total-options));
        height: 100%;
        position: absolute;
        transition: all 0.2s ease;
    }

    input:checked + label {
        color: var(--accent);
    }

    input:focus-visible + label {
        color: red;
    }
</style>
