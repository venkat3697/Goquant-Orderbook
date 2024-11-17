'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SpreadIndicator = ({ orderBook }) => {
    // Check if bids and asks are available and have at least one entry
    const hasData = orderBook.bids.length > 0 && orderBook.asks.length > 0;

    // Calculate spread only if we have data
    const spread = hasData 
        ? parseFloat(orderBook.asks[0][0]) - parseFloat(orderBook.bids[0][0]) 
        : 0; // Default to 0 or any other value you prefer when no data is available

    const data = {
        labels: Array.from({ length: 60 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Spread',
                data: [spread],
                fill: false,
                borderColor: 'blue',
            },
        ],
    };

    return (
        <div>
            <h3>Spread Indicator</h3>
            <Line data={data} />
        </div>
    );
};

export default SpreadIndicator;