# Veera - Your Virtual Assistant

![Veera - Your Virtual Assistant Screenshot](https://drive.google.com/uc?export=view&id=1F8nGFo-frwq3s9JNA2HmgwOQ70VRCuBa)

This project is a simple voice-activated virtual assistant named "Veera," designed to help you with various tasks like providing greetings based on the time of day, checking the time and date, opening websites, setting reminders, and more. The assistant is developed using JavaScript, leveraging the Web Speech API for speech recognition and speech synthesis, providing a voice interaction experience.

## Features
- **Greetings**: Veera greets you based on the current time of day.
- **Voice Commands**: 
  - Basic greetings ("hello", "hey", etc.)
  - Open Google, YouTube, Instagram, Facebook, and other popular sites.
  - Search on Google.
  - Retrieve the current time and date.
  - Play a song on YouTube by saying "play" followed by the song name.
  - Set a reminder for a specified number of minutes.
  - Responds to "Thank you" and provides an introduction about itself.
  - Quit the application gracefully by saying "quit."
- **Error Handling**: If an unknown command is received, Veera will search the query on Google.

## Getting Started

### Prerequisites
- Web Browser with support for JavaScript and Web Speech API (e.g., Chrome)

### Setup
1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/AadityaKGupta/Veera---Your-Virtual-Assistant
   ```
2. Open the project folder and open the `index.html` file in a web browser.

### How to Use
1. Click the **Start** button to activate voice recognition.
2. Use any of the available commands listed in the **Features** section to interact with Veera.

## Code Overview

### Key JavaScript Functions
- **speak(text)**: Converts text to speech.
- **wishMe()**: Greets the user based on the current time of day.
- **takeCommand(message)**: Interprets recognized speech and performs actions based on command keywords.

### Dependencies
- **SpeechRecognition**: Browser's built-in SpeechRecognition interface is used to capture voice input.
- **SpeechSynthesisUtterance**: Used for converting text to speech.

## Sample Commands
- **"Hello Veera"**: Veera will greet you and ask how it can help.
- **"What is time"**: Provides the current time.
- **"Search for [query]"**: Searches the provided query on Google.
- **"Open [website]"**: Opens the specified website (e.g., "Open YouTube").
- **"Play [song name]"**: Plays a song on YouTube.
- **"Set reminder for [minutes]"**: Sets a reminder that alerts you after the specified time.
- **"Quit"**: Exits the assistant.

## Contribution
If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or further assistance, please reach out to:

- **Name**: Aaditya Kumar Gupta
- **Email**: [k.aaditya.g@gmail.com](mailto:k.aaditya.g@gmail.com)
- **GitHub**: [AadityaKGupta](https://github.com/AadityaKGupta)
