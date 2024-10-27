let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    if ('speechSynthesis' in window) {
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.rate = 1
        text_speak.pitch = 1
        text_speak.volume = 1
        text_speak.lang = "en-US"
        window.speechSynthesis.speak(text_speak)
    } 
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    } else if (hours >= 12 && hours < 17) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}

// Ensure wishMe is called on page load
window.addEventListener('load', () => {
    wishMe();
})

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

// Start recognition on button click
btn.addEventListener('click', () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"

    if (message.includes("hello") || message.includes("hey") || message.includes("hello veera")) {
        speak("Hello Sir, what can I help you?")
    } 


    
    else if (message.includes("give me your introduction")) {
        speak("I am veera, your virtual assistant....Made by Mr. Aaditya Kumar Gupta.")
    }
    
    else if (message.includes("what is time")) {
        let day = new Date()
        let hours = day.getHours()
        let minutes = day.getMinutes()
        speak(`The current time is ${hours}:${minutes}`)
    } 

    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    
    else if (message.includes("open google")) {
        speak("Opening Google...")
        window.open("https://www.google.com")
    }
    
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...")
        window.open("https://www.youtube.com")
    }
    
    else if (message.includes("search for")) {
        let searchTerm = message.split("search for ")[1]
        speak(`Searching for ${searchTerm}`)
        window.open(`https://www.google.com/search?q=${searchTerm}`)
    }
    
    else if (message.includes("quit")) {
        recognition.stop()
        content.innerText = "Goodbye Sir"
        speak("Goodbye Sir")
        setTimeout(() => {
            window.close()
        }, 5000)
    }
    
    else if (message.includes("thank you") || message.includes("thank you veera")) {
        speak("You're welcome Sir")
    }
    
    else if (message.includes("open instagram") || message.includes("open facebook") || message.includes("open twitter")) {
        let socialMedia = message.split("open ")[1]
        speak(`Opening ${socialMedia}`)
        window.open(`https://www.${socialMedia}.com/`)
    }
    
    else if (message.includes("open calculator")) {
        speak("Opening Calculator...")
        window.open("calculator://")
    }
    
    else if (message.includes("play")) {
        let songName = message.split("play ")[1]
        speak(`Playing ${songName} on YouTube...`)
        window.open(`https://www.youtube.com/results?search_query=${songName}`)
    }
    
    else if (message.includes("set reminder")) {
        let minutes = parseInt(message.split("reminder for ")[1])
        speak(`Reminder set for ${minutes} minutes`)
        setTimeout(() => {
            speak("Your reminder is up!")
        }, minutes * 60000)
    }

    else if(message.includes("are you better than chat gpt")){
        speak("I am not sure but I think chat gpt better than me.")
    }
    
    else {
        speak(`This is what I found on the internet regarding ${message.replace("veera", "")}`)
        window.open(`https://www.google.com/search?q=${message.replace("veera", "")}`)
    }
}