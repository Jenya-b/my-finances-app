import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Wrapper } from './Layout.styled';

export const Layout = () => (
  <Wrapper>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
  </Wrapper>
);
