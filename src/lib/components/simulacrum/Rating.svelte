<script>
    export let weapon;
    import { onMount } from "svelte";

    let marksCanvas;
    const marksData = {
        labels: [
            "DMG output",
            "DMG reduc",
            "Healing",
            "Shatter",
            "Charge",
            "F2P",
        ],
        datasets: [
            {
                label: weapon.name,
                backgroundColor: "rgba(67, 158, 172, 0.7)",
                data: weapon.rating,
            },
        ],
        options: {
            scales: {
                r: {
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                        },
                    },
                    min: 0,
                    max: 100
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    };

    onMount(() => {
        marksCanvas = document.getElementById("marksChart");
        loadChartJs().then(() => {
            createChart();
        });
    });

    const loadChartJs = () => {
        return new Promise((resolve) => {
            if (typeof Chart === "undefined") {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/chart.js";
                script.onload = () => {
                    resolve();
                };
                document.head.appendChild(script);
            } else {
                resolve();
            }
        });
    };

    const createChart = () => {
        const radarChart = new Chart(marksCanvas, {
            type: "radar",
            data: marksData,
            options: marksData.options,
        });
    };
</script>


<div class="bio-wrapper full-bleed">
    <canvas id="marksChart" width="300px" height="300px" />
</div>

<style lang="scss">
    .bio-wrapper {
        background-color: var(--surface2);
        margin-top: var(--space-xs);
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap-reverse;
    }
</style>
