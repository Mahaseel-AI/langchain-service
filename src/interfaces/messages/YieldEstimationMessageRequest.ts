import MessageRequest from "../MessageRequest";

export default interface YieldEstimationMessageRequest extends MessageRequest {
  stack?: string;
}
