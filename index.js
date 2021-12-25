function sleep(time) {
    return new Promise(reslove => {
        setTimeout(reslove, time)
    })
}


function faster(short) {
    return new Promise(resolve => {
        setTimeout(resolve, short)
    })
}
async function hello(time) {
    await sleep(time)
    return console.log("Hello World")
}






async function helloMessage(time, short) {
    let mainDiv = document.createElement("div")
    let paragraph = document.createElement("p")

    mainDiv.setAttribute("id", "main")
    paragraph.textContent = "Hello Everyone!!"
    mainDiv.append(paragraph)
    document.body.append(mainDiv)
    await sleep(time)
    paragraph.textContent = "I hope you're all having a wonderful Holiday break"
    await sleep(time)
    paragraph.textContent = "There's nothing like learing a new skill!"
    await sleep(time)
    paragraph.textContent = "One that you can go forth a make a better life with!"
    await sleep(time)
    paragraph.textContent = "I spent some time playing with...."
    await sleep(time)

    paragraph.textContent = "A"
    await  faster(short)
    paragraph.textContent = "AS"
    await  faster(short)
    paragraph.textContent = "ASY"
    await  faster(short)
    paragraph.textContent = "ASYN"
    await  faster(short)
    paragraph.textContent = "ASYNC"
    await  faster(short)
    paragraph.textContent = "ASYNC A"
    await  faster(short)
    paragraph.textContent = "ASYNC AN"
    await  faster(short)
    paragraph.textContent = "ASYNC AND"
    await  faster(short)
    paragraph.textContent = "ASYNC AND A"
    await  faster(short)
    paragraph.textContent = "ASYNC AND AW"
    await  faster(short)
    paragraph.textContent = "ASYNC AND AWA"
    await  faster(short)
    paragraph.textContent = "ASYNC AND AWAI"
    await  faster(short)
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "125%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "150%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "175%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "200%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "250%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "300%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "350%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.style.fontSize = "450%"
    paragraph.textContent = "ASYNC AND AWAIT"
    await  faster(short)
    paragraph.textContent = ""
    document.body.style.background = "url(images/crackedscreen.jpeg)"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    await sleep(time)

    paragraph.style.fontSize = "125%"
    paragraph.textContent = "Sorry... I got a little carried away"

}


helloMessage(3000, 500)





