import chainlit as cl
from chainlit.server import app
from fastapi.responses import JSONResponse


@app.get("/custom-auth")
async def custom_auth():
    return JSONResponse({"token": "123", "status": "authenticated"})

@cl.on_message
async def main(message: cl.Message):
    await cl.Message(
        content=f"Received: {message.content}",
    ).send()
