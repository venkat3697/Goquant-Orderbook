import React from 'react';

const OrderBook = ({ orderBook }) => {
    return (
        <div className="table-responsive">
            <h3>Order Book</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Bid Price</th>
                        <th>Bid Quantity</th>
                        <th>Ask Price</th>
                        <th>Ask Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {orderBook.bids.map((bid, index) => (
                        <tr key={index}>
                            <td>{parseFloat(bid[0]).toFixed(2)}</td>
                            <td>{parseFloat(bid[1]).toFixed(2)}</td>
                            <td>{parseFloat(orderBook.asks[index][0]).toFixed(2)}</td>
                            <td>{parseFloat(orderBook.asks[index][1]).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderBook;