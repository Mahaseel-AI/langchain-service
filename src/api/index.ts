import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import azure from "./azure";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/azure", azure);

export default router;
