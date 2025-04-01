import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import ImageList from "./ImageListAxios";
import axios from "axios";

jest.mock('axios');

describe('ImageList', () => {
    it('should render correct image items when have data', async () => {
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
        axios.get.mockResolvedValue({ data: mockedData });

        const { getAllByTestId } = await act(async () => render(<ImageList />));

        expect(getAllByTestId('image-item-title')).toHaveLength(2);
    })
})