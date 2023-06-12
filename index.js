// const { Configuration, OpenAIApi } = require("openai");
// const fs = require('fs');
// const path = require('path');

// async function generateSummary() {
//   const configuration = new Configuration({
//     apiKey: process.env.ypur_api_key,
//   });
//   const openai = new OpenAIApi(configuration);

//   // Get the absolute path of the transcript file
//   const transcriptFilePath = path.resolve('transcript.txt');

//   // Read the transcript file
//   const transcript = fs.readFileSync(transcriptFilePath, 'utf8');

//   // Define your custom prompt for summarization
//   const prompt = `
//     Summarize the following transcript:

//     ${transcript}`;

//   // Set options for the completion request
//   const options = {
//     engine: 'text-davinci-003',
//     prompt: prompt,
//     maxTokens: 100,
//     temperature: 0.3,
//     feedback: true,
//     humanLoop: true,
//   };

//   // Generate the summary using the GPT-3.5 model
//   const response = await openai.Completion.create(options);

//   // Get the summary text
//   const summary = response.choices[0].text.trim();

//   // Print the summary
//   console.log('Summary:', summary);
// }

// // Call the generateSummary function
// generateSummary();



const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

async function getAiResponse(topic) {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: topic,
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.7
  });
  console.log(text);
}
getAiResponse("Your Prompt here");