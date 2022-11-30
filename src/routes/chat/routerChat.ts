import { Router } from "express";

import ChatController from "../../controllers/ChatController";

import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const routerChat = Router();

const chatController = new ChatController();

routerChat.get("/ShowMessage",
    ensureAuthenticated, chatController.index
);
routerChat.post("/SendMessage",
    ensureAuthenticated, chatController.store
);

export default routerChat;