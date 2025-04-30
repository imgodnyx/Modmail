import os
import discord

# Read token directly from environment
TOKEN = os.environ["TOKEN"]

# Set up Discord client
intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f"✅ Logged in as {client.user}")
    await client.change_presence(
        activity=discord.Activity(type=discord.ActivityType.watching, name="for your DMs")
    )

client.run(TOKEN)

