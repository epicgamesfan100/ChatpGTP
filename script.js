// Simulate a simple response from the bot
const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm doing great, thank you for asking!",
    "bye": "Goodbye! Have a great day!"
};

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Display the user's message and bot's response
function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== "") {
        // Append user's message to chat
        appendMessage(userMessage, "user");

        // Get bot's response
        const botMessage = botResponses[userMessage.toLowerCase()] || "Sorry, I didn't understand that.";

        // Append bot's response to chat
        appendMessage(botMessage, "bot");

        // Clear the input field
        userInput.value = "";
    }
}

// Function to append message to chat
function appendMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for "Send" button
sendBtn.addEventListener("click", sendMessage);

// Event listener for "Enter" key press
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
