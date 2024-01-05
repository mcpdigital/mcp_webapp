// Import the OpenAI module with a type annotation
import OpenAI from "openai";
import { Images } from "openai/resources";

// Create an instance of OpenAI with the default constructor
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const prompt = "a photograph of an astronaut riding a horse";
// Declare the main function as an async function that takes two parameters: req and res
// The req parameter is an instance of http.IncomingMessage, which represents the incoming request
// The res parameter is an instance of http.ServerResponse, which represents the outgoing response
export async function POST(req: Request, res: Response) {
  try {
    // Call the images.generate method with the same arguments as before
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      response_format: "url",
      size: "1792x1024",
    });

    // Get the image URL from the response data
    const image_url = response.data[0].url;
    console.log("IMAGE URL IS:", image_url);
    return response.data[0].url;
    // Send a JSON response with the image URL
    //res.json({ data: image_url });
  } catch (error) {
    // Uncomment the next line to send a 500 Internal Server Error response
    //res.status(500).json({ error: "An error occurred" });
    // Log the error message to the console
    console.error("Error creating image:", error);
  }
}

// Export the main function as the default export
