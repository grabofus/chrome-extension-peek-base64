function peek(info, tab) {
    const text = info.selectionText;

    let encode = "";
    try {
        encode = btoa(text)
    } catch {}

    let decode = "";
    try {
        decode = atob(text)
    } catch {}

    const message = [
        "𝗣𝗲𝗲𝗸𝗶𝗻𝗴 𝘃𝗮𝗹𝘂𝗲 𝗼𝗳:",
        text,
        "𝗕𝗮𝘀𝗲𝟲𝟰 𝘁𝗼 𝗧𝗲𝘅𝘁:",
        decode,
        "𝗧𝗲𝘅𝘁 𝘁𝗼 𝗕𝗮𝘀𝗲𝟲𝟰:",
        encode
    ].join('\n');

    alert(message);
}

chrome.contextMenus.create({
    title: "Peek Base64: %s",
    contexts: ["selection"],
    onclick: peek
});