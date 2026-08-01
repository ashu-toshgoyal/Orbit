const promptInput = document.getElementById("promptinput");
const sendIcon = document.getElementById("send-icon");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");

// Toggle icon based on input
promptInput.addEventListener("input", () => {
    if (promptInput.value.trim().length > 0) {
        sendIcon.className = "bi bi-arrow-upbi bi-arrow-up-circle-fill";
    } else {
        sendIcon.className = "bi bi-mic-fill";
    }
});

// Handle send button click
sendButton.addEventListener("click", () => {
    sendMessage();
});

// Optional: send on Enter key press
promptInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = promptInput.value.trim();

    if (message.length > 0) {

        const messageDiv = document.createElement("div");
        messageDiv.className = "chat-message user-message";
        messageDiv.textContent = message;
        messageDiv.style.minHeight = "40px";
        messageDiv.style.width = "fit-content";
        messageDiv.style.maxWidth = "60%";
        messageDiv.style.color = "#F8FAFC";
        messageDiv.style.backgroundColor = "#6C5CFF";
        messageDiv.style.padding = "10px 16px";
        messageDiv.style.borderRadius = "16px";
        messageDiv.style.position = "relative";
        messageDiv.style.marginLeft = "auto";
        messageDiv.style.marginBottom = "10px";
        messageDiv.style.right = "20px"
        messageDiv.style.top = "10px"
        chatBox.appendChild(messageDiv);


        chatBox.scrollTop = chatBox.scrollHeight;

        promptInput.value = "";
        sendIcon.className = "bi bi-mic-fill";
    }
}