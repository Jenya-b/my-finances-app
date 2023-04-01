import { render } from '@testing-library/react';
import { css } from 'styled-components';

import { List } from './List';

describe('List component', () => {
  const menu = ['one', 'two'];
  const renderItem = (item: string) => <div>{item}</div>;
  const styles = css``;

  it('render with data', () => {
    const tree = render(
      <List data={menu} renderEmpty={<>without data</>} renderItem={renderItem} styles={styles} />
    );

    expect(tree.getByRole('list')).toBeInTheDocument();
    expect(tree.getByText('one')).toBeInTheDocument();
    expect(tree.getByText('two')).toBeInTheDocument();
    expect(tree.queryByText('three')).not.toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });

  it('render without data', () => {
    const tree = render(
      <List renderEmpty={<>without data</>} renderItem={renderItem} styles={styles} />
    );

    expect(tree.queryByRole('list')).not.toBeInTheDocument();
    expect(tree.getByText(/without/i)).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
