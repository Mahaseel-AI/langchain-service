import MessageRequest from "../MessageRequest";

export default interface MarketplaceMessageRequest extends MessageRequest {
  stack?: string;
}
