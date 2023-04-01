import { menu } from 'constants/menu';
import { StyledHeader, Logo, LogoIcon, Link, listStyles } from './Header.styled';
import { List } from '../List/List';
import { IMenu } from 'interfaces/menu';

export const Header = () => {
  const renderItem = ({ path, title }: IMenu) => <Link to={path}>{title}</Link>;

  return (
    <StyledHeader>
      <Logo>
        <LogoIcon>Fin</LogoIcon>
      </Logo>
      <nav>
        <List data={menu} styles={listStyles} renderEmpty={<></>} renderItem={renderItem} />
      </nav>
    </StyledHeader>
  );
};
