import { styled } from '@material-ui/core/styles';
import  MainNavbar from 'src/components/MainNavbar';

import DashboardSidebar from "src/components/DashboardSidebar"
import DashboardLayout from 'src/components/DashboardLayout';
const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayout = ({ children }) => {
  return (
      <MainLayoutRoot>
        <MainNavbar />
        <MainLayoutWrapper>
          <MainLayoutContainer>
            <MainLayoutContent>
              {children}
              {/* <DashboardLayout children={children} /> */}
            </MainLayoutContent>
          </MainLayoutContainer>
        </MainLayoutWrapper>
      </MainLayoutRoot>
    )
  };

export default MainLayout;

MainLayout.getLayout = function getLayout(page) {
  return (
    {page}
  )
}