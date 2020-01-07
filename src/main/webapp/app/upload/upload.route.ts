import { Route } from "@angular/router";

import { UploadComponent } from "./upload.component";

export const uploadRoute: Route = {
  path: "upload",
  component: UploadComponent,
  data: {
    pageTitle: "Upload"
  }
};
