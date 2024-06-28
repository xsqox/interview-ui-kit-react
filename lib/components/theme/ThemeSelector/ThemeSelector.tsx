import { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';

import {useTheme} from '../useTheme';
import { getFromLocalStorage } from '../../../../src/utils/storage';
import {ITheme} from "../types";

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

const ListItem = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
`;

const List = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

export const ThemeSelector = ({setter }: { setter: (theme: ITheme) =>void}) => {
    const themesFromStore = getFromLocalStorage('all-themes');
    const [data] = useState<Record<string, ITheme>>(themesFromStore.data);
    const [themes, setThemes] = useState<string[]>([]);
    const {setTheme} = useTheme();

    const themeSwitcher = (selectedTheme: ITheme) => {
        setTheme(selectedTheme);
        setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data).filter((key) => key !== 'id'));
    }, [data]);


    const ThemeCard = ({theme}: {theme: ITheme}) => {
        const { name, colors, font } = theme;
        return(
            <ListItem style={{backgroundColor: colors.body,
                color: colors.text,
                fontFamily: font}}>
                <span>Click on the button to set this theme</span>
                <ThemedButton onClick={ () => themeSwitcher(theme) }
                              style={{backgroundColor: colors.button.background,
                                  color: colors.button.text,
                                  fontFamily: font}}>
                    {name}
                </ThemedButton>
            </ListItem>
        )
    }

    return (
        <div>
            <Header>Select a Theme from below</Header>
            <List>
                {
                    themes.length > 0 &&
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
                }
            </List>
        </div>
    )
}