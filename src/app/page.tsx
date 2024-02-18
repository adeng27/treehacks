"use client"

import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { Navbar } from "./components/navbar";

export default function Home() {
  const handleMessage = useAction(api.chat.handleMessage);
  // const makeTranscript = useAction(api.chat.makeTranscript);
  // const similarMessages = useAction(api.realMessage.similarInputs);
  // const insertMessages = useAction(api.realMessage.handleMessageSubmit);
  const entries = useQuery(api.chat.getAllEntries);
  const [message, setMessage] = useState("");

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="h-screen w-screen">
      <Navbar />
      <div className="h-full w-full overflow-y-scroll pb-52 bg-white">
        {entries?.map(entry => {
          return (
            <div key={entry._id}>
              {/* <p>You: {entry.input}</p> */}
              <div className="flex items-center bg-[white] p-6 md:px-24 text-md text-indigo-900 font-semibold">
                <div className="flex w-full max-w-5xl items-center justify-center space-x-4">
                  <div className="h-8 w-8 flex items-center">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse> <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path> </g> </g> </g>
                    </svg>
                  </div>
                  <div className="w-full">{entry.input}</div>
                </div>
              </div>
              {/* <p>AI: {entry.response}</p> */}
              <div className="flex items-center space-x-4 bg-[#ffffff] p-6 md:px-24 text-md text-indigo-900 italic">
                  <div className="flex w-full max-w-5xl items-start justify-center space-x-4">
                    <div className="h-10 w-10 flex items-center rounded-full bg-black/50">
                      <img
                        src="/joseph.jpeg"
                        alt="joseph bailey"
                        className="rounded-full"
                      />
                    </div>
                    <div className="w-full">{entry.response}</div>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-0 flex w-screen flex-col items-center justify-center bg-indigo-900">
        <form className="w-full flex justify-center" onSubmit={(e) => {
          e.preventDefault();
          handleMessage({ message });
          setMessage("");
        }}>
          <input
            name="message"
            className="my-3 w-5/6 rounded border-none bg-white px-4 py-2 text-sm text-black shadow-xl outline-none focus:outline-1 focus:outline-slate-200"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="absolute right-5 top-0 flex h-full items-center justify-center gap-2 hover:text-blue-500">
            Send
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
              <polygon points="20.9 30.6 21.7 56.4 64 9.5"></polygon><polygon points="0 11.2 20.1 28.7 63.3 7.6"></polygon>
            </svg>
          </button>
        </form>
      </div>
      {/* <button onClick={async () => {
        const messages = await similarMessages({input: "What is your least favorite color?"});
        console.log(messages);
      }}>
        CLICK ME IF YOU DARE
      </button> */}
      {/* <button onClick={async () => {
        insertMessages({ fromTarget: false, content: "👋", timeStamp: BigInt(6)})
      }}>
        INSERT MESSAGE
      </button> */}
    </main>
  );
}
