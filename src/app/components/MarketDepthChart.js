import React from 'react';
import { Line } from 'react-chartjs-2';

const MarketDepthChart = ({ orderBook }) => {
    const bids = orderBook.bids.map(bid => parseFloat(bid[1]));
    const asks = orderBook.asks.map(ask => parseFloat(ask[1]));

    const data = {
        labels: [...Array(bids.length).keys()].map(i => `Level ${i + 1}`),
        datasets: [
            {
                label: 'Bids',
                data: bids,
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Asks',
                data: asks,
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h3>Market Depth Chart</h3>
            <Line data={data} />
        </div>
    );
};

export default MarketDepthChart;