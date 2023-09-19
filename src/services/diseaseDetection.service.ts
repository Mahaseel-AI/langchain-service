import { DaprClient } from "dapr-client";

const DAPR_HOST = process.env.DAPR_HOST ?? "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT ?? "3500";
const PUBSUB_NAME = "Mahaseel-bus";
const PUBSUB_TOPIC = "chatbot-topic";

export async function pushToAzureBus() {
  const client = new DaprClient(DAPR_HOST, DAPR_HTTP_PORT, 1);
  const payload = {
    orderId: 200,
  };
  await client.pubsub.publish(PUBSUB_NAME, PUBSUB_TOPIC, payload);
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
