import OpenAI from "openai";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "Your-secret-key",
});
const openai = new OpenAIApi(configuration);

export async function generatedText(promptData) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: promptData,
    });
    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
