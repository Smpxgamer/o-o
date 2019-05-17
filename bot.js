const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "$"

client.on('ready', () => {
console.log(`Online.`);
 });
  
  
client.on('message', message => {
 if(message.content.startsWith(prefix + "avatar")) {
var man = message.mentions.users.first();
var me;
 if(man){
var me = man;
        } else {
var me = message.author;
                  
        }
const avatar = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(`${me.avatarURL}`)
message.channel.sendEmbed(avatar);
            }
        });
  
  

  
client.on("message", message => {
    if(message.content.startsWith(prefix + "help")) {
        const Help = new Discord.RichEmbed()
        .setDescription(`
الاوامر`)
        message.channel.sendEmbed(Help)
    }
})
  
  
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});  
  
  
           
                       
                      
  client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help-py") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(` **
	  
	         Please Chose: 
			 
─═════════ {✯الاوتاكو العربي✯} ════════════─

❧ Soon ⦁ 

❧ Soon ⦁ 

❧ Soon ⦁
─═════════ {✯الاوتاكو العربي✯} ════════════─
	 ** `)
   message.channel.sendEmbed(embed)
    
   }
   });   
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send(':heart: هلا فيك :heart:');
              message.channel.sendFile("./photoshop.PNG");
               

            }
}); 
  
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$by') {
              message.channel.send('***:heart:*** **سيرفر  الاوتاكو العربي** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});  
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$bot') {
              message.channel.send('***:heart:*** **البوت من صنع الاوتاكو العربي** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});  
  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**:heart: وعليكم السلام حبي:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باي') {
              message.channel.send('**:heart: باي :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send('**:heart: تيت :heart:** ');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'brb') {
              message.channel.send('**:heart: tyt :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('**:heart: هايات :heart:**');
              message.channel.sendFile("");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'زورو') {
              message.channel.send('**:purple_heart: زورو مشغول حاليا!! :purple_heart:**');
              message.channel.sendFile("");
               

            }
});











client.on('message', message => {
     if (message.content === ".ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` الاوتاكو العربي
 .`, 'https://cdn.discordapp.com/avatars/460797113643696129/73410b8835141d12fc8b48cdb27986f0.png?size=2048')

  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



  client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help-3") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(` **
	  
	         Please Chose: 
			 
─═════════ {✯الاوتاكو العربي✯} ════════════─
❖$kick ➺   طرد عضو ⦁
❖$bc ➺   ارسال ساله للجميع ⦁
❖$avatar ➺   صوره للشخص ⦁
❖$clear ➺   مسح الشات ⦁
❖$bot  ➺   معرفه عن البوت تفاصيل ⦁
❖$mute ➺   ميوت ⦁
❖$unmute ➺   الغاء الميوت ⦁

─═════════ {✯الاوتاكو العربي✯} ════════════─
	  ** `)
   message.channel.sendEmbed(embed)
    
   }
   });


client.on('message', message => {
    if (message.content.startsWith("$id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('Red')
            .setTitle('``INFO Fox Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "$";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});


  client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help-4") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(` **
	  
	         Please Chose: 
			 
─═════════ {✯الاوتاكو العربي✯} ════════════─
❖ $play
لتشغيل أغنية برآبط أو بأسم
❖ $skip
لتجآوز الأغنية الحآلية
❖ $pause
إيقآف الأغنية مؤقتا
❖ $resume
لموآصلة الإغنية بعد إيقآفهآ مؤقتا
.vol
تغيير درجة الصوت 100 - 0
❖ $stop
لإخرآج البوت من الروم
❖ $nb
لمعرفة الأغنية المشغلة حآليا
❖ $queue
لمعرفة قآئمة التشغيل
تم انهاء كل الاوامر اتمنى تستمتعوا بالبوت
─═════════ {✯الاوتاكو العربي✯} ════════════─
	  ** `)
      .setFooter(`الاوتاكو العربي`, 'https://cdn.discordapp.com/avatars/460797113643696129/73410b8835141d12fc8b48cdb27986f0.png?size=2048')
  
   message.channel.sendEmbed(embed)
    
   }
   });


client.on ("message", (message) => {
if (message.content.startsWith("$ban")) {//DarkLast Alpha Codes

  if (message.channel.type !== "text") return message.reply ("This Command Only For Servers");
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply ("You Dont Have **Ban Members** Premission");//DarkLast Alpha Codes
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have **Ban Members** Permission**");
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let user = message.mentions.users.first();//DarkLast Alpha Codes
  let reason = message.content.split(" ").slice(2).join(" ");//DarkLast Alpha Codes
  if (!message.mentions.members.first()) return message.reply ("Mention Someone");
  if (!message.guild.member(user).bannable) return message.reply("I Can't Ban Person His Rank Highter Than Me");//DarkLast Alpha Codes
  if (!reason) return message.reply ("Write The Reason");//DarkLast Alpha Codes
  message.mentions.members.first().ban();
  message.guild.member(user).ban(7, user);//DarkLast Alpha Codes
  
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED`, user.displayAvatarURL)//DarkLast Alpha Codes
  .setColor("RANDOM")
  .setThumbnail()//DarkLast Alpha Codes
  .addField("**User Banned**", `**[ ${user.tag} ]**`)//DarkLast Alpha Codes
  .addField("**Banned By**", `**[ ${message.author.tag} ]**`)
  .addField("**For Reason**", `**[ ${reason} ]**`)//DarkLast Alpha Codes
  .setFooter("الاوتاكو العربي")//DarkLast Alpha Codes
  message.channel.send({embed : banembed})
}
  });


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith()) return;

  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "$say") {
   message.channel.sendMessage(args.join("  "))
  }
  });

//BanList
  client.on('message', message => {
     if(message.content.startsWith("$banlist")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});


client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on('message', message => {
     if (message.content === "$bot-list") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("^^كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('âž¡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
client.login("NTc4NDA2MDM2MTI2NTY0Mzc1.XN2XZw.xfj7Dp7ETgfQPEcFVByOXWbZRt0");