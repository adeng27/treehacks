"use client"

import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { Navbar } from "./components/navbar";

export default function Home() {
  const handleMessage = useAction(api.chat.handleMessage);
  const makeTranscript = useAction(api.chat.makeTranscript);
  const similarMessages = useAction(api.realMessage.similarInputs);
  const insertMessages = useAction(api.realMessage.handleMessageSubmit);
  const entries = useQuery(api.chat.getAllEntries);
  const [message, setMessage] = useState("");

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="h-screen w-screen">
      <Navbar />
      <div>
        {entries?.map(entry => {
          return (
            <div key={entry._id}>
              <p>You: {entry.input}</p>
              <p>AI: {entry.response}</p>
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-0 flex w-screen flex-col items-center justify-center bg-gray-800">
        <form className="w-full flex justify-center" onSubmit={(e) => {
          e.preventDefault();
          handleMessage({ message });
          setMessage("");
        }}>
          <input
            name="message"
            className="my-3 w-5/6 rounded border-none bg-[#202123] px-4 py-2 text-sm text-white shadow-xl outline-none focus:outline-1 focus:outline-white"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="absolute right-2 top-0 flex h-full items-center justify-center gap-2 hover:text-blue-500">
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
