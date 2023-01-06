<script>
    export let weapon;

    const getImgSrc = async (name) => {
        const fileName = name.toLowerCase().replace(" ", "-");
        const data = await import(`../../data/matrices/${fileName}.json`);
        const resolvedData = await data;
        return resolvedData.imgSrc;
    };
</script>

{#if weapon.recommendedMatrices.length > 0}
    <small class="section-header">{weapon.name}</small>
    <h4>Recommended Matrices</h4>
    <div class="table-wrapper">
        <table class="bg-alternate">
            <thead>
                <th>Matrix Set</th>
                <th>Explanation</th>
            </thead>
            <tbody>
                {#each weapon.recommendedMatrices as matrix}
                    <tr>
                        <th>
                            <a
                                class="matrix-link"
                                href={`/matrices/${matrix.name
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                            >
                                <img
                                    src={`/images/Icon/yizhi/256/${getImgSrc(
                                        matrix.name
                                    )}.png`}
                                    alt={`${matrix.name} matrix`}
                                    width="128"
                                    height="128"
                                />
                                {matrix.name} ({matrix.pieces})
                            </a>
                        </th>
                        <td>{matrix.description}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style lang="scss">
    .matrix-link {
        border: none;
        display: grid;

        img {
            margin-block: -1rem;
        }
    }

    .section-header {
        font-weight: 500;
        font-size: var(--step--1);
        margin-top: var(--space-xl);
        text-transform: none;
    }

    h4 {
        margin-top: 0;
    }
</style>
