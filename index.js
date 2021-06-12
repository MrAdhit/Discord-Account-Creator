const puppeteer = require("puppeteer");
const term = require("terminal-kit").terminal;
const fs = require("fs");
const colors = require('colors');
const mechar = require("metacharacter");
const random = require("random.org-javascript");

((fs.existsSync(__dirname + "console.log")) ? fs.rmSync(__dirname + "/console.log") : "");

term.fullscreen();

function showTtl(){
    term.brightMagenta(centerize(""));
    term.brightMagenta(centerize("·▄▄▄▄ ▪ .▄▄ · ▄▄·     ▄▄▄ ·▄▄▄▄  "));
    term.brightMagenta(centerize("██▪ ████▐█ ▀.▐█ ▌▪    ▀▄ ███▪ ██ "));
    term.brightMagenta(centerize("▐█· ▐█▐█▄▀▀▀███ ▄▄▄█▀▄▐▀▀▄▐█· ▐█▌"));
    term.brightMagenta(centerize("██. ██▐█▐█▄▪▐▐███▐█▌.▐▐█•███. ██ "));
    term.brightMagenta(centerize("▀▀▀▀▀•▀▀▀▀▀▀▀·▀▀▀ ▀█▄▀.▀  ▀▀▀▀▀• "));
    term.brightMagenta(centerize(""));
    term.brightMagenta(centerize(""));
    term.brightMagenta(centerize(" ▄▄▄· ▄▄· ▄▄·     ▄• ▄▌▐ ▄▄▄▄▄▄     ▄▄·▄▄▄ ▄▄▄ .▄▄▄▄▄▄▄▄    ▄▄▄  "));
    term.brightMagenta(centerize("▐█ ▀█▐█ ▌▐█ ▌▪    █▪██•█▌▐•██      ▐█ ▌▀▄ █▀▄.▀▐█ ▀•██ ▪    ▀▄ █·"));
    term.brightMagenta(centerize("▄█▀▀███ ▄██ ▄▄▄█▀▄█▌▐█▐█▐▐▌▐█.▪    ██ ▄▐▀▀▄▐▀▀▪▄█▀▀█▐█.▪▄█▀▄▐▀▀▄ "));
    term.brightMagenta(centerize("▐█ ▪▐▐███▐███▐█▌.▐▐█▄███▐█▌▐█▌·    ▐███▐█•█▐█▄▄▐█ ▪▐▐█▌▐█▌.▐▐█•█▌"));
    term.brightMagenta(centerize(" ▀  ▀·▀▀▀·▀▀▀ ▀█▄▀▪▀▀▀▀▀ █▪▀▀▀     ·▀▀▀.▀  ▀▀▀▀ ▀  ▀▀▀▀ ▀█▄▀.▀  ▀"));
    term.brightMagenta(centerize(""));
}


(async()=>{
    showTtl();
    // fs.readFile("title.txt", function(err, data) {
    //     let a = data.toString().split("\n");
    //     for (line of a) {
    //         fs.appendFileSync("jaa.txt", `term.brightMagenta(centerize("${mechar.stringify(line).replace("\\r", "")}"));\n`);
    //     }
    // });

    term.brightCyan("Enter Discord Username : ");
    const username = await term.inputField().promise;

    if(username == "") return err("Invalid Username");

    term("\n\n");

    term.brightCyan("Enter Password : ");
    const password = await term.inputField().promise;

    if(password == "") return err("Invalid Password");

    term("\n\n");

    term.brightCyan("What Email Type Do You Want To Use?")
    const type = await term.singleColumnMenu(["Gmail", "Custom Email"]).promise;

    term("\n\n");

    let emailSuffix;

    if(type.selectedText == "Gmail"){
        mF();
        process.exit();
    }else{
        term.brightCyan("Enter Your Email Domain (eg, mail.mradhit.net) : ");
        emailSuffix = await term.inputField().promise;

        if(emailSuffix == "") return err("Invalid Email");
    }

    term("\n\n");

    term.brightCyan("Birth Month?\n\n");
    const month = await term.singleColumnMenu(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]).promise;
    
    term("\n\n");

    term.brightCyan("Birth Day (eg, 27) : ");
    const day = await term.inputField().promise;

    if(day > 31) return err("Invalid Day");

    term("\n\n");

    term.brightCyan("Birth Year (eg, 1945) : ");
    const year = await term.inputField().promise;

    term("\n\n");

    term.fullscreen();
    showTtl();

    let email = await random.generateStrings(1, 5);
    email =  email[0] + "@" + emailSuffix;

    const browser = await puppeteer.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    
    await page.goto("https://discord.com/register");

    await page.type("#app-mount > div.app-1q1i1E > div > div > form > div > div > div:nth-child(1) > div > input",
    email);
    await page.type("#app-mount > div.app-1q1i1E > div > div > form > div > div > div:nth-child(2) > div > input",
    username);
    await page.type("#app-mount > div.app-1q1i1E > div > div > form > div > div > div:nth-child(3) > div > input",
    password);
    await page.click("#app-mount > div.app-1q1i1E > div > div > form > div > div > div.container-3bTSed.marginTop20-3TxNs6 > div.inputs-14Hc7m > div:nth-child(1) > div > div > div > div > div.css-1hwfws3");
    await page.keyboard.type(month.selectedText);
    await page.click("#app-mount > div.app-1q1i1E > div > div > form > div > div > div.container-3bTSed.marginTop20-3TxNs6 > div.inputs-14Hc7m > div:nth-child(2) > div > div > div > div > div.css-1hwfws3");
    await page.keyboard.type(day);
    await page.click("#app-mount > div.app-1q1i1E > div > div > form > div > div > div.container-3bTSed.marginTop20-3TxNs6 > div.inputs-14Hc7m > div:nth-child(3) > div > div > div > div > div.css-1hwfws3");
    await page.keyboard.type(year);
    await page.click("#app-mount > div.app-1q1i1E > div > div > form > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.marginTop20-3TxNs6 > label > input");
    await page.click("#app-mount > div.app-1q1i1E > div > div > form > div > div > div:nth-child(6) > button");

    process.exit();
})();

function mF(){
    term.brightRed("Feature is under development");
}

function err(str){
    term.brightRed(str);
    process.exit();
}

// (async()=>{
//     const browser = await puppeteer.launch({headless: false, slowMo: 250});
//     const page = await browser.newPage();

//     page.on((msg) => {
//         console.log("LOG: " + msg);
//     });

//     await page.goto("https://www.ipify.org/");

//     // await browser.close();
// })();

function centerize(str){
    return repeatStr(' ', Math.floor((process.stdout.columns - str.length) / 2)) + str + repeatStr(' ', Math.floor((process.stdout.columns - str.length) / 2)) + "\n";
}

function repeatStr(char, count){
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(char);
    }
    return arr.join("");
}