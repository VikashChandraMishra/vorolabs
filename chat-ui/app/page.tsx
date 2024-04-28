import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {

  const chats = ["Tailwind UI tutorial", "Golang", "DMA", "FastAPI"];
  const agents = ["GPT-4", "GPT-3.5", "OpenAI", "Bard"];

  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className="w-1/5 py-4 bg-gray-900 text-white flex flex-col items-center">
          {/* new chat */}
          <div className="w-5/6 my-4 px-2 py-2 hover:bg-slate-700 rounded-xl flex justify-between items-center font-semibold text-sm cursor-pointer">
            <div className="flex items-center">
              <img src="/images/logos/chat-logo.png" width={30} alt="" />
              <span className="pl-2">New Chat</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md"><path fillRule="evenodd" clipRule="evenodd" d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z" fill="currentColor"></path></svg>
          </div>

          {/* chat history */}
          <div className="w-full my-4 flex flex-col items-center">
            <Accordion
              type="single"
              collapsible
              className="w-5/6 px-2 py-2 align-left text-slate-400 text-xs"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Agent Selector</AccordionTrigger>
                <AccordionContent>
                  {
                    agents.map((agent) => (
                      <div className="w-5/6 px-2 py-2 hover:bg-slate-700 rounded-xl text-sm cursor-pointer">{agent}</div>
                    ))
                  }
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* model selector */}
          <div className="w-full my-4 flex flex-col items-center">
            <Accordion
              type="single"
              collapsible
              className="w-5/6 px-2 py-2 align-left text-slate-400 text-xs"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Chats</AccordionTrigger>
                <AccordionContent>
                  {
                    chats.map((chat) => (
                      <div className="w-5/6 px-2 py-2 hover:bg-slate-700 rounded-xl text-sm cursor-pointer">{chat}</div>
                    ))
                  }
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
        <div className="flex-1 flex flex-col ">
          <div className="bg-gray-200 px-4 py-2">
            <h1 className="text-lg font-semibold">Agent</h1>
          </div>

          {/* chat */}
          <div className="h-screen bg-gray-600 px-4 py-2 flex flex-col justify-end items-center">
            <Input
              type="text"
              placeholder="Message VoroLabs..."
              className="w-2/3 my-4 py-6 rounded-xl"
            />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute right-52 bottom-8 my-2 hover:bg-slate-600 rounded-xl text-black dark:text-black cursor-pointer"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
