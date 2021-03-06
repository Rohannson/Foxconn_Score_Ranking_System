import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { errorRoute, navbarRoute } from "./layouts";
import { rankingRoute } from "app/ranking/ranking.route";
import { DEBUG_INFO_ENABLED } from "app/app.constants";
import { uploadRoute } from "app/upload/upload.route";

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute, rankingRoute, uploadRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...LAYOUT_ROUTES,
        {
          path: "admin",
          loadChildren: "./admin/admin.module#JiuzhangquanzhankeAdminModule"
        }
      ],
      { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class JiuzhangquanzhankeAppRoutingModule {}
