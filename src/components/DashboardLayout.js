import { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import DashboardSidebar from './DashboardSidebar';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from '../components/GlobalStyles';
import theme from '../theme';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = ({ children }) => {
  console.log("dashbard", children)
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <DashboardLayoutRoot>
            <DashboardSidebar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
            <DashboardLayoutWrapper>
              <DashboardLayoutContainer>
                <DashboardLayoutContent>
                { children }
                </DashboardLayoutContent>
              </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
          </DashboardLayoutRoot> 
          </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default DashboardLayout;
