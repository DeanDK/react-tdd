import React from 'react';

const RestaurantList = ({ restaurants }) => (
    <ul>
        {
            restaurants.map(restaurantName => (
                <li key={restaurantName}>{restaurantName}</li>
            ))
        }
    </ul>
);

export default RestaurantList;