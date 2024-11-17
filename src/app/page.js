'use client';
import React from 'react';
import useOrderBook from './hooks/useOrderBook';
import OrderBook from './components/OrderBook';
import SpreadIndicator from './components/SpreadIndicator';
import OrderbookImbalance from './components/OrderBookImbalence';
import MarketDepthChart from './components/MarketDepthChart';

const Home = () => {
    const orderBook = useOrderBook();

    return (
        <div className="container mt-5">
            <h1 className="text-center">BTC-USD Orderbook</h1>
            <SpreadIndicator orderBook={orderBook} />
            <OrderbookImbalance orderBook={orderBook} />
            <OrderBook orderBook={orderBook} />
            <MarketDepthChart orderBook={orderBook} />
        </div>
    );
};

export default Home;