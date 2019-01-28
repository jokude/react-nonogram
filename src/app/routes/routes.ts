import { Home } from "../modules/home";
import { Level } from "../modules/level";
import { Levels } from "../modules/levels";

export const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: Level,
    path: "/category/:categoryId/level/:levelId",
  },
  {
    component: Levels,
    path: "/category/:categoryId",
  },
];
