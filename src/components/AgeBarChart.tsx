import {
    Chart as ChartJS,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    BarController
} from 'chart.js/auto'

import { Bar } from 'react-chartjs-2';

import { familyData } from './data';
import { useState } from 'react';

ChartJS.register(CategoryScale, Title, Tooltip, Legend, BarElement, BarController);

function AgeBarChart() {
    const [chartData] = useState({
        labels: familyData.map((person) => person.Name),
        datasets: [{
            label: 'Age',
            data: familyData.map((person) => person.Age),
            fill: false,
            borderRadius: 5,
        }],
    });
    const chartOptions = {
        scales: {
            y: {
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };


    return (
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}

export default AgeBarChart;