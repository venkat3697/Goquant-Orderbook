'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const useOrderBook = () => {
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const fetchOrderBook = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10"
        );
        setOrderBook({ bids: response.data.bids, asks: response.data.asks });
      } catch (error) {
        console.error("Error fetching order book:", error);
      }
    };

    fetchOrderBook();
    const interval = setInterval(fetchOrderBook, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return orderBook;
};

export default useOrderBook;
