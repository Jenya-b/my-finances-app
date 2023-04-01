import { IMenu } from 'interfaces/menu';
import { path } from 'modules/router/path';

export const menu: IMenu[] = [
  { title: 'Распределено', path: path.home },
  { title: 'Отложено', path: path.setAside },
];
