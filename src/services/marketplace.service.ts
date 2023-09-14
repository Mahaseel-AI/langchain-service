import { DaprClient } from "dapr-client";

const DAPR_HOST = process.env.DAPR_HOST ?? "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT ?? "3501";
const PUBSUB_NAME = "Mahaseel-bus";
const PUBSUB_TOPIC = "requests";

export async function pushToAzureBus() {
  const client = new DaprClient(DAPR_HOST, DAPR_HTTP_PORT);
  const payload = {
    userId: "1111111111111",
    type: "query",
    data: { product: "P-581458" },
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
