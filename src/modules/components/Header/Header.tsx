import { menu } from 'constants/menu';
import { StyledHeader, Logo, LogoIcon, List, Link } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <Logo>
      <LogoIcon>Fin</LogoIcon>
    </Logo>
    <nav>
      <List>
        {menu.map(({ title, path }) => (
          <li key={title}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </List>
    </nav>
  </StyledHeader>
);
