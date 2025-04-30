import discord
from discord.ext import commands

async def setup(bot):
    @bot.event
    async def on_ready():
        await bot.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name="for your DMs"))
        print(f"✅ {bot.user} is ready and watching for DMs.")
