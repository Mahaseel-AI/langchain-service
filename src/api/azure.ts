import express from "express";
import { pushToAzureBus } from "../services/marketplace.service";

const router = express.Router();

type AzureResponse = string[];

router.get<{}, AzureResponse>("/", async (_req, res) => {
  try {
    await pushToAzureBus();
    return res.json(["😀", "😳", "🙄", "😳", "🙄"]);
  } catch (e) {
    console.error(e);
  }
});

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default router;
