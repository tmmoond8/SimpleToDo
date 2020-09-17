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
    component: Pages.NotFoundPage,
  },
];
