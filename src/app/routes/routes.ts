import { Home } from "Pages/home";
import { LevelPage } from "Pages/level";
import { Page as LevelsPage } from "Pages/levels/components/Page";
import { NotFound } from "Pages/notFound";

export const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: LevelPage,
    path: "/category/:categoryId/level/:levelId",
  },
  {
    component: LevelsPage,
    path: "/category/:categoryId",
  },
  {
    component: NotFound,
    path: "*",
  },
];
