import MessageRequest from "../MessageRequest";

export default interface DiseaseDetectionMessageRequest extends MessageRequest {
  stack?: string;
}
