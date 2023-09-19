import "dotenv/config";

import { ServiceBusClient } from "@azure/service-bus";

const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING || "";

const sbClient = new ServiceBusClient(connectionString);

const subscription = "langchain-service";
const topic = "response";

const yieldSender = sbClient.createSender("yield-estimation-request");
const disesaseSendwer = sbClient.createSender("disease-detection-request");
const receiver = sbClient.createReceiver(topic, subscription);

const main = async () => {
  console.log("start");
  for (let i = 0; i < 10; i++) {
    const message = {
      body: {
        id: i,
        name: "test",
      },
      label: "test",
    };
    await yieldSender.sendMessages({
      ...message,
      body: { ...message.body, event: "YIELD_RESPONSE" },
    });
    await disesaseSendwer.sendMessages({
      ...message,
      body: { ...message.body, event: "DISEASE_RESPONSE" },
    });
  }
  console.log("end");
};

const myMessageHandler = async (message: any) => {
  // your code here
  console.log(`message.body: ${message.body}`);
};
const myErrorHandler = async (args: any) => {
  console.log(
    `Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `,
    args.error,
  );
};
receiver.subscribe({
  processMessage: myMessageHandler,
  processError: myErrorHandler,
});

main();
