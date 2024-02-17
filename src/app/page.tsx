"use client"

import { useAction } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const handleMessage = useAction(api.chat.handleMessage);
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMessage({ message });
      }}>
        <input
          className="text-black"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>
    </main>
  );
}
