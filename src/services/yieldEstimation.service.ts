import { DaprClient } from "dapr-client";

const DAPR_HOST = process.env.DAPR_HOST ?? "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT ?? "3500";
const PUBSUB_NAME = process.env.APP_PUBSUB_NAME ?? "mahaseel-bus";
const PUBSUB_TOPIC = process.env.APP_PUBSUB_TOPIC ?? "marketplace-request";

export async function pushToAzureBus() {
  const client = new DaprClient(DAPR_HOST, DAPR_HTTP_PORT, 1);
  const payload = {
    userId: "111111",
    type: "query",
    data: { product: "P-7581458" },
    orderId: 200,
  };
  const publish = await client.pubsub.publish(
    PUBSUB_NAME,
    PUBSUB_TOPIC,
    payload
  );
  console.log(publish);
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
