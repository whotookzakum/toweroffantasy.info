<script>
    export let weapon;
</script>

<h4>
    <span class="section-header">{weapon.name}&#20;</span>
    <span>Recommended Matrices</span>
</h4>
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
                        <div class="matrix-link">
                            <div class="img-wrapper">
                                <img
                                    src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                                    alt={`${matrix.name} matrix`}
                                    width="128"
                                    height="128"
                                    loading="lazy"
                                />
                                <i>×{matrix.pieces}</i>
                            </div>
                            <a
                                href={`/matrices/${matrix.name
                                    .toLowerCase()
                                    .replace(" ", "-")}`}>{matrix.name}</a
                            >
                        </div>
                    </th>
                    <td>{matrix.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    thead th:first-of-type {
        text-align: center;
    }

    .matrix-link {
        border: none;
        font-size: var(--step--1);
        display: block;
        text-align: center;
        position: relative;

        .img-wrapper {
            align-items: center;
            display: flex;
            height: 100px;
            justify-content: center;
            overflow: hidden;
            overflow: -moz-hidden-unscrollable;
            overflow: clip;
            position: relative;
            width: 100px;
        }

        a {
            border-bottom: 0.2em solid var(--accent);
            text-transform: none;

            &::before {
                content: "";
                inset: 0;
                position: absolute;
            }
        }

        i {
            position: absolute;
            right: 4px;
            bottom: 4px;
            line-height: 1;
            font-style: normal;
            font-weight: 700;
            text-shadow: -1px -1px 0 #0d0f1c, 0 -1px 0 #0d0f1c,
                1px -1px 0 #0d0f1c, 1px 0 0 #0d0f1c, 1px 1px 0 #0d0f1c,
                0 1px 0 #0d0f1c, -1px 1px 0 #0d0f1c, -1px 0 0 #0d0f1c,
                0 0 0.3rem rgb(0 0 0 / 60%);
            font-size: var(--step-2);
            color: white;
            white-space: nowrap;
        }
    }

    .section-header {
        color: var(--accent);
        font-weight: 500;
        font-size: var(--step--1);
        // margin-top: var(--space-xl);
        text-transform: none;
    }

    // h4 {
    //     margin-top: 0;
    // }
</style>
