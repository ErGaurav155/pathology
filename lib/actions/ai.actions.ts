"use server";

import OpenAI from "openai";



const openai = setupOpenAI();
function setupOpenAI() {
  if (!process.env.OPENAI_API_KEY) {
    return new Error( 'OpenAI API key is not set');
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export const generateGptResponse = async ({ input,inputlag, outputlag,tone,description,aiprompt, model, } :{input:string,inputlag:string | undefined, outputlag:string | undefined,tone:string | undefined,description:string | undefined,aiprompt:string,model:string}) => {
    
  
      // check if openai is initialized correctly with the API key
      if (openai instanceof Error) {
        throw openai;
      }
  
      const completion = await openai.chat.completions.create({
        model: `${model}`,
        messages: [
          {
            role: 'system',
            content:
              'you are an expert daily planner. you will be given a list of main tasks and an estimated time to complete each task. You will also receive the total amount of hours to be worked that day. Your job is to return a detailed plan of how to achieve those tasks by breaking each task down into at least 3 subtasks each. MAKE SURE TO ALWAYS CREATE AT LEAST 3 SUBTASKS FOR EACH MAIN TASK PROVIDED BY THE USER! YOU WILL BE REWARDED IF YOU DO.',
          },
          {
            role: 'user',
            content: `[${input}with${tone}i want to ${description} into ${outputlag} from ${inputlag}]${aiprompt}`,
          },
        ],
        
        
        temperature: 1,
        // stream: true,
      });
      // for await (const chunk of completion) {
      //   console.log(chunk.choices[0].delta.content);
      // }
      const gptArgs = completion?.choices[0]?.message?.tool_calls?.[0]?.function.arguments;
  
      if (!gptArgs) {
        throw new Error( 'Bad response from OpenAI');
      }
  
      console.log('gpt function call arguments: ', gptArgs);
  
      
  
      return JSON.parse(gptArgs);
    } 
  