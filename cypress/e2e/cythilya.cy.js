import React from "react";

describe('about page', () => {
    it('should get title correctly when visit page', () => {
        cy.visit('https://www.cythilya.tw/about');

        cy.get('.page-title').should('have.text', '關於我');
    });
});