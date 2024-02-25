let a = [
        "Initializing Hack tool...",
        "Connecting to Instagram...",
        "Connecting to server 1...",
        " Retrying...",
        "Connecting to server 2...",
        "Connected Successfully...",
        "Username Tommy...",
        "Using Firewall for continuous Check...",
        "Match not found...",
        "Attempting for ssecond time...",
        "Match not found...",
        "Final Level Attempt",
  "Access granted. Proceeding with data extraction...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
]

const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(1)
         //console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
})()
