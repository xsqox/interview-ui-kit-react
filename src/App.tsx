import {  useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../lib/components/theme/GlobalStyles';
import {useTheme} from '../lib/components/theme/useTheme';
import {ThemeSelector} from "@/../lib/components/theme/ThemeSelector";


const Container = styled.div`
  margin: 5px auto 5px auto;
`;

// @TODO add prettier
// @TODO move generic components to ui

function App() {
  const {theme, themeLoaded, getFonts, setTheme } = useTheme();

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
      <>
        {
            themeLoaded && <ThemeProvider theme={ theme }>
              <GlobalStyles/>
              <Container style={{fontFamily: theme.font}}>
                <h1>Theme Builder</h1>
                <p>
                  This is a theming system with a Theme Switcher and Theme Builder.
                  Do you want to see the source code? <a href="https://github.com/atapas/theme-builder" target="_blank">Click here.</a>
                </p>
                <ThemeSelector setter={setTheme} />
              </Container>
            </ThemeProvider>
        }
      </>
  )
}

export default App
