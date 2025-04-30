import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()
TOKEN = os.getenv("TOKEN")

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"✅ Logged in as {bot.user}")
    activity = discord.Activity(type=discord.ActivityType.watching, name="for your DMs")
    await bot.change_presence(status=discord.Status.online, activity=activity)

bot.run(TOKEN)
