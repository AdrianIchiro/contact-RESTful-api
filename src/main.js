import { web } from "./application/web";
import { logging } from "./application/logging";

web.listen(300, () => {
  logging.info("App Start");
});
