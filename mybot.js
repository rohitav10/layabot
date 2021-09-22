const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client();
client.on("ready" , () => {
console.log('bot is started')
client.user.setActivity(`${client.guilds.cache.size} Servers >coming soon`, { type: "WATCHING" })
 // Can Be WATCHING, STREAMING, LISTENING
})






client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'sukkano laya') {
    // Send "pong" to the same channel
    message.channel.send('ada sukkam ann ninik sukkam ano');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ayine') {
    // Send "pong" to the same channel
    message.channel.send('ayine ippam entha ..onula ');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'olaka') {
    // Send "pong" to the same channel
    message.channel.send('vala panikum poda');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'i love you') {
    // Send "pong" to the same channel
    message.channel.send('i love you too');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'how are you laya') {
    // Send "pong" to the same channel
    message.channel.send('fine da , how are you');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'food kayicha') {
    // Send "pong" to the same channel
    message.channel.send('aa kayichu ,nee kayicha');
  }

});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'veed evideya') {
    // Send "pong" to the same channel
    message.channel.send('kuthiravattam');
  }
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'aa kayichu') {
    // Send "pong" to the same channel
    message.channel.send('mm');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'what are you doing') {
    // Send "pong" to the same channel
    message.channel.send('chilling');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'enthadi myree') {
    // Send "pong" to the same channel
    message.channel.send('enthda myreeee');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'lol') {
    // Send "pong" to the same channel
    message.channel.send('hahaha');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'bye') {
    // Send "pong" to the same channel
    message.channel.send('byee see you');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ok') {
    // Send "pong" to the same channel
    message.channel.send('ookk');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'hello') {
    // Send "pong" to the same channel
    message.channel.send('hellooo');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Hi') {
    // Send "pong" to the same channel
    message.channel.send('Hellooooooo');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'sukkam') {
    // Send "pong" to the same channel
    message.channel.send('Hmm');
  }
});
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'how are you') {
    // Send "pong" to the same channel
    message.channel.send('fine..');
  }
});




















client.login('NRbu-otP9Ascm3Uo4YdgtnnP_Mtfn0w2');






