
 // Initialize Firebase


 const firebaseConfig = {
  apiKey: "AIzaSyDefTZ3hQl16jIvXbIQ3AXFvkvQWlwIpqI",
  authDomain: "dream-web-61ad8.firebaseapp.com",
  projectId: "dream-web-61ad8",
  storageBucket: "dream-web-61ad8.appspot.com",
  messagingSenderId: "40035040781",
  appId: "1:40035040781:web:ab016bb5d72c612e325f44",
  measurementId: "G-76X879JLY4"
};
// Initialize Firebase app
firebase.initializeApp(firebaseConfig);


const messageContainer = document.getElementById('message-container');
const serverRef = firebase.database().ref('yatra816');

// // Send button click event handler
// sendButton.addEventListener('click', function() {
//   // const serverName = serverInput.value.trim().toLowerCase();
//   // const email = emailInput.value;
//   // const pass = passInput.value;
//   // const name = nameInput.value.trim();
//   const links = link.value;
 
//   // const message = messageInput.value;

  
//     // serverRef.push().set({
//     //   message: links
//     // });
      
//     // Clear input fields
//     // nameInput.value = '';
//     // messageInput.value = '';
    
  
// });

// Realtime listener for server messages
// serverInput.addEventListener('change', function() {
//   let serverName = serverInput.value.trim().toLowerCase();

//   // Clear message container
//   messageContainer.innerHTML = '';

  if (true) {
    const serverRef = firebase.database().ref('yatra816');
    serverRef.on('child_added', function(snapshot) {
      const messages = snapshot.val();
      displayMessage(messages.message);
      scrollToBottom();
    });
  }



// Function to display messages
function displayMessage(message) {
  const messageElement = document.createElement('div');

  messageElement.classList.add('all-message');
  // Check if the sender's name matches your name
  if (true) {
    
    messageElement.classList.add('my-message'); // Add a custom class for your messages
  }
  
  messageElement.innerHTML = `<img src="${message}" alt=""> `;
  messageContainer.appendChild(messageElement);
}

function scrollToBottom() {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
