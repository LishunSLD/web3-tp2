import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const chart2 = new Chart(document.querySelector("#chart2"), {
    type: 'line',
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Commit History',
            data: [2087, 2289, 2046, 2086, 2010, 2275, 2333, 2201, 2402, 2664, 2424, 2618, 2510, 2892, 2961],
            borderColor: '#636',
            backgroundColor: 'rgba(102, 51, 102, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 600
        },
        plugins: {
            legend: {
                labels: {
                    color: '#EA0'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(238, 171, 0, 0.1)' },
                ticks: { color: '#EA0' }
            },
            x: {
                grid: { color: 'rgba(238, 171, 0, 0.1)' },
                ticks: { color: '#EA0' },
                min: 0,
                max: 7
            }
        }
    }
});

let chart = new Chart(document.querySelector("#chart1"), {
    type: "polarArea",
    data: {
        labels: ["16–24", "25–34", "35–44", "45–54", "55–64", "65+"],
        datasets: [
            {
                data: [19, 21, 17, 15, 4, 3],
                backgroundColor: [
                    "rgba(239, 85, 85, 0.5)",
                    "rgba(239, 85, 239, 0.5)",
                    "rgba(85, 85, 239, 0.5)",
                    "rgba(85, 239, 85, 0.5)",
                    "rgba(239, 239, 85, 0.5)",
                    "rgba(85, 239, 239, 0.5)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                display: false,
                ticks: {
                    display: false
                }
            }
        }
    }

});

setInterval(() => {
    for (let ds of chart.data.datasets) {
        for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = Math.round(Math.random() * 25 + 5);
        }
    }
    chart.update();
}, 1000);


function anim(back = false, f = 0) {
    const x = (back ? 1 - f / 250 : f / 250) * chart2.data.labels.length - 7;

    chart2.options.scales.x.min = x;
    chart2.options.scales.x.max = x + 7;
    chart2.update('none');

    if (f < 250) {
        requestAnimationFrame(() => anim(back, f + 1));
    } else {
        setTimeout(() => requestAnimationFrame(() => anim(!back)), 100);
    }
}

setTimeout(() => anim(), 500);

let chart3 = new Chart(document.querySelector("#chart3"), {
    type: "doughnut",
    data: {
        labels: ["C", "C++", "OpenSCAD"],
        datasets: [
            {
                data: [6, 1, 2],
                backgroundColor: [
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 183, 0, 1)",
                    "rgba(208, 255, 0, 1)"
                ],
                hoverOffset: 20,
                borderWidth: 0,
                borderRadius: 1,
                spacing: 1
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});