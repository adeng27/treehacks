import OpenAI from "openai";
import { Uploadable } from "openai/uploads";


const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) throw Error("OPENAI_API_KEY is not set");

const openai = new OpenAI({ apiKey });


export default openai;

export async function getEmbedding(text: string) {
    const response = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: text
    })

    const embedding = response.data[0]?.embedding;

    if (!embedding) throw Error("Error generating embedding");

    return embedding;
}

// export async function getTranscript() {
//     // const temp: FileLike = await fs.promises.readFile(filepath)
//     // const audioBuffer: Uploadable = await fs.readFileSync(filepath);
//     // const response = await fetch(
//     //     "https://github.com/audio-samples/audio-samples.github.io/raw/master/samples/wav/ted_speakers/SalmanKhan/sample-1.wav"
//     // );
//     // const audio = await response.blob();
//     const transcript = openai.audio.transcriptions.create({
//         model: "whisper-1",
//         file: await fetch("https://github.com/audio-samples/audio-samples.github.io/raw/master/samples/wav/ted_speakers/SalmanKhan/sample-1.wav")
//     })
//     return transcript;
// }