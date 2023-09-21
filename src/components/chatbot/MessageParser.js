import { fetchData } from "../../api/Api";

class MessageParser {
  constructor() {}

  async getResponse(userMessage) {
    console.log("getResponse")
    let botResponseText;
    try {
      const apiResponse = await fetchData(userMessage);
      botResponseText = apiResponse.title;
    } catch (error) {
      botResponseText = 'API ERROR';
    }
    return { text: `Bot: ${botResponseText}`, sender: 'bot' };
  }
}

export default MessageParser;