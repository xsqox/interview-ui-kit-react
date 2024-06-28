import { fn } from "@storybook/test";

import {ThemeSelector } from './ThemeSelector';

export const ActionsData = {
    setter: fn(),
};

export default {
    component: ThemeSelector,
    title: 'ThemeSelector',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
}

export const Default = {
    args: {
        setter: fn()
    }
};