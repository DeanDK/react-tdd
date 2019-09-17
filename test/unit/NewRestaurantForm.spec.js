import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';


describe('NewRestaurantForm', () => {
    describe('clicking the save button', () => {
        it('calls the onSave handler', () => {

            // mock the function
            const saveHandler = jest.fn();

            // mount the component
            const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

            // find the input and simulate onChange event
            wrapper
                .find('[data-test="newRestaurantName"]')
                .simulate('change', { target: { value: 'Sushi place'}});

            // find the save button and simulate onClick event
            wrapper
                 .find('[data-test="saveNewRestaurantButton"]')
                 .simulate('click');

            // expect saveHandler(onSave) to be called with 'Sushi place' argument
            expect(saveHandler).toHaveBeenCalledWith('Sushi place');
        });
    }); 
});