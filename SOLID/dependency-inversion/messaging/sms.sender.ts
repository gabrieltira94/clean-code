import { IMessageSender } from "./message.sender.interface";

export default class SMSSender implements IMessageSender {
  sendMessage(message: string) {
    console.log("Sending SMS:", message);
  }
}
