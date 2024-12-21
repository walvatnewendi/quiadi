import { Chart, Axis, Legend } from 'some_charting_library';

const chart = new Chart({
    // Other chart configuration options
});

chart.axis('x', {
    align: 'left',  // Align x-axis labels to the left
});

chart.legend({
    align: 'left',  // Align legend to the left of the chart
});

chart.render();
