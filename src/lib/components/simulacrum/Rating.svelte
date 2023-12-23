<script>
    export let weapon;
    import { onMount } from "svelte";

    const getColorByElement = (opacity) => {
        switch (weapon.element) {
            case "altered":
                return `hsla(134, 100%, 85%, ${opacity})`;
            case "volt":
                return `hsla(295, 40%, 58%, ${opacity})`;
            case "ice":
                return `hsla(200, 60%, 55%, ${opacity})`;
            case "flame":
                return `hsla(6, 57%, 47%, ${opacity})`;
            case "physical":
                return `hsla(34, 69%, 51%, ${opacity})`;
            default:
                return `hsla(188, 44%, 47%, ${opacity})`;
        }
    };

    const labelColor = "hsl(0, 0%, 73%)";
    const gridColor = "hsla(220, 15%, 24%, 1)";

    let marksCanvas;
    const marksData = {
        labels: [
            "DMG output",
            "DMG reduction",
            "Healing",
            "Shatter",
            "Charge",
            "F2P",
        ],
        datasets: [
            {
                label: weapon.name,
                backgroundColor: getColorByElement(0.7),
                borderColor: getColorByElement(0.9),
                data: weapon.meta.rating,
            },
        ],
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: gridColor,
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                    grid: {
                        color: gridColor,
                    },
                    pointLabels: {
                        font: {
                            size: 16,
                        },
                        color: labelColor,
                    },
                    min: 0,
                    max: 100,
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

<div class="chart-wrapper box full-bleed">
    <canvas id="marksChart" />
</div>

<style lang="scss">
    .chart-wrapper {
        margin-block: 1rem;
    }

    canvas {
        width: auto;
        max-height: 300px;
    }
</style>
