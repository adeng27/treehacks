import gradio as gr
import openai
import os
import subprocess
import requests
from pygame import mixer

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

    # subprocess.call(["say", system_message['content']])
    url = "https://api.elevenlabs.io/v1/text-to-speech/cKkTaW5pHUXkL6T5w5p1/stream"
    querystring = {"output_format": "mp3_22050_32"}

    payload = {
        "text": system_message['content'],
        "voice_settings": {
            "use_speaker_boost": True,
            "similarity_boost": .6,
            "stability": .1
        }
    }
    r = requests.post(url, headers={'xi-api-key': "3766024a57a6eb25723a2eec16fae7c5"}, json=payload)

    output_filename = "reply.mp3"
    with open(output_filename, "wb") as output:
        output.write(r.content)

    # headers = {
    #     "xi-api-key": "3766024a57a6eb25723a2eec16fae7c5",
    #     "Content-Type": "application/json"
    # }

    # response = requests.request("POST", url, json=payload, headers=headers, params=querystring)
    mixer.init()
    mixer.music.load("reply.mp3")
    mixer.music.play()
    return system_message["content"]


ui = gr.Interface(fn=transcribe, inputs=[gr.Audio(type="filepath")], outputs="text")
ui.launch()

