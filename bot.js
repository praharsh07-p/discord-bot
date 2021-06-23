require('dotenv').config()
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready',readyDiscord);

function readyDiscord(){
    console.log('❤😘');
}
client.on('message',gotMessage);
//const msgs=["How are you today? It's great to see you here. What can I offer you","appude bewarse gallu ekkuvaipoyaru","Super ra mawa! Happy ga undu","idhekkadi mass ra mawa","sarsarle ennenno ankuntam ","p**k opp"];


async function gotMessage(msg){
    let tokens =msg.content.split(" ");

    if (tokens[0]=="hey"){
    //const index=(Math.floor(Math.random()*msgs.length));
    msg.channel.send("Hey there");
    }
    else if (tokens[0]=="!gif")
    {
        let keywords="Ms Dhoni Untold Story"
        if (tokens.length>1){
            keywords=tokens.slice(1,tokens.length).join(" ");

        }
        //msg.channel.send("gif!");
        let url=`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
        let response=await fetch(url);
        let json = await response.json();
        let ind= (Math.floor(Math.random()*json.results.length));
        msg.channel.send(json.results[ind].url);
    }



        
    }
