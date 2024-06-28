import { ThemeProvider } from "styled-components";

import { ThemeSelector } from './ThemeSelector';

import data from './schema.json';
import {GlobalStyles} from "./GlobalStyles";

export default {
    component: ThemeSelector,
    decorators: [
        (Story) => (
            <ThemeProvider theme={data.data.light}>
                <GlobalStyles/>
                <Story />
            </ThemeProvider>
        ),
    ],
    title: 'ThemeSelector',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
    },
}

export const Default = {
    args: {}
};