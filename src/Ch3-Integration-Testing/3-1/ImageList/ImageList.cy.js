import React from 'react';
import ImageList from './ImageListMockData';

describe('ImageList', () => {
    it('should render correct image items when have data', () => {
        const mockedData = {
            products: [
                {
                    id: '1',
                    title: '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
                    images: ['https://bit.ly/4228IT0'],
                },
                {
                    id: '2',
                    title: '島波海道。單車跳島之旅',
                    images: ['https://bit.ly/4b5nLPO'],
                },
            ],
        };
        cy.mount(<ImageList data={mockedData} />);
        cy.contains('打造高速網站');
        cy.contains('島波海道');
    });
});