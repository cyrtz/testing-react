import ImageItem from "./ImageItem";
import React from "react";

const MOCK_IMAGE = {
    id: '1',
    title: '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
    images: ['https://bit.ly/4228IT0'],
};

describe('ImageItem', () => {
    it('should show image title correctly', () => {
        cy.mount(<ImageItem image={MOCK_IMAGE.images[0]} title={MOCK_IMAGE.title} />);
        cy.get('[data-test-id="image-item-title"]').should('have.text', '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵');
    });

    it('should show image src correctly', () => {
        cy.mount(<ImageItem image={MOCK_IMAGE.images[0]} title={MOCK_IMAGE.title} />);
        cy.get('[data-test-id="image-item-src"]').should('have.attr', 'src', 'https://bit.ly/4228IT0');
    });
});