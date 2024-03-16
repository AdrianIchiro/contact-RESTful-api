import { logging } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(300, () => {
  logging.info("App Start");
});
