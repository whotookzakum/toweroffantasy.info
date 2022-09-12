const monocross = {
    name: "Monocross",
    uri: "monocross",
    imgSrc: "monocross.webp",
    chinaOnly: false,
    parts: {
        part1: {
            source: "Crown hidden quest line.",
            guide: "https://docs.google.com/document/d/1bJUMjVT06XEph7TK-D1ORSg004TLwtnyflJ7IBoXfkc"
        },
        part2: {
            source: 
                `Inside the base off the coast of northern Warren (664, -1236).  
                Passcode is *7092*.`,
        },
        part3: {
            source: "Supply pod in central Warren (938, -403).",
        },
        part4: {
            source: "Rare drop from ***Devotees*** (祭祀).",
            dropRateKnown: true,
            map: "monocrosselites.webp"
        }
    },
    videoSrc: "https://www.youtube.com/embed/ECHjL8xhTY4"
}

export default monocross;