import { Route } from "@angular/router";

import { RankingComponent } from "./ranking.component";

export const rankingRoute: Route = {
  path: "ranking",
  component: RankingComponent,
  data: {
    pageTitle: "Ranking"
  }
};
