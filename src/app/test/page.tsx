"use client"

import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";

export default function Test() {
  const handleMessage = useAction(api.chat.handleMessage);
  const similarMessages = useAction(api.realMessage.similarInputs);
  const insertMessages = useAction(api.realMessage.handleMessageSubmit);
  const nextFour = useQuery(api.realMessage.findNextFour, {timeStamp: BigInt(0)})
  const entries = useQuery(api.chat.getAllEntries);
  const [message, setMessage] = useState("");

  const runPythonFunction = async () => {
    const response = await fetch('/run-python-function', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text_content: 'Your text content here' })
    });

    const data = await response.json();
    const filename = data.csv_filename;

    // Download the generated CSV file
    const downloadUrl = `/download-csv/${encodeURIComponent(filename)}`;
    window.open(downloadUrl); // or use other methods to download the file
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <button onClick={runPythonFunction}>TEST</button>
      {/* <button onClick={async () => {
        const messages = await similarMessages({input: "What is your least favorite color?"});
        console.log(messages);
      }}>
        CLICK ME IF YOU DARE
      </button> */}
      {/* <button onClick={async () => {
        insertMessages({ fromTarget: false, content: "0", timeStamp: BigInt(0)})
        insertMessages({ fromTarget: true, content: "1", timeStamp: BigInt(1)})
        insertMessages({ fromTarget: false, content: "2", timeStamp: BigInt(2)})
        insertMessages({ fromTarget: true, content: "3", timeStamp: BigInt(3)})
        insertMessages({ fromTarget: true, content: "4", timeStamp: BigInt(4)})
        insertMessages({ fromTarget: true, content: "5", timeStamp: BigInt(5)})
      }}>
        INSERT MESSAGE
      </button> */}
      <button onClick={() => console.log(nextFour)}>
        print
      </button>
    </main>
  );
}
