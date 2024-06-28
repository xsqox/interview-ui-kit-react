import { useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { useTheme } from '../useTheme';
import { saveToLocalStorage } from '../../../utils/storage';
import { ITheme } from '../types';
import * as allThemes from '../schema.json';
import { GlobalStyles } from '../GlobalStyles';
import WebFont from 'webfontloader';

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

export const ThemeSelector = () => {
  saveToLocalStorage('all-themes', allThemes);

  const availableThemes = useMemo(() => {
    return allThemes.data;
  }, [allThemes]);

  const themeNames = useMemo(() => {
    return Object.keys(availableThemes);
  }, [availableThemes]);

  const { getFonts, setTheme } = useTheme();

  const themeSwitcher = (selectedTheme: ITheme) => {
    console.info('sele', selectedTheme);
    setTheme(selectedTheme);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  const ThemeCard = ({ theme }: { theme: ITheme }) => {
    const { name, colors, font } = theme;
    return (
      <ListItem
        style={{
          backgroundColor: colors.body,
          color: colors.text,
          fontFamily: font,
        }}
      >
        <span>Click on the button to set this theme</span>
        <ThemedButton
          onClick={() => themeSwitcher(theme)}
          style={{
            backgroundColor: colors.button.background,
            color: colors.button.text,
            fontFamily: font,
          }}
        >
          {name}
        </ThemedButton>
      </ListItem>
    );
  };

  return (
    <div>
      <GlobalStyles />
      <Header>Select a Theme from below</Header>
      <List>
        {themeNames.length > 0 &&
          themeNames.map((theme) => (
            <ThemeCard
              theme={availableThemes[theme]}
              key={availableThemes[theme].id}
            />
          ))}
      </List>
    </div>
  );
};
