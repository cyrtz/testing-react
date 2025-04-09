describe('upload page', () => {

    describe('mobile', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        })

        it('test mobile', () => {
            cy.visit('https://memori-service.web.app/');

        })
    })

    it.skip('should get success message when upload image with jpeg format', () => {
        cy.visit('https://memori-ui-masonry.web.app/?serviceId=19adb08');

        cy.get('[data-cy="user-name"]').type('TZ');
        cy.get('[data-cy="message"]').type('first image');
        cy.get('[data-cy="file-upload"]').selectFile('3F_3F.jpg', {
            action: 'drag-drop',
            force: true,
        });

        cy.get('[data-cy="submit"]').click();
        cy.get('[data-cy="success-message"]').should('exist');
    });

    it.skip('should get error message when upload file with ', () => {
        cy.visit('https://memori-ui-masonry.web.app/?serviceId=19adb08');

        cy.get('[data-cy="user-name"]').type('TZ');
        cy.get('[data-cy="message"]').type('first image');
        cy.get('[data-cy="file-upload"]').selectFile('3F_3F.pdf', {
            action: 'drag-drop',
            force: true,
        });

        cy.get('[data-cy="submit"]').click();

        cy.get('[data-cy="error-message"]').should('exist');
    });


})