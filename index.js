function sleep(time) {
    return new Promise(reslove => {
        setTimeout(reslove, time)
    })
}

async function hello(time) {
    await sleep(time)
    return console.log("Hello World")
}

hello(2000)


async function helloMessage(time) {
    let mainDiv = document.createElement("div")
    let paragraph = document.createElement("p")

    mainDiv.setAttribute("id", "main")
    paragraph.textContent = "Hello My Love"
    mainDiv.append(paragraph)
    document.body.append(mainDiv)
    await sleep(time)
    paragraph.textContent = "I Love You Very Much"
    await sleep(time)
    paragraph.textContent = "I'm Very Proud Of You"
    await sleep(time)
    paragraph.textContent = "I Was Wondering"
    await sleep(time)
    paragraph.textContent = "What Would You Like To Watch Tonight?"
}

helloMessage(3000)


