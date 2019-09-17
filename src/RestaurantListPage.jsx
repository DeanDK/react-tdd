import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = { 
        restaurantNames: [],
        showRestaurantForm: false
    };

    handleAddRestaurant = (newRestaurantName) => {
        this.setState(state => ({
            restaurantNames: [
                newRestaurantName,
                ...state.restaurantNames,
            ],
            showRestaurantForm: false,
        }));
    };

    handleShowNewRestaurantForm = () => {
        this.setState({showRestaurantForm: true});
    };

    render() {
        const { 
            restaurantNames,
            showRestaurantForm 
        } = this.state;
        return (
            <div>
                <button
                    data-test={'addRestaurantButton'}
                    onClick={this.handleShowNewRestaurantForm}
                >
                    Add Restaurant
                </button>
                {
                    showRestaurantForm
                    ?
                    <NewRestaurantForm 
                       onSave={this.handleAddRestaurant}
                    />
                    :
                    null
                }
                <RestaurantList restaurants={restaurantNames} />
            </div>
        );
    }
};