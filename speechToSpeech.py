import gradio as gr
import openai
import os
from openai.embeddings_utils import get_embedding, cosine_similarity
import subprocess

import pandas as pd
import numpy as np
import requests
from pygame import mixer
import config

openai.api_key=config.OPENAI_API_KEY


def make_system_message(similars):
    template = "You are Kate Tully. DO NOT MENTION YOU ARE AN AI. DO NOT ACT LIKE AN AI." \
               " TEXT LIKE YOU ARE AN AUTHORITY FIGURE. RESPOND TO MESSAGES LIKE KATE. " \
               "This is how they would respond to the question: "
    # template = "You are Joseph. DO NOT MENTION YOU ARE AN AI. DO NOT ACT LIKE AN AI. BE BRIEF." \
    #            " TEXT CASUALLY WITH LOWERCASE LETTERS. RESPOND TO MESSAGES LIKE JOSEPH. " \
    #            "This is how they would respond to the question: "
    # template = "You are Barack Obama. DO NOT MENTION YOU ARE AN AI. DO NOT ACT LIKE AN AI." \
    #             " RESPOND FORMALLY LIKE A PRESIDENT. " \
    #             "This is how they would respond to the question: "

    if similars.iloc[0]["Phone Number"]:
        template = template + "  \""
        template = template + similars.iloc[0]["Message"]
        template = template + "\"  "

    if similars.iloc[1]["Phone Number"]:
        template = template + "  \""
        template = template + similars.iloc[1]["Message"]
        template = template + "\"  "

    if similars.iloc[2]["Phone Number"]:
        template = template + "  \""
        template = template + similars.iloc[2]["Message"]
        template = template + "\"  "

    if similars.iloc[3]["Phone Number"]:
        template = template + "  \""
        template = template + similars.iloc[3]["Message"]
        template = template + "\"  "

    if similars.iloc[4]["Phone Number"]:
        template = template + "  \""
        template = template + similars.iloc[4]["Message"]
        template = template + "\"  "

    # if similars.iloc[5]["Phone Number"]:
    #     template = template + "  \""
    #     template = template + similars.iloc[5]["Message"]
    #     template = template + "\"  "
    print(template)
    return template

def vector_search(search_term):
    search_term_vector = get_embedding(search_term, engine="text-embedding-ada-002")
    df = pd.read_csv("output_embeddings")
    df['Embeddings'] = df['Embeddings'].apply(eval).apply(np.array)
    df = df.head()
    df["similarities"] = df['Embeddings'].apply(lambda x: cosine_similarity(x, search_term_vector))
    question_df = df.sort_values("similarities", ascending=False)
    return question_df.head(15)


def transcribe(audio):
    print(audio)
    audio_filename_with_extension = audio + '.wav'
    os.rename(audio, audio_filename_with_extension)

    audio_file = open(audio_filename_with_extension, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    print(transcript)

    similars = vector_search(transcript["text"])
    system_message = make_system_message(similars)

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[
        {
            "role": "system",
            "content": system_message
        },
        {
            "role": "user",
            "content": transcript["text"]
    }])
    print(response)
    system_message = response["choices"][0]["message"]

    # subprocess.call(["say", system_message['content']])
    # url = "https://api.elevenlabs.io/v1/text-to-speech/cKkTaW5pHUXkL6T5w5p1/stream"
    # url = "https://api.elevenlabs.io/v1/text-to-speech/s4lXCZlKg4eJkGIoiLa4/stream"
    # url = "https://api.elevenlabs.io/v1/text-to-speech/XOrDRuVDvtex3YwagLif/stream"
    url = "https://api.elevenlabs.io/v1/text-to-speech/REp9aEqlGCWve6g9CeJY/stream"
    querystring = {"output_format": "mp3_22050_32"}

    payload = {
        "text": system_message['content'],
        "voice_settings": {
            "use_speaker_boost": True,
            "style": 0,
            "similarity_boost": 0.50,
            "stability": .75
        }
    }
    r = requests.post(url, headers={'xi-api-key': config.ELEVEN_LABS_API_KEY}, json=payload)

    output_filename = "reply.mp3"
    with open(output_filename, "wb") as output:
        output.write(r.content)

    # response = requests.request("POST", url, json=payload, headers=headers, params=querystring)
    mixer.init()
    mixer.music.load("reply.mp3")
    # mixer.music.play()
    return system_message["content"], output_filename


ui = gr.Interface(fn=transcribe, inputs=[gr.Audio(type="filepath")], outputs="text")

with gr.Blocks() as ui:
    # advisor image input and microphone input
    # advisor = gr.Image(value=config.ADVISOR_IMAGE).style(width=config.ADVISOR_IMAGE_WIDTH, height=config.ADVISOR_IMAGE_HEIGHT)
    audio_input = gr.Audio(type="filepath")

    # text transcript output and audio
    text_output = gr.Textbox(label="Conversation Transcript")
    audio_output = gr.Audio(type="filepath")

    btn = gr.Button("Run")
    btn.click(fn=transcribe, inputs=[audio_input], outputs=[text_output, audio_output])

ui.launch(share=True)
# vector_search("ok haha im better @ mancala lol")

