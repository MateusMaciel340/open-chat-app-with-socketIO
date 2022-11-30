import { Router } from "express";

import StatusController from "../../controllers/StatusController";

import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const routerStatus = Router();

const statusController = new StatusController();

routerStatus.put("/UpdatedStatus",
    ensureAuthenticated, statusController.update
);

export default routerStatus;