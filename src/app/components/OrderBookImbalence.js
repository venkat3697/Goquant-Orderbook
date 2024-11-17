import React from 'react';

const OrderbookImbalance = ({ orderBook }) => {
    const totalBids = orderBook.bids.reduce((acc, bid) => acc + parseFloat(bid[1]), 0);
    const totalAsks = orderBook.asks.reduce((acc, ask) => acc + parseFloat(ask[1]), 0);
 const imbalance = totalBids - totalAsks;

    return (
        <div>
            <h3>Orderbook Imbalance</h3>
            <p>Imbalance: {imbalance.toFixed(2)}</p>
        </div>
    );
};

export default OrderbookImbalance;