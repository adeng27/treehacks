import gradio as gr
import openai
import os
import subprocess

openai.api_key="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"



def transcribe(audio):
    print(audio)
    audio_filename_with_extension = audio + '.wav'
    os.rename(audio, audio_filename_with_extension)

    audio_file = open(audio_filename_with_extension, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    print(transcript)

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{
        "role": "user",
        "content": transcript["text"]
    }])
    system_message = response["choices"][0]["message"]
    subprocess.call(["say", system_message['content']])
    return system_message["content"]


ui = gr.Interface(fn=transcribe, inputs=[gr.Audio(type="filepath")], outputs="text")
ui.launch()
