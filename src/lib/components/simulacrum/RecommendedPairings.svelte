<script>
    export let weapon;
</script>

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Weapon</th>
            <th>Explanation</th>
        </thead>
        <tbody>
            {#each weapon.recommendedPairings as recWep}
                <tr>
                    <th>
                        <div class="link-wrapper">
                            <a
                                class="matrix-link"
                                href={recWep.pathToSimulacrum}
                            >
                                <div class="img-wrapper">
                                    <img
                                        src={`/images/Icon/weapon/Icon/${recWep.imgSrc}.webp`}
                                        alt={recWep.wepName}
                                        width="128"
                                        height="128"
                                        loading="lazy"
                                    />
                                </div>
                                <span>{recWep.wepName}</span>
                            </a>
                        </div>
                    </th>
                    <td>{recWep.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .matrix-link {
        border: none;
        font-size: var(--step--1);
        display: block;

        .img-wrapper {
            position: relative;
        }

        img {
            margin-block: -1.25rem;
        }

        span {
            border-bottom: 0.2em solid var(--accent);
            text-transform: none;
        }

        i {
            text-transform: uppercase;
            position: absolute;
            right: 0.5rem;
            bottom: 0.5rem;
            line-height: 1;
            font-style: normal;
            font-weight: 700;
            text-shadow: 0 1px 3px black;
            font-size: var(--step-1);
            color: white;
        }
    }
</style>
