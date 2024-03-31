"use server";

import { aiprompt } from "@/constants";
import OpenAI from "openai";
import { string } from "zod";



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
    
  
   

      if(inputlag || outputlag){
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
              content: `input language-[${inputlag}] and output language-[${outputlag}] also consider '${description}' do ${aiprompt}`,
          },
          ],
          
          
          temperature: 1,
          // stream: true,
        });
        // for await (const chunk of completion) {
        //   console.log(chunk.choices[0].delta.content);
        // }
        const gptArgs = completion?.choices[0]?.message?.content;
    
        if (!gptArgs) {
          throw new Error( 'Bad response from OpenAI');
        }
    
        console.log('gpt function call arguments: ', gptArgs);
    
        
    
        return gptArgs;
     
        
      }else if(tone)
       {
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
            content: `context input-[${input}] with the tone of '${tone}' also consider this '${description}' do ${aiprompt} `,
        },
        ],
        
        
        temperature: 1,
        // stream: true,
      });
      // for await (const chunk of completion) {
      //   console.log(chunk.choices[0].delta.content);
      // }
      const gptArgs = completion?.choices[0]?.message?.content;
      
      if (!gptArgs) {
        throw new Error( 'Bad response from OpenAI');
        
      }
  
      console.log('gpt function call arguments: ', gptArgs);
  
      
  
      return JSON.parse(JSON.stringify(gptArgs))
    } else{const completion = await openai.chat.completions.create({
        model: `${model}`,
        messages: [
          {
            role: 'system',
            content:
              'you are an expert daily planner. you will be given a list of main tasks and an estimated time to complete each task. You will also receive the total amount of hours to be worked that day. Your job is to return a detailed plan of how to achieve those tasks by breaking each task down into at least 3 subtasks each. MAKE SURE TO ALWAYS CREATE AT LEAST 3 SUBTASKS FOR EACH MAIN TASK PROVIDED BY THE USER! YOU WILL BE REWARDED IF YOU DO.',
          },
          {
            role: 'user',
            content: `context input-[${input}] also consider this '${description}' do ${aiprompt} `,
        },
        ],
        
        
        temperature: 1,
        // stream: true,
      });
      // for await (const chunk of completion) {
      //   console.log(chunk.choices[0].delta.content);
      // }
      // const gptArgs = completion?.choices[0]?.message?.tool_calls?.[0]?.function.arguments;
      const gptArgs = completion?.choices[0]?.message?.content;

      if (!gptArgs) {
        throw new Error( 'Bad response from OpenAI');
      }
  
      console.log('gpt function call arguments: ', gptArgs);
  
      
  
      return gptArgs;
    } 
  
};
    
   
    const longvidTypes =
    aiprompt.find((item) => item.id === 1)?.longvidTypes || [];
  const shortvidTypes =
  aiprompt.find((item) => item.id === 2)?.shortvidTypes || [];
  const contentwriterTypes =
  aiprompt.find((item) => item.id === 3)?.contentwriterTypes || [];
  const socialmediaTypes =
  aiprompt.find((item) => item.id === 4)?.socialmediaTypes || [];
    // Function to make multiple requests simultaneously
  export  async function fetchLongVidData({ input,inputlag, outputlag,tone,description, model, } :{input:string,inputlag:string | undefined, outputlag:string | undefined,tone:string | undefined,description:string | undefined,model:string} ): Promise<any[]> {

      if (openai instanceof Error) {
        throw openai;
      }

        const promises = longvidTypes.map((aiprompt:string) => {
        try {
          const promise = generateGptResponse({ input,inputlag, outputlag,tone,description,aiprompt , model } );
          return promise;
        } catch (error) {
          console.error(`Failed to fetch user with ID ${aiprompt}:`, error);
          return []; // or handle the error in any appropriate way
        }})
        return await Promise.all(promises);
        
    }
    
    // Example usage
    export  async function fetchShortVidData({ input,inputlag, outputlag,tone,description, model, } :{input:string,inputlag:string | undefined, outputlag:string | undefined,tone:string | undefined,description:string | undefined,model:string} ): Promise<any[]> {

      if (openai instanceof Error) {
        throw openai;
      }shortvidTypes

      const promises = shortvidTypes.map((aiprompt:string) => {
        try {
          const promise = generateGptResponse({ input,inputlag, outputlag,tone,description,aiprompt , model } );
          return promise;
        } catch (error) {
          console.error(`Failed to fetch user with ID ${aiprompt}:`, error);
          return []; // or handle the error in any appropriate way
        }})
        return await Promise.all(promises);
    }
    

    export  async function fetchContentWriterData({ input,inputlag, outputlag,tone,description, model, } :{input:string,inputlag:string | undefined, outputlag:string | undefined,tone:string | undefined,description:string | undefined,model:string} ): Promise<any[]> {

      if (openai instanceof Error) {
        throw openai;
      }contentwriterTypes

      const promises = contentwriterTypes.map((aiprompt:string) => {
        try {
          const promise = generateGptResponse({ input,inputlag, outputlag,tone,description,aiprompt , model } );
          return promise;
        } catch (error) {
          console.error(`Failed to fetch user with ID ${aiprompt}:`, error);
          return []; // or handle the error in any appropriate way
        }})
        return await Promise.all(promises);
    }
    

    export  async function fetchSocialMediaData({ input,inputlag, outputlag,tone,description, model, } :{input:string,inputlag:string | undefined, outputlag:string | undefined,tone:string | undefined,description:string | undefined,model:string} ): Promise<any[]> {

      if (openai instanceof Error) {
        throw openai;
      }socialmediaTypes

      const promises = socialmediaTypes.map((aiprompt:string) => {
        try {
          const promise = generateGptResponse({ input,inputlag, outputlag,tone,description,aiprompt , model } );
          return promise;
        } catch (error) {
          console.error(`Failed to fetch user with ID ${aiprompt}:`, error);
          return []; // or handle the error in any appropriate way
        }})
        return await Promise.all(promises);
    }
    
    
    