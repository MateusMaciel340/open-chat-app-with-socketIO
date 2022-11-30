import { Router } from "express";

import routerUser from "./user/routerUser";
import routerChat from "./chat/routerChat";
import routerStatus from "./status/routerStatus";

const router = Router();

router.use(
    /* #swagger.tags = ['Users']*/  routerUser
);

router.use(
    /* #swagger.tags = ['Chat']*/  routerChat
);

router.use(
    /* #swagger.tags = ['Status']*/  routerStatus
);


export default router;