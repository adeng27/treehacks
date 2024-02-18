from openai.embeddings_utils import get_embedding
import pandas as pd
import openai
import config



openai.api_key = config.OPENAI_API_KEY
df = pd.read_csv("output.csv")
df.pop("Date")
df = df.head(500)
df['Embeddings'] = df["Message"].apply(lambda x: get_embedding(x, engine='text-embedding-ada-002'))
# print(df.iloc[0]["Message"])
# print(get_embedding(df.iloc[0]["Message"], engine='text-embedding-ada-002'))
print(df.head())
df.to_csv("output_embeddings2")
