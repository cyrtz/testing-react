import React from "react";

describe('Network Interception', () => {
    it('should intercept network request', () => {
        cy.intercept('GET', 'https://www.cythilya.tw/about/', (req) => {
            req.reply({
                statusCode: 200,
                body: 'Connection refused',
            });
        });

        cy.visit('https://www.cythilya.tw/about');
    });
});