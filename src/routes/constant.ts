import * as Pages from '../pages';

export default [
  {
    path: '/',
    exact: true,
    component: Pages.TodayPage,
  },
  {
    path: '/write',
    component: Pages.WriteTodoPage,
  },
  {
    path: '/',
    component: Pages.NotFoundPage,
  },
];
