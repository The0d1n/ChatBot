import openai
import gradio as gr

openai.api_key = "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"

messages = [
    {"role": "system", "content": "You are a helpful and kind AI Assistant."},
]

def chatbot(input):
    if input:
        messages.append({"role": "user", "content": input})
        chat = openai.Completion.create(
            engine="text-davinci-002", prompt=input, max_tokens=1024, n=1, stop=None, temperature=0.7,
            top_p=1, frequency_penalty=0, presence_penalty=0
        )
        reply = chat.choices[0].text
        messages.append({"role": "assistant", "content": reply})
        return reply

inputs = gr.inputs.Textbox(lines=7, label="Chat with AI")
outputs = gr.outputs.Textbox(label="Reply")

gr.Interface(fn=chatbot, inputs=inputs, outputs=outputs, title="HITS Bot",
             description="Ask anything you want",
             theme="compact").launch(share=True)
