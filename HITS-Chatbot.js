// ==UserScript==
// @name        Hindustan Univ Chatbot
// @namespace   Moonchild
// @version     1.0
// @description Show a chatbot window with a Gradio page when visiting Hindustan University's website
// @match       https://hindustanuniv.ac.in/
// @grant       none
// ==/UserScript==

(function() {
    // Set the URL of the Gradio page to load
    var gradioUrl = "https://94398aadc05acd4283.gradio.live";

    // Create the chatbot container
    var chatbotContainer = document.createElement("div");
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.left = "20px"; // set left to 20px
    chatbotContainer.style.bottom = "20px"; // set bottom to 20px
    chatbotContainer.style.width = "300px";
    chatbotContainer.style.height = "400px";
    chatbotContainer.style.border = "1px solid #ccc";
    chatbotContainer.style.borderRadius = "10px";
    chatbotContainer.style.overflow = "hidden";

    // Create the chatbot iframe
    var chatbotIframe = document.createElement("iframe");
    chatbotIframe.src = gradioUrl;
    chatbotIframe.style.width = "100%";
    chatbotIframe.style.height = "100%";
    chatbotIframe.style.border = "none";

    // Add the chatbot iframe to the chatbot container
    chatbotContainer.appendChild(chatbotIframe);

    // Add the chatbot container to the page
    document.body.appendChild(chatbotContainer);
})();
