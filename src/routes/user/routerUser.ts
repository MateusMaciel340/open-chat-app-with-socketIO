import { Router } from "express";

import UsersController from "../../controllers/UserController";
import SessionController from "../../controllers/SessionController";

import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const routerUser = Router();

const userController = new UsersController();
const sessionController = new SessionController();


routerUser.post("/Session", sessionController.store);

routerUser.get("/ListingUser",
    ensureAuthenticated, userController.index
);
routerUser.post("/PostingUser",
    userController.store
);
routerUser.put("/UpdatedUser",
    userController.update
);
routerUser.delete("/RemovingUser",
    userController.delete
);

export default routerUser;