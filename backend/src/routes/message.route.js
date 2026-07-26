import express from "express";
import {
  getConversationsForSidebar,
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middlware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id", getMessages);
router.get("/send/:id", upload.single("media"), sendMessage);
// todo: show this in the frontend

export default router;
