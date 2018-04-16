   const ctx = document.getElementById('LineChart').getContext('2d');
   let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
            label: "52 Frames contributions - 2018",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1000, 900, 1200, 2000, 1250, 1390, 1500, 800, 820, 700],
        }]
    },

    // Configuration options go here
    options: {}
});
