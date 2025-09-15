import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import { homePageRoute } from '@pages/home/home-page.route';
import { page404Route } from '@pages/page-404/page-404.route';
import { pathKeys } from '@shared/router';

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />;
}

const browserRouter = createBrowserRouter(
  [
    {
      children: [
        homePageRoute,
        page404Route,
        {
          path: '*',
          loader: async () => redirect(pathKeys.page404),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.PROD ? '/zendu_app_tg_mini_app' : undefined,
  }
);
