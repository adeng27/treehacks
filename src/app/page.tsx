"use client"

import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const handleMessage = useAction(api.chat.handleMessage);
  const insertMyRealMessage = useAction(api.realMessage.handleMessageSubmit);
  const entries = useQuery(api.chat.getAllEntries);
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMessage({ message });
        setMessage("");
      }}>
        <input
          className="text-black"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>
      <button onClick={() => {
        insertMyRealMessage({ fromTarget: false, content: "What is your favorite color?", timeStamp: BigInt(123) })
      }}>
        CLICK ME IF YOU DARE
      </button>
    </main>
  );
}
