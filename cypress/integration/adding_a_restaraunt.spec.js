describe('adding a restaraunt', () => {
    it('display the restaraunt in the list', () => {
        const restaurantName = 'Sushi Place';
        // visit this url
        cy.visit('http://localhost:1234')
        
        // click on the add button
        cy.get('[data-test="addRestaurantButton"]')
            .click();

        // enter restaraunt name
        cy.get('[data-test="newRestaurantName"]')
            .type(restaurantName);

        // click on the save button
        cy.get('[data-test="saveNewRestaurantButton"]')
            .click();

        // check if page contains new restaraunt
        cy.contains(restaurantName); 
    });
});