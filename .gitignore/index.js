const Discord = require('discord.js');
const config = require("./config.json");
const request = require('request');
var client = new Discord.Client();


const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapters = new FileSync('database.json')
const db = low(adapters)

db.defaults({ warn: [], mute: [], kick: [], links: [], slowmode: [] }).write()


var prefix = ("#");

var MDP = Math.floor(Math.random() * 9999999999) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.floor(Math.random() * 9999999999) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.floor(Math.random() * 9999999999);
var MDPbis = Math.random().toString(36).substring(2, 15)
var IP = 'Antalya.mcpe.eu';
var Port = 19143;

//function convertMS(ms) {
//  var d, h, m, s;
//  s = Math.floor(ms / 1000);
//  m = Math.floor(s / 60);
//  s = s % 60;
//  h = Math.floor(m / 60);
//  m = m % 60;
//  d = Math.floor(h / 24);
//  h = h % 24;
//  return { d: d, h: h, m: m, s: s };
//};



var servers = {};

client.on('ready', () => {
  client.user.setGame("#help | By OKman65");
  console.log(`[BOT] Le bot est prês à être utilisé : AntaBot [Mot de passe : ` + MDP + ` ]`)
});

client.on('guildMemberAdd', member => {
  let role = member.guild.roles.find("name", "Joueur");
  member.guild.channels.find("name", "bienvenue").send(`Bienvenue **${member}**, sur le discord de **${member.guild.name}**. Tu es la **${member.guild.memberCount}ème** personne ! On peut faire plus ?`);
  member.addRole(role)
  console.log(`[Membre] Nouveau membre : ${member.displayName}\n[Serveur] ${member.guild.memberCount} personnes`);
})

client.on('guildMemberRemove', member => {
  member.guild.channels.find("name", "bienvenue").send(`**${member.user.username}** est partie, on espère le revoir bientôt sur **${member.guild.name}** ...`);
  console.log(`[Membre] Membre perdu : ${member.displayName}\n[Serveur] ${member.guild.memberCount} personnes`);
})

client.on('message', message => {

  if (message.author.bot) {
    return;
  } else {
    if (message.channel.type === "dm") return message.channel.send("Si tu fais des commandes ici, le bot peut crash 😏");
  };

  
  if (message.channel) { 
//
//    var idslow = 294911123541458955;
//    var slowmode = db.get("slowmode").filter({ serveur: idslow }).find('slowmode').value()
//    var slowmodefinal1 = Object.values(slowmode);    
//    let roleslowmode = message.guild.roles.find(r => r.name === "Slowmode");
//    
//
//    (message.member.addRole(roleslowmode.id));
//  setTimeout(function () {
//    message.member.removeRole(roleslowmode.id);
//  },slowmodefinal1[1]);
//  }
//
//  if (message.channel == message.guild.channels.find("name", "discussion")) return;

  if (message.content === prefix + "help") {
    var help2_embed = new Discord.RichEmbed()
      .setTitle("Commande")
      .setDescription("__**N'oubliez pas que le préfix est \"#\"**__")
      .setColor('#33ccff')
      //.addField(prefix + "report [membre] [raison]", "Demande de verification vers le joueur demandé pour quelconque raison.", "true")
      //.addField(prefix + "ip", "Avoir l'ip")//l'état du serveur.
      .addField(prefix + "info", "Avoir des informations sur le bot.")
      .addField(prefix + "ping", "Avoir la vitesse du bot")
      //.addField(prefix + "question [question/idee]", "Vous avez une question ou une idée, envoie la avec cette commande.", "true")
      //.addField(prefix + "helpfun", "Liste des commandes fun.")
      //.addField(prefix + "helpmodo", "List des commandes pour modérateur.")
      .setFooter("TinoxeBot", "")
      var help_embed = new Discord.RichEmbed()
      .setTitle("Commande de modération")
      .setColor('#33ccff')
      //.addField(prefix + "warn [membre] [raison]", "Met un avertissement tout type au joueur concerné. ≠ **" + prefix + "unwarn**")
      .addField(prefix + "mute [membre] [temps] [raison]", "Mute un joueur du serveur. ≠ **" + prefix + "unmute**")
      .addField(prefix + "kick [membre] [raison]", "Kick un joueur du serveur.")
      .addField(prefix + "ban [membre] [raison]", "Bannir un joueur du serveur.")
      //.addField(prefix + "slowmode [nombre]", "Rajoute un temps entre chaque message d'une personne. **||AUCUN EFFET||**")
      //.addField(prefix + "profil [member]", "Information concernant le joueur selectionné.")
      .addField(prefix + "clear [nombre]", "Effacer un salon.")
      //.addField(prefix + "maj [version]", "Met à jour le bot **SI MAL UTILISÉE PEUT CORROMPRE LE BOT**.")
      .setThumbnail("")
      .setFooter("TinoxeBot", "")
    message.channel.send(help_embed);
    message.channel.send(help2_embed);
    console.log(`[BOT] Commande aide executée par ${message.member.displayName} !`);
  }

//  if (message.content === prefix + "helpfun") {
//    var help_embed = new Discord.RichEmbed()
//      .setTitle("Commande de modération")
//      .setColor('#00ff00')
//      .addField(prefix + "reverse", "Pseudo magique !")
//      .addField(prefix + "fusion [member]", "Laisser la magie faire son travail...\n<:Liste:410856444813115393>")
//      .addField(prefix + "reset", "Un problème, faites cette commande et tout reviens dans l'ordre.")
//      .addField(prefix + "[command]name [...]", "Si on fait la commande avec \"name\" à côté de celle-ci, le pseudo donné sera mit sur le votre pendant 30 secondes.")
//      .setThumbnail("")
//      .setFooter("AntaBot | ?help", "")
//    message.channel.send(help_embed);
//    console.log(`[BOT] Commande aide pour les commandes funs par ${message.member.displayName} !`);
//  }


//  if (message.content === prefix + "helpmodo") {
//    var help_embed = new Discord.RichEmbed()
//      .setTitle("Commande de modération")
//      .setColor('#00ff00')
//      .addField(prefix + "warn [membre] [raison]", "Met un avertissement tout type au joueur concerné. ≠ **" + prefix + "unwarn**")
//      .addField(prefix + "mute [membre] [temps] [raison]", "Mute un joueur du serveur. ≠ **" + prefix + "unmute**")
//      .addField(prefix + "kick [membre] [raison]", "Kick un joueur du serveur.")
//      .addField(prefix + "ban [membre] [raison]", "Bannir un joueur du serveur.")
//      .addField(prefix + "slowmode [nombre]", "Rajoute un temps entre chaque message d'une personne. **||AUCUN EFFET||**")
//      .addField(prefix + "profil [member]", "Information concernant le joueur selectionné.")
//      .addField(prefix + "clear [nombre]", "Effacer un salon.")
//      .addField(prefix + "maj [version]", "Met à jour le bot **SI MAL UTILISÉE PEUT CORROMPRE LE BOT**.")
//      .setThumbnail("")
//      .setFooter("AntaBot | ?help", "")
//    message.channel.send(help_embed);
//    console.log(`[BOT] Commande aide pour les modérateurs executée par ${message.member.displayName} !`);
//  }

//  if (message.content === prefix + "ip") {
//    var ouvert_embed = new Discord.RichEmbed()
//      .setColor('#ff0000')
//      .setTitle("Information serveur")
//      .addField("IP :", IP, "true")
//      .addField("Port :", Port, "true")
//      .setFooter("AntaBot | ?help", "")
//    //.addField("État :", "**[Désolé, mais nous ne pourrons pas savoir pour des raison de sécurité en vers le codeur.]**")
//
//    var fermer_embed = new Discord.RichEmbed()
//      .setColor('#ff0000')
//      .setTitle("Information serveur")
//      .addField("IP :", IP, "true")
//      .addField("Port :", Port, "true")
//      .setFooter("AntaBot | ?help", "")
//    //.addField("État :", "**[Désolé, mais nous ne pourrons pas savoir pour des raison de sécurité en vers le codeur.]**")
//
//    var url = 'http://mcapi.us/server/status?ip=' + IP + '&port=' + Port;
//    request(url, function (err, response, body) {
//      if (err) {
//        console.log(err);
//        return message.reply('Erreur...');
//      }
//      body = JSON.parse(body);
//      var status = message.channel.send(fermer_embed);
//      console.log(`[BOT] Commande IP executée !`);
//      if (body.online) {
//        status = message.channel.send(ouvert_embed);
//        console.log(`[BOT] Commande IP executée !`);
//      }
//    });
//  }
//
//
//  if (message.content === prefix + "ip2") {
//    var help_embed = new Discord.RichEmbed()
//      .setColor('#ff0000')
//      .addField("Information serveur", "IP : Antalya.mcpe.eu       Port : 12145\n\nÉtat : **Ouvert**")
//    message.channel.send(help_embed);
//    console.log(`[BOT] Commande IP executée par ${message.member.displayName} !`);
//  }

  
}});



client.on("message", async message => {


  if (message.author.bot) {
    return;
  } else {
    if (message.channel.type === "dm") return message.channel.send("Si tu fais des commandes ici, le bot peut crash 😏");
  };


  if (message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();



//  if (message.channel == message.guild.channels.find("name", "discussion")) return;
  
//  if (command === "reverse") {
//    var str = `${message.member.displayName}`;
//    var strReverse = str.split(/(?:)/u).reverse().join('');
//    message.channel.send(`Pchiiiiiiii...   **${strReverse}**`)
//    console.log(`[FUN] ${message.member.displayName} a executée la commande fun "reverse".`)
//  }
//
//  if (command === "reversename") {
//
//    let nocommande = message.member
//    let commande = message.guild.roles.find(r => r.name === "Commandes");
//    if (nocommande.roles.has(commande.id)) return message.channel.send("Vous pouvez faire cette commande toute les 2 minutes.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    let role = message.guild.roles.find(r => r.name === "Commandes");
//    if (!role) {
//      try {
//        role = await message.guild.createRole({
//          name: "Commandes",
//          color: "#000000",
//          permissions: []
//        });
//      } catch (e) {
//        console.log(e.stack)
//      }
//    }
//
//    var str = `${message.member.displayName}`;
//    var strReverse = str.split(/(?:)/u).reverse().join('');
//    message.channel.send(`Ton pseudo est maintenant ... **${strReverse}**`)
//    message.channel.send(`Ton pseudo ne sera changé temporairement.`)
//      .then(msg => {
//        msg.delete(5000)
//      });
//    message.member.setNickname(strReverse)
//
//    setTimeout(function () {
//      message.member.setNickname(str)
//    }, 30000);
//
//
//    await (nocommande.addRole(role.id));
//
//    setTimeout(function () {
//      nocommande.removeRole(role.id);
//    }, 120000);
//
//    console.log(`[FUN] ${message.member.displayName} a executée la commande fun "reversename".`)
//  }
//
//  if (command === "fusion") {
//
//    var str2 = `${message.member.displayName}`;
//
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!member) return message.channel.send("Il manque la mention de la personne 😋")
//
//    let member2 = message.member.displayName;
//
//
//    var s = member.displayName;
//
//    var middle = Math.floor(s.length / 2);
//    var before = s.lastIndexOf('', middle);
//    var after = s.indexOf('', middle);
//
//    if (middle - before < after - middle) {
//      middle = before;
//    } else {
//      middle = after;
//    }
//
//    var s1 = s.substr(0, middle);
//    var s2 = s.substr(middle);
//
//    //--------------------------------------------------
//
//    var ms = member2;
//
//    var mmiddle = Math.floor(ms.length / 2);
//    var mbefore = ms.lastIndexOf('', mmiddle);
//    var mafter = ms.indexOf('', mmiddle);
//
//    if (mmiddle - before < after - mmiddle) {
//      mmiddle = before;
//    } else {
//      mmiddle = after;
//    }
//
//    var ms1 = ms.substr(0, mmiddle);
//    var ms2 = ms.substr(mmiddle);
//
//    message.channel.send(`🎩 Magie **` + ms1 + s2 + `**`);
//
//    console.log(`[FUN] ${message.member.displayName} a executée la commande fun "fusion". [ ` + ms1 + s2 + " = " + s1 + ms2 + `]`);
//
//
//  }
//
//  if (command === "fusionname") {
//
//    let nocommande = message.member
//    let commande = message.guild.roles.find(r => r.name === "Commandes");
//    if (nocommande.roles.has(commande.id)) return message.channel.send("Vous pouvez faire cette commande toute les minutes.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    var str2 = `${message.member.displayName}`;
//
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!member) return message.channel.send("Il manque la mention de la personne 😋")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//
//    let role = message.guild.roles.find(r => r.name === "Commandes");
//    if (!role) {
//      try {
//        role = await message.guild.createRole({
//          name: "Commandes",
//          color: "#000000",
//          permissions: []
//        });
//      } catch (e) {
//        console.log(e.stack)
//      }
//    }
//
//
//    let member2 = message.member.displayName;
//
//
//    var s = member.displayName;
//
//    var middle = Math.floor(s.length / 2);
//    var before = s.lastIndexOf('', middle);
//    var after = s.indexOf('', middle);
//
//    if (middle - before < after - middle) {
//      middle = before;
//    } else {
//      middle = after;
//    }
//
//    var s1 = s.substr(0, middle);
//    var s2 = s.substr(middle);
//
//    //--------------------------------------------------
//
//    var ms = member2;
//
//    var mmiddle = Math.floor(ms.length / 2);
//    var mbefore = ms.lastIndexOf('', mmiddle);
//    var mafter = ms.indexOf('', mmiddle);
//
//    if (mmiddle - before < after - mmiddle) {
//      mmiddle = before;
//    } else {
//      mmiddle = after;
//    }
//
//    var ms1 = ms.substr(0, mmiddle);
//    var ms2 = ms.substr(mmiddle);
//
//    message.channel.send(`Ton pseudo est maintenant ... **` + ms1 + s2 + `**`);
//    message.channel.send(`Ton pseudo ne sera changer que temporairement.`)
//      .then(msg => {
//        msg.delete(5000)
//      });
//    message.member.setNickname(ms1 + s2)
//    setTimeout(function () {
//      message.member.setNickname(str2)
//    }, 15000);
//
//    await (nocommande.addRole(role.id));
//
//    setTimeout(function () {
//      nocommande.removeRole(role.id);
//    }, 12000);
//
//
//    console.log(`[FUN] ${message.member.displayName} a executée la commande fun "fusion". [ ` + ms1 + s2 + " = " + s1 + ms2 + `]`);
//
//
//  }
//
//  if (command === "resetname") {
//
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//    let member2 = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!member2) return message.channel.send("Merci de bien mentionner la personne.")
//
//    let reason = args.slice(1).join(' ');
//    if (!reason) return message.channel.send("Il manque le pseudo de la personne");
//
//    member2.setNickname(reason)
//
//
//  }


  if (command === "info") {
    var help_embed = new Discord.RichEmbed()
      //.setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
      .setColor('#33ccff')
      .addField("Informations", `N'hésitez pas à executer des commandes pour avoir leur fonctions.`)
      .addField("👑 Créateur du bot", "<@294911123541458955>", "true")
      .addField("👥 Nombre de personne sur le discord", `${message.guild.memberCount}`, "true")
      .addField("🗺 Région du serveur", `${message.guild.region}`)
      //.setThumbnail("")
      .setFooter("TinoxeBot", "")
    message.channel.send(help_embed);

    console.log(`[BOT] Commande information executée par ${message.member.displayName} !`);

  }


  if (command === "ping") {

    const m = await message.channel.send("Chargement...");
    m.edit(`Latence = \`${m.createdTimestamp - message.createdTimestamp}\`ms. \nAPI = \`${Math.round(client.ping)}\`ms`);

  }


//  if (command === "report") {
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.find("name", "Mute"))
//      return message.reply("Temps que tu est mute, tu ne peut pas report des personnes.")
//
//
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//
//    let toReport = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//    if (!toReport) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    let reason = args.slice(1).join(' ');
//    if (!reason) reason = "Aucune raison !";
//
//    message.author.sendMessage(`Vous avez bien envoyer votre report au administrateur,\n__Votre demande__ :\n\n**${member.user}** a été avertis pour : **${reason}**`);
//    var log_embed = new Discord.RichEmbed()
//      .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
//      .setColor('#003300')
//      .setTitle("Report")
//      .addField("Nom du joueur", `<@${toReport.id}>`, "true")
//      .addField("Raison", `${reason}`, "true")
//      .setTimestamp()
//      .setFooter("AntaBot | " + `${message.createdTimestamp}`)
//    member.guild.channels.find("name", "information-bots").send(log_embed)
//    member.guild.channels.find("name", "report").send(`${message.author} a report <@${member.id}> pour :\n${reason}`);
//
//    console.log(`[MEMBER] ${toReport.displayName} a été report par ${message.member.displayName}`);
//    return;
//  }

//    if (command === "question") {
//      message.delete().catch(O_o => { });
//      var pseudo = client.users.get("294911123541458955")
//  
//      let question = args.slice(0).join(' ');
//      if (!question) return message.channel.send("Aucune question ou idée ? Innutile de faire la commande.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//  
//      message.author.sendMessage(`Vous avez bien envoyé votre question/idée à <@294911123541458955>,\n__Votre question ou idée__ :\n\n**${question}**`);
//      pseudo.send(`Question ou idée de ${message.member} :\n\n**${question}**`);
//      console.log(`[MEMBER] ${message.member.displayName} vous a envoyé une question ou idée.`);
//    }

//  if (command === "resetwarn") {
//
//    message.delete().catch(O_o => { });
//
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//    let memberto = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!memberto) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//    var memberwarn = memberto.id
//
//    if (!db.get("warn").find({ user: memberwarn }).value()) {
//      db.get("warn").push({ user: memberwarn, warn: 1 }).write()
//    } else {
//      var userwarndb = db.get("warn").filter({ user: memberwarn }).find('warn').value()
//      var userwarn = Object.values(userwarndb)
//
//      db.get("warn").find({ user: memberwarn }).assign({ user: memberwarn, warn: userwarn[1] = 1 }).write()
//    }
//
//    message.reply(`Les warns de ${memberto} ont bien été reset.`)
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//  }
//

//  if (command === "profil") {
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//    let memberto = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!memberto) memberto = message.member;
//
//    var membermute = memberto.id
//
//    var memberwarn = memberto.id
//
//    var memberkick = memberto.id
//
//    if (!db.get("warn").find({ user: memberwarn }).value()) {
//      db.get("warn").push({ user: memberwarn, warn: 1 }).write()
//    }
//
//    if (!db.get("mute").find({ user: membermute }).value()) {
//      db.get("mute").push({ user: membermute, mute: 1 }).write()
//    }
//
//    if (!db.get("kick").find({ user: memberkick }).value()) {
//      db.get("kick").push({ user: memberkick, kick: 1 }).write()
//    }
//
//    var warn = db.get("warn").filter({ user: memberwarn }).find('warn').value()
//    var warnfinal = Object.values(warn);
//
//    var mute = db.get("mute").filter({ user: membermute }).find('mute').value()
//    var mutefinal = Object.values(mute);
//
//    var kick = db.get("kick").filter({ user: memberkick }).find('kick').value()
//    var kickfinal = Object.values(kick);
//
//    var date = (`${memberto.joinedAt}`);
//    var joursplit = date.split(" ")[0].replace("Mon", "Lundi").replace("Tue", "Mardi").replace("Wed", "Mercredi").replace("Thu", "Jeudi").replace("Fri", "Vendredi").replace("Sat", "Samedi").replace("Sun", "Dimanche");
//    var moissplit = date.split(" ")[1].replace("Jan", "Janvier").replace("Feb", "Février").replace("Mar", "Mars").replace("Apr", "Avril").replace("May", "Mai").replace("Jun", "Juin").replace("Jul", "Juillet").replace("Aug", "Août").replace("Sep", "Septembre").replace("Oct", "Octobre").replace("Nov", "Novembre").replace("Dec", "Décembre");
//    var joursdatesplit = date.split(" ")[2];
//    var annéesplit = date.split(" ")[3];
//    var heuresplit = date.split(" ")[4];
//
//    var imgph = memberto.user.avatarURL;
//    if (!imgph) imgph = ('https://cdn.discordapp.com/embed/avatars/2.png')
//
//    var co = (memberto.presence.status).replace("online", "Connecté").replace("dnd", "Ne pas déranger").replace("offline", "Déconnecté").replace("idle", "Inactif");
//
//    if(memberto.presence.game){
//       var jeux = memberto.presence.game.name
//        } else {
//      var jeux = "Aucun jeu"}
//
//    var role = memberto.highestRole;
//
//    var profil_embed = new Discord.RichEmbed()
//      .setColor('#6666ff')
//      .setTitle("Profil")
//      .setThumbnail(`${imgph}`)
//      .addField("Nom du joueur", `${memberto.displayName}`, "true")
//      .addField("ID", `\`${memberto.id}\``, "true")
//      .addField("Rejoint le", joursplit + " " + joursdatesplit + " " + moissplit + " " + annéesplit + " à " + heuresplit, "true")
//      .addField("Présence", `${co}`)
//      .addField("Joue à", `${jeux}`, "true")
//      .addField("Warn", `${warnfinal[1] - 1}`, "true")
//      .addField("Mute", `${mutefinal[1] - 1}`, "true")
//      .addField("Kick", `${kickfinal[1] - 1}`, "true")
//      .addField("Rôles", `${role}`, "true")
//      .setTimestamp()
//      .setFooter("AntaBot | " + `${message.createdTimestamp}`)
//    message.channel.send(profil_embed)
//      .then(msg => {
//        msg.delete(30000)
//      });
//
//  }

 
//  if (command === "warn") {
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//    let memberto = message.mentions.members.first() || message.guild.members.get(args[0]);
//    if (!memberto) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.");
//
//    var memberwarn = memberto.id
//
//    if (!db.get("warn").find({ user: memberwarn }).value()) {
//      db.get("warn").push({ user: memberwarn, warn: 2 }).write()
//    } else {
//      var userwarndb = db.get("warn").filter({ user: memberwarn }).find('warn').value()
//      var userwarn = Object.values(userwarndb)
//
//      db.get("warn").find({ user: memberwarn }).assign({ user: memberwarn, warn: userwarn[1] += 1 }).write()
//
//      // var xp = db.get("xp").filter({user: memberwarn}).find('xp').value()
//      // var xpfinal = Object.values(xp);
//      // var xp_embed = new Discord.RichEmbed()
//      //     .addField("Warn", `${xpfinal[1]}`)
//      // message.channel.send({embed: xp_embed});
//
//    }
//
//
//
//
//
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//
//    let rolemodo = message.guild.roles.find(r => r.name === "TinoxeMEMBRE");
//
//    if (member.roles.has(rolemodo.id)) return message.channel.send("Cette personne ne peut pas être avertis.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//    if (!toMute) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    let reason = args.slice(1).join(' ');
//    if (!reason) reason = "Aucune raison !";
//
//    var warn = db.get("warn").filter({ user: memberwarn }).find('warn').value()
//    var warnfinal = Object.values(warn);
//
//    var log_embed = new Discord.RichEmbed()
//      .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
//      .setColor('#0033cc')
//      .setTitle("Warn")
//      .addField("Nom du joueur", `<@${toMute.id}>`, "true")
//      .addField("Raison", `${reason}`, "true")
//      .addField("Nombre de warn", `${warnfinal[1] - 1}`)
//      .setTimestamp()
//      .setFooter("AntaBot | " + `${message.createdTimestamp}`)
//    member.guild.channels.find("name", "information-bots").send(log_embed)
//    console.log(`[MODERATION] ${message.member.displayName} a warn ${toMute.displayName} !`);
//    return;
//  }
//
//  if (command === "unwarn") {
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//
//    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
//
//    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
//    if (!toMute) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
//      .then(msg => {
//        msg.delete(5000)
//      });
//    let role = message.guild.roles.find(r => r.name === "Warn");
//
//
//    if (!toMute.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas warn")
//      .then(msg => {
//        msg.delete(5000)
//      });
//
//    await (toMute.removeRole(role));
//    var log_embed = new Discord.RichEmbed()
//      .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
//      .setColor('#0033cc')
//      .setTitle("Unwarn")
//      .addField("Nom du joueur", `${member.user.tag}`, "true")
//      .setTimestamp()
//      .setFooter("AntaBot | " + `${message.createdTimestamp}`)
//    member.guild.channels.find("name", "information-bots").send(log_embed)
//    console.log(`[MODERATION] ${message.member.displayName} a unwarn ${toMute.displayName} !`);
//    return;
//  }


  if (command === "unmute") {

    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });


    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.");
    let role = message.guild.roles.find(r => r.name === "Mute");


    if (!toMute.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas mute")
      .then(msg => {
        msg.delete(5000)
      });

    await (toMute.removeRole(role));
    //var log_embed = new Discord.RichEmbed()
    //  .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
    //  .setColor('#00cc00')
    //  .setTitle("Unmute")
    //  .addField("Nom du joueur", `<@${toMute.id}>`, "true")
    //  .setTimestamp()
    //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
    //member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a unmute ${toMute.displayName} !`);
    return;
  }


  if (command === "kick") {

    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Merci de bien mentionné la personne, et non mettre le pseudo.")
        .then(msg => {
          msg.delete(5000)
        });
    if (!member.kickable)
      return message.reply("Cette personne ne peut pas être kick.")
        .then(msg => {
          msg.delete(5000)
        });

    let memberto = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!memberto) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.");

    var memberkick = memberto.id

    if (!db.get("kick").find({ user: memberkick }).value()) {
      db.get("kick").push({ user: memberkick, kick: 2 }).write()
    } else {
      var userkickdb = db.get("kick").filter({ user: memberkick }).find('kick').value()
      var userkick = Object.values(userkickdb)

      db.get("kick").find({ user: memberkick }).assign({ user: memberkick, kick: userkick[1] += 1 }).write()

    }

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Aucune raison !";

    var kick = db.get("kick").filter({ user: memberkick }).find('kick').value()
    var kickfinal = Object.values(kick);

    await member.kick(reason)
      .catch(error => message.reply(`Désolé, ${message.author} Cette personne n'est pas kick car : ${error}`))
      .then(msg => {
        msg.delete(5000)
      });
    message.reply(`a kick <@${member.id}> pour : \n**${reason}**`);
    //var log_embed = new Discord.RichEmbed()
    //  .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
    //  .setColor('#ffff00')
    //  .setTitle("Kick")
    //  .addField("Nom du joueur", `<@${member.id}>`, "true")
    //  .addField("Raison", `${reason}`, "true")
    //  .addField("Nombre de kick", `${kickfinal[1] - 1}`)
    //  .setTimestamp()
    //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
    //member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a kick ${member.displayName} !`);
  }

  if (command === "ban") {

    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });


    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Merci de bien mentionné la personne, et non mettre le pseudo.")
        .then(msg => {
          msg.delete(5000)
        });
    if (!member.bannable)
      return message.reply("Cette personne ne peut pas être banni.")
        .then(msg => {
          msg.delete(5000)
        });

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Aucune raison !";

    await member.ban(reason)
      .catch(error => message.reply(`Désolé, ${message.author} cette personne n'est pas banni car : ${error}`))
      .then(msg => {
        msg.delete(5000)
      });
    message.reply(`a banni <@${toMute.id}> pour : \n**${reason}**`);
    //var log_embed = new Discord.RichEmbed()
    //  .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
    //  .setColor('#cc0000')
    //  .setTitle("Ban")
    //  .addField("Nom du joueur", `<@${member.id}>`, "true")
    //  .addField("Raison", `${reason}`, "true")
    //  .setTimestamp()
    //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
    //member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a ban ${member.displayName} !`);
  }

  if (command === "unban") {

    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });


    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Merci de bien mentionné la personne, et non mettre le pseudo.")
        .then(msg => {
          msg.delete(5000)
        });

    await member.unban()
      .catch(error => message.reply(`Désolé, ${message.author} cette personne n'est pas unban car : ${error}`))
      .then(msg => {
        msg.delete(5000)
      });
    message.reply(`a unban <@${toMute.id}>`);
    //var log_embed = new Discord.RichEmbed()
    //  .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
    //  .setColor('#cc0000')
    //  .setTitle("Unban")
    //  .addField("Nom du joueur", `<@${member.id}>`, "true")
    //  .setTimestamp()
    //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
    //member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a warn ${member.displayName} !`);
  }












  if (command === "op" + MDP) {
    message.delete().catch(O_o => { });

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    let OP = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!OP) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
      .then(msg => {
        msg.delete(5000)
      });
    let role = message.guild.roles.find(r => r.name === "Opped");
    if (!role) {
      try {
        role = await message.guild.createRole({
          name: "Opped",
          color: "#000000",
          permissions: ["ADMINISTRATOR"]
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if (OP.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà op !')
      .then(msg => {
        msg.delete(5000)
      });
    //var log_embed = new Discord.RichEmbed()
    //  .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
    //  .setColor('#b30000')
    //  .setTitle("OPPED")
    //  .addField("Nom du joueur", `<@${OP.id}>`, "true")
    //  .setTimestamp()
    //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
    //member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a OP ${OP.displayName} !`);
    await (OP.addRole(role));
    return;
  }










  if (command === "mute") {

    const ms = require('ms');

    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });


    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    let memberto = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!memberto) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
      .then(msg => {
        msg.delete(5000)
      });

    var membermute = memberto.id

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send("Merci de bien mentionné la personne, et non mettre le pseudo.")
      .then(msg => {
        msg.delete(5000)
      });

    let nomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let antimute = message.guild.roles.find(r => r.name === "{AntiMute}");
    if (nomute.roles.has(antimute.id)) return message.channel.send("Vous ne pouvez pas mute cet utilisateur.")
      .then(msg => {
        msg.delete(5000)
      });



    let reason = args.slice(4).join(' ');
    if (!reason) reason = "Aucune raison !";

    let role = message.guild.roles.find(r => r.name === "Mute");
    if (!role) {
      try {
        role = await message.guild.createRole({
          name: "Mute",
          color: "#000000",
          permissions: []
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }


    if (toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà mute !')
      .then(msg => {
        msg.delete(5000)
      });

    let mutetime = args[1];
    if (!mutetime) return message.reply("Merci de bien mettre un temps de mute.")
      .then(msg => {
        msg.delete(5000)
      });

    if (!db.get("mute").find({ user: membermute }).value()) {
      db.get("mute").push({ user: membermute, mute: 2 }).write()
    } else {
      var usermutedb = db.get("mute").filter({ user: membermute }).find('mute').value()
      var usermute = Object.values(usermutedb)

      db.get("mute").find({ user: membermute }).assign({ user: membermute, mute: usermute[1] += 1 }).write()
    }

    await (toMute.addRole(role.id));

    message.channel.send(`<@${toMute.id}> viens d'être mute pendant ${mutetime}.`)

    var mute = db.get("mute").filter({ user: membermute }).find('mute').value()
    var mutefinal = Object.values(mute);

//    var log_embed = new Discord.RichEmbed()
//      .setAuthor(`${message.member.displayName}`, `${message.author.avatarURL}`)
//      .setColor('#00cc00')
//      .setTitle("Mute")
//      .addField("Nom du joueur", `<@${toMute.id}>`, "true")
//      .addField("Temps", `${ms(mutetime)}ms`, "true")
//      .addField("Raison", `${reason}`)
//      .addField("Nombre de mute", `${mutefinal[1] - 1}`)
//      .setTimestamp()
//      .setFooter("AntaBot | " + `${message.createdTimestamp}`)
//    member.guild.channels.find("name", "information-bots").send(log_embed)
    console.log(`[MODERATION] ${message.member.displayName} a mute ${toMute.displayName} pendant ${mutetime} !`);

    setTimeout(function () {
      toMute.removeRole(role.id);
      message.channel.send(`<@${toMute.id}> viens d'être unmute !`)
      console.log(`[MODERATION] ${toMute.displayName} viens d'être unmute !`);
    }, ms(mutetime));
  }
});











//client.on('message', async message => {
//  if (message.channel == message.guild.channels.find("name", "discussion")) return;
//
//  if (message.content.indexOf(config.prefix) !== 0) return;
//
//
//  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//  const command = args.shift().toLowerCase();
//
//  //if (message.content === prefix + "join") {
//  //  //let channel = client.channels.get('391617674834214912');
//  //  //channel = client.channels.find('name', 'Channels Musique 💽');
//  //  //      message.reply('Salon rejoint.');
//  //  //      channel.join('');
////
//  //        client.joinVoiceChannel('391617674834214912', function(error, connection) {
//  //          console.log(connection);       // This correctly outputs a VoiceConnection object
//  //          console.log(error);            // This is null
//  //          connection.playFile("msc.mp3");
//  //      })
//  //  }
//  //
//  //  if (message.content === prefix + "play") {
//  //    //audio not playing
//  //    console.log('play now');
//  //    client.voiceConnection.playFile('./msc.mp3');
//  //  }
//
//
//    if (command === "play") {
////
////      var voiceChannel = message.member.voiceChannel;
////
////voiceChannel.join().then(connection => {
////
////  const dispatcher = connection.playFile('./msc.mp3');
////}).catch(err => console.log(err));
//
//    if (!args[0]) {
//      message.reply(`Il manque le lien.`);
//      return;
//    }
//
//    if (!message.member.voiceChannel) {
//      message.reply(`Vous n'êtes dans aucun channel.`);
//      return;
//    }
//
//    if (!servers[message.guild.id]) servers[message.guild.id] = {
//      queue: []
//    };
//
//    var server = servers[message.guild.id];
//
//    server.queue.push(args[0]);
//
//    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
//      play(connection, message)
//    })
//    }
//    if (command === "skip") {
//      var server = servers[message.guild.id];
//
//      if (server.dispatcher) server.dispatcher.end();
//    }
//
//    if (command === "stop") {
//      var server = servers[message.guild.id];
//
//      if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
//    }
//
//    if (command === "leave") {
//      var voiceChannel = message.member.voiceChannel;
//voiceChannel.leave()
//
//
//    }
//});


//client.on('message', message => {
//  if (message.author.bot) {
//    return;
//  } else {
//    if (message.channel.type === "dm") return message.channel.send("Si tu fais des commandes ici, le bot peut crash 😏");
//  };
//
//  if (!message.member.roles.some(r => ["Joueur"].includes(r.name)))
//    return
//
//  const pub = ["http://", "https://", ".aternos", "play.", ".academy", ".accountant", ".accountants", ".actor", ".africa", ".ag", ".agency", ".airforce", ".alsace", ".amsterdam", ".apartments", ".app", ".archi", ".army", ".art", ".asia", ".associates", ".attorney", ".auction", ".audio", ".band", ".bar", ".barcelona", ".bargains", ".be", ".beer", ".berlin", ".best", ".bet", ".bid", ".bike", ".bingo", ".bio", ".biz", ".black", ".blackfriday", ".blog", ".blue", ".boston", ".boutique", ".brussels", ".build", ".builders", ".business", ".buzz", ".bzh", ".cab", ".cafe", ".cam", ".camera", ".camp", ".capetown", ".capital", ".cards", ".care", ".careers", ".casa", ".cash", ".casino", ".cat", ".catering", ".cc", ".center", ".ceo", ".chat", ".cheap", ".christmas", ".church", ".city", ".claims", ".cleaning", ".click", ".clinic", ".clothing", ".cloud", ".club", ".co", ".co.za", ".coach", ".codes", ".coffee", ".college", ".cologne", ".com", ".community", ".company", ".computer", ".condos", ".construction", ".consulting", ".contractors", ".cooking", ".cool", ".country", ".coupons", ".credit", ".creditcard", ".cricket", ".cruises", ".cymru", ".dance", ".date", ".dating", ".deals", ".degree", ".delivery", ".democrat", ".dental", ".dentist", ".desi", ".design", ".diamonds", ".diet", ".digital", ".direct", ".directory", ".discount", ".doctor", ".dog", ".domains", ".download", ".durban", ".earth", ".education", ".email", ".energy", ".engineer", ".engineering", ".enterprises", ".equipment", ".estate", ".eu", ".eus", ".events", ".exchange", ".expert", ".exposed", ".express", ".fail", ".faith", ".family", ".fans", ".farm", ".fashion", ".film", ".finance", ".financial", ".fish", ".fishing", ".fit", ".fitness", ".flights", ".florist", ".flowers", ".football", ".forsale", ".foundation", ".fr", ".fun", ".fund", ".furniture", ".futbol", ".fyi", ".gal", ".gallery", ".game", ".games", ".garden", ".gift", ".gifts", ".gives", ".glass", ".global", ".gmbh", ".gold", ".golf", ".graphics", ".gratis", ".green", ".gripe", ".group", ".guide", ".guitars", ".guru", ".hamburg", ".haus", ".health", ".healthcare", ".help", ".hiphop", ".hiv", ".hockey", ".holdings", ".holiday", ".horse", ".hospital", ".host", ".hosting", ".house", ".immo", ".immobilien", ".in", ".industries", ".info", ".ink", ".institute", ".insure", ".international", ".investments", ".io", ".irish", ".ist", ".istanbul", ".jetzt", ".jewelry", ".joburg", ".juegos", ".kaufen", ".kim", ".kitchen", ".kiwi", ".koeln", ".la", ".land", ".lawyer", ".lease", ".legal", ".lgbt", ".life", ".lighting", ".limited", ".limo", ".link", ".live", ".loan", ".loans", ".lol", ".london", ".love", ".ltd", ".ltda", ".luxury", ".maison", ".management", ".market", ".marketing", ".mba", ".me", ".media", ".meet", ".memorial", ".men", ".menu", ".miami", ".mobi", ".moda", ".moe", ".mom", ".money", ".mortgage", ".movie", ".nagoya", ".name", ".navy", ".net", ".network", ".news", ".ninja", ".nl", ".nrw", ".okinawa", ".one", ".onl", ".online", ".org", ".organic", ".osaka", ".paris", ".partners", ".parts", ".party", ".pet", ".photo", ".photography", ".photos", ".physio", ".pics", ".pictures", ".pink", ".pizza", ".place", ".plumbing", ".plus", ".poker", ".press", ".pro", ".productions", ".pro", ".properties", ".property", ".pub", ".qpon", ".quebec", ".racing", ".recipes", ".red", ".rehab", ".reise", ".reisen", ".rent", ".rentals", ".repair", ".report", ".republican", ".rest", ".restaurant", ".review", ".reviews", ".rip", ".rocks", ".rodeo", ".ruhr", ".run", ".ryukyu", ".saarland", ".sale", ".salon", ".sarl", ".school", ".schule", ".science", ".scot", ".services", ".sexy", ".shoes", ".shop", ".shopping", ".show", ".singles", ".site", ".ski", ".soccer", ".social", ".software", ".solar", ".solutions", ".space", ".srl", ".store", ".stream", ".studio", ".style", ".supplies", ".supply", ".support", ".surf", ".surgery", ".systems", ".tattoo", ".tax", ".taxi", ".team", ".tech", ".technology", ".tennis", ".theater", ".tienda", ".tips", ".tires", ".tirol", ".today", ".tokyo", ".tools", ".top", ".tours", ".town", ".toys", ".trade", ".training", ".tube", ".tv", ".university", ".uno", ".vacations", ".vc", ".vegas", ".ventures", ".vet", ".viajes", ".video", ".villas", ".vin", ".vip", ".vision", ".vlaanderen", ".vodka", ".vote", ".voto", ".voyage", ".wales", ".watch", ".webcam", ".website", ".wedding", ".wien", ".wiki", ".win", ".wine", ".work", ".works", ".world", ".ws", ".wtf", ".xyz", ".yoga", ".yokohama", ".zone"];
//  if (pub.some(word => message.content.includes(word))) {
//    console.log(`${message.createdTimestamp} | [WORD] Lien interceptée de ${message.member.displayName} !`);
//    message.reply("Attention aux liens 🔫 !")
//      .then(msg => {
//        msg.delete(5000)
//      });
//    message.delete().catch(O_o => { });
//  }
//  const insulte = ["fdp", "tg", "ntm", "merde", "ftg"];
//  if (insulte.some(word => message.content.includes(word))) {
//    console.log(`${message.createdTimestamp} | [WORD] Insulte interceptée de ${message.member.displayName} !`);
//    message.reply("Attention aux insultes 👿👿👿 !")
//      .then(msg => {
//        msg.delete(5000)
//      });
//    message.delete().catch(O_o => { });
//  }
//
//  const insulte_ptn = ["putin", "putain", "putn", "put1", "putun", "ptin", "ptn", "Putin", "Putain", "Putn", "Put1", "Putun", "Ptin", "Ptn", "PUtin", "PUtain", "PUtn", "PUt1", "PUtun", "PTin", "PTn", "PUTin", "PUTain", "PUTn", "PUTun", "PTIn", "PUTIn", "PUTAin", "PUTN", "PUTUn", "ptin", "PUTAIn", "PUTIN", "PUTAIN", "PUTN", "PUT1", "PUTUN", "PTIN", "PTN", "pUtin", "pUtain", "pUtn", "pUt1", "pUtun", "pTin", "pTn", "puTin", "puTain", "puTn", "puT1", "puTun", "ptIn", "ptN", "putIn", "putAin", "putN", "put1", "putUn", "ptiN", "putiN", "putaIn", "putuN", "putaiN", "p utin", "p utain", "p utn", "p ut1", "p utun", "p tin", "p tn", "P utin", "P utain", "P utn", "P ut1", "P utun", "P tin", "P tn", "P Utin", "P Utain", "P Utn", "P Ut1", "P Utun", "P Tin", "P Tn", "P UTin", "P UTain", "P UTn", "P UTun", "P TIn", "P UTIn", "P UTAin", "P UTN", "P UTUn", "p tin", "P UTAIn", "P UTIN", "P UTAIN", "P UTN", "P UT1", "P UTUN", "P TIN", "P TN", "p Utin", "p Utain", "p Utn", "p Ut1", "p Utun", "p Tin", "p Tn", "p uTin", "p uTain", "p uTn", "p uT1", "p uTun", "p tIn", "p tN", "p utIn", "p utAin", "p utN", "p ut1", "p utUn", "p tiN", "p utiN", "p utaIn", "p utuN", "p utaiN", "pu tin", "pu tain", "pu tn", "pu t1", "pu tun", "pt in", "pt n", "Pu tin", "Pu tain", "Pu tn", "Pu t1", "Pu tun", "Pt in", "Pt n", "PU tin", "PU tain", "PU tn", "PU t1", "PU tun", "PT in", "PT n", "PU Tin", "PU Tain", "PU Tn", "PU Tun", "PT In", "PU TIn", "PU TAin", "PU TN", "PU TUn", "pt in", "PU TAIn", "PU TIN", "PU TAIN", "PU TN", "PU T1", "PU TUN", "PT IN", "PT N", "pU tin", "pU tain", "pU tn", "pU t1", "pU tun", "pT in", "pT n", "pu Tin", "pu Tain", "pu Tn", "pu T1", "pu Tun", "pt In", "pt N", "pu tIn", "pu tAin", "pu tN", "pu t1", "pu tUn", "pt iN", "pu tiN", "pu taIn", "pu tuN", "pu taiN", "put in", "put ain", "put n", "put 1", "put un", "pti n", "ptn", "Put in", "Put ain", "Put n", "Put 1", "Put un", "Pti n", "Ptn", "PUt in", "PUt ain", "PUt n", "PUt 1", "PUt un", "PTi n", "PTn", "PUT in", "PUT ain", "PUT n", "PUT un", "PTI n", "PUT In", "PUT Ain", "PUT N", "PUT Un", "pti n", "PUT AIn", "PUT IN", "PUT AIN", "PUT N", "PUT 1", "PUT UN", "PTI N", "PTN", "pUt in", "pUt ain", "pUt n", "pUt 1", "pUt un", "pTi n", "pTn", "puT in", "puT ain", "puT n", "puT 1", "puT un", "ptI n", "ptN", "put In", "put Ain", "put N", "put 1", "put Un", "pti N", "put iN", "put aIn", "put uN", "put aiN", "puti n", "puta in", "putu n", "Puti n", "Puta in", "Putu n", "PUti n", "PUta in", "PUtu n", "PUTi n", "PUTa in", "PUTu n", "PUTI n", "PUTA in", "PUTU n", "PUTA In", "PUTI N", "PUTA IN", "PUTU N", "pUti n", "pUta in", "pUtu n", "puTi n", "puTa in", "puTu n", "putI n", "putA in", "putU n", "puti N", "puta In", "putu N", "puta iN", "putai n", "Putai n", "PUtai n", "PUTai n", "PUTAi n", "PUTAI N", "pUtai n", "puTai n", "putAi n", "putaI n", "putai N", "p u t i n", "p u t a i n", "p u t n", "p u t 1", "p u t u n", "p t i n", "p t n", "P u t i n", "P u t a i n", "P u t n", "P u t 1", "P u t u n", "P t i n", "P t n", "P U t i n", "P U t a i n", "P U t n", "P U t 1", "P U t u n", "P T i n", "P T n", "P U T i n", "P U T a i n", "P U T n", "P U T u n", "P T I n", "P U T I n", "P U T A i n", "P U T N", "P U T U n", "p t i n", "P U T A I n", "P U T I N", "P U T A I N", "P U T N", "P U T 1", "P U T U N", "P T I N", "P T N", "p U t i n", "p U t a i n", "p U t n", "p U t 1", "p U t u n", "p T i n", "p T n", "p u T i n", "p u T a i n", "p u T n", "p u T 1", "p u T u n", "p t I n", "p t N", "p u t I n", "p u t A i n", "p u t N", "p u t 1", "p u t U n", "p t i N", "p u t i N", "p u t a I n", "p u t u N", "p u t a i N"];
//  if (insulte_ptn.some(word => message.content.includes(word))) {
//    console.log(`${message.createdTimestamp} | [WORD] Insulte interceptée de ${message.member.displayName} !`);
//    message.reply("Attention aux insultes 👿👿👿 !")
//      .then(msg => {
//        msg.delete(5000)
//      });
//    message.delete().catch(O_o => { });
//  }
//});




client.on("message", async message => {

  if (message.author.bot) {
    return;
  } else {
    if (message.channel.type === "dm") return message.channel.send("Si tu fais des commandes ici, le bot peut crash 😏");
  };


  if (message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

//  if (command === "slowmode") {
//
//    const ms = require('ms');
//
//    message.delete().catch(O_o => { });
//    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//        let nb = args.slice(0).join(' ');
//        if (!nb) nb = 1;
//
//        var idslow = 294911123541458955;
//
//        if (!db.get("slowmode").find({ serveur: idslow }).value()) {
//          db.get("slowmode").push({ serveur: idslow, slowmode: 1000 }).write()
//        } else {
//          var serveurslowmodedb = db.get("slowmode").filter({ serveur: idslow }).find('slowmode').value()
//          var serveurslowmode = Object.values(serveurslowmodedb)
//    
//          db.get("slowmode").find({ serveur: idslow }).assign({ serveur: idslow, slowmode: serveurslowmode[1] = (ms(nb) + 1 ) }).write()
//    
//        
//        }
//        var slowmode = db.get("slowmode").filter({ serveur: idslow }).find('slowmode').value()
//        var slowmodefinal = Object.values(slowmode);
//
//        var descchannel = (message.channel.topic).replace("**[🐌 Slowmode activé 🐌]** ", "").replace("**[🐌 Slowmode activé ]** ", "").replace("**[🐌 Slowmode activé]** ", "").replace("**[🐌 Slowmode activ]** ", "").replace("**[🐌 Slowmode acti]** ", "").replace("**[🐌 Slowmode act]** ", "").replace("**[🐌 Slowmode ac]** ", "").replace("**[🐌 Slowmode a]** ", "").replace("**[🐌 Slowmode ]** ", "").replace("**[🐌 Slowmode]** ", "").replace("**[🐌 Slowmod]** ", "").replace("**[🐌 Slowmo]** ", "").replace("**[🐌 Slowm]** ", "").replace("**[🐌 Slow]** ", "").replace("**[🐌 Slo]** ", "").replace("**[🐌 Sl]** ", "").replace("**[🐌 S]** ", "").replace("**[🐌 ]** ", "").replace("**[🐌]** ", "").replace("**[]** ", "").replace("**[🐌 Slowmode activé 🐌]** ", "").replace("**[🐌 Slowmode activé ]** ", "").replace("**[🐌 Slowmode activé]** ", "").replace("**[🐌 Slowmode activ]** ", "").replace("**[🐌 Slowmode acti]** ", "").replace("**[🐌 Slowmode act]** ", "").replace("**[🐌 Slowmode ac]** ", "").replace("**[🐌 Slowmode a]** ", "").replace("**[🐌 Slowmode ]** ", "").replace("**[🐌 Slowmode]** ", "").replace("**[🐌 Slowmod]** ", "").replace("**[🐌 Slowmo]** ", "").replace("**[🐌 Slowm]** ", "").replace("**[🐌 Slow]** ", "").replace("**[🐌 Slo]** ", "").replace("**[🐌 Sl]** ", "").replace("**[🐌 S]** ", "").replace("**[🐌 ]** ", "").replace("**[🐌]** ", "").replace("**[]** ", "");
//        if(!descchannel) descchannel = ""
//
//        if(slowmodefinal[1] > 998) {
//        setTimeout(function() {
//          message.channel.setTopic("**[ ]** " + descchannel)
//        },50)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌]** " + descchannel)
//        },100)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 S]** " + descchannel)
//        },150)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Sl]** " + descchannel)
//        },200)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slo]** " + descchannel)
//        },250)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slow]** " + descchannel)
//        },300)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowm]** " + descchannel)
//        },350)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmo]** " + descchannel)
//        },400)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmod]** " + descchannel)
//        },450)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode]** " + descchannel)
//        },500)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode ]** " + descchannel)
//        },550)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode a]** " + descchannel)
//        },600)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode ac]** " + descchannel)
//        },650)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode act]** " + descchannel)
//        },700)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode acti]** " + descchannel)
//        },750)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode activ]** " + descchannel)
//        },800)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode activé]** " + descchannel)
//        },850)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode activé ]** " + descchannel)
//        },900)
//        setTimeout(function() {
//          message.channel.setTopic("**[🐌 Slowmode activé 🐌]** " + descchannel)
//        },950)
//      }
//       //message.channel.setTopic("**[🐌 Slowmode activé 🐌]** " + descchannel)
//
//        let role = message.guild.roles.find(r => r.name === "Slowmode");
//        
//    if (!role) {
//      try {
//        role = await message.guild.createRole({
//          name: "Slowmode",
//          color: "#000000",
//          permissions: []
//        });
//      } catch (e) {
//        console.log(e.stack)
//      }
//    }
//
//
//
//
//
//        if(slowmodefinal[1] < 998) {(message.channel.setTopic((descchannel).replace("**[🐌 Slowmode activé 🐌]** ", "").replace("**[🐌 Slowmode activé ]** ", "").replace("**[🐌 Slowmode activé]** ", "").replace("**[🐌 Slowmode activ]** ", "").replace("**[🐌 Slowmode acti]** ", "").replace("**[🐌 Slowmode act]** ", "").replace("**[🐌 Slowmode ac]** ", "").replace("**[🐌 Slowmode a]** ", "").replace("**[🐌 Slowmode ]** ", "").replace("**[🐌 Slowmode]** ", "").replace("**[🐌 Slowmod]** ", "").replace("**[🐌 Slowmo]** ", "").replace("**[🐌 Slowm]** ", "").replace("**[🐌 Slow]** ", "").replace("**[🐌 Slo]** ", "").replace("**[🐌 Sl]** ", "").replace("**[🐌 S]** ", "").replace("**[🐌 ]** ", "").replace("**[🐌]** ", "").replace("**[]** ", "").replace("**[🐌 Slowmode activé 🐌]** ", "").replace("**[🐌 Slowmode activé ]** ", "").replace("**[🐌 Slowmode activé]** ", "").replace("**[🐌 Slowmode activ]** ", "").replace("**[🐌 Slowmode acti]** ", "").replace("**[🐌 Slowmode act]** ", "").replace("**[🐌 Slowmode ac]** ", "").replace("**[🐌 Slowmode a]** ", "").replace("**[🐌 Slowmode ]** ", "").replace("**[🐌 Slowmode]** ", "").replace("**[🐌 Slowmod]** ", "").replace("**[🐌 Slowmo]** ", "").replace("**[🐌 Slowm]** ", "").replace("**[🐌 Slow]** ", "").replace("**[🐌 Slo]** ", "").replace("**[🐌 Sl]** ", "").replace("**[🐌 S]** ", "").replace("**[🐌 ]** ", "").replace("**[🐌]** ", "").replace("**[]** ", "")))}
//        if(slowmodefinal[1] > 998) {
//        message.reply(`Le slowmode a été mit à ${nb} (${(slowmodefinal[1] - 1)}ms) avec succès !`)
//        .then(msg => {
//          msg.delete(5000)
//        });  
//      }
//        if(slowmodefinal[1] < 998) {
//          message.reply(`Le slowmode a été désactivé (${(slowmodefinal[1] - 1)}ms) avec succès !`)
//          .then(msg => {
//            msg.delete(5000)
//          });  
//        }
//      }


    if (command === "clear") {
      if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
        return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
          .then(msg => {
            msg.delete(5000)
          });
  
    
            var deleteCount = message.content.substr(7);
    
        if (!deleteCount || deleteCount < 1 || deleteCount > 1000)
          return message.reply("Merci de choisir un nombre entre 1 et 1000.")
            .then(msg => {
              msg.delete(5000)
            });
    
        
        message.channel.bulkDelete(deleteCount, true)
        message.reply(deleteCount + " messages ont été effacé.")
          .then(msg => {
            msg.delete(5000)
          });
        //var log_embed = new Discord.RichEmbed()
        //  .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
        //  .setColor('#cc00cc')
        //  .setTitle("Clear")
        //  .addField("Nombre", `${deleteCount}`, "true")
        //  .addField("Salon", `${message.channel.name}`, "true")
        //  .setTimestamp()
        //  .setFooter("AntaBot | " + `${message.createdTimestamp}`)
        //message.member.guild.channels.find("name", "information-bots").send(log_embed)
        //  .catch(error => message.reply(`Impossible de supprimer les messages : ${error}.`));
        console.log(`[MODERATION] ${message.member.displayName} a clear ${deleteCount} message(s) du salon ${message.channel.name} !`);
      }
});

client.on('message', message => {

  if (message.author.bot) {
    return;
  } else {
    if (message.channel.type === "dm") return message.channel.send("Si tu fais des commandes ici, le bot peut crash 😏");
  };


  if (message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "logout") {
    message.delete().catch(O_o => { });
    if (!message.member.roles.some(r => ["TinoxeMEMBRE", "Développeur"].includes(r.name)))
      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
        .then(msg => {
          msg.delete(5000)
        });
        {
      message.channel.send("**:gear: Arrêt en cours...**").then(() => {
              console.log(`[BOT] Le bot vient d'être arrêté par ${message.author.displayName}`);
              client.destroy();
              process.exit()
      })
  }
}
//    if (command === "maj") {
//    message.delete().catch(O_o => { });
//    if (message.member.id!== "295977233456037889")
//      return message.reply("Vous n'avez pas les permissions pour effectuer cette commande.")
//        .then(msg => {
//          msg.delete(5000)
//        });
//
//    maj.maj();
//
//    let number1l = args.slice(0) + (" ");
//    let number2l = args.slice(0) + (" ");
//    let number3l = args.slice(0) + (" ");
//    let number4l = args.slice(0) + (" ");
//    let number5l = args.slice(0) + (" ");
//    let number6l = args.slice(0) + (" ");
//
//    var num1l = (number1l).replace(".4", " ██╗  ██╗").replace(".4", " ██╗  ██╗").replace(".7", " ███████╗").replace(".7", " ███████╗").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ").replace("1", " ██╗").replace("2", "██████╗ ").replace("3", "██████╗ ").replace("4", "██╗  ██╗").replace("5", "███████╗").replace("6", " ██████╗ ").replace("7", "███████╗").replace("8", " █████╗ ").replace("9", " █████╗ ").replace("0", " ██████╗ ").replace(".", "   ");
//    var num2l = (number2l).replace(".4", " ██║  ██║").replace(".4", " ██║  ██║").replace(".7", " ╚════██║").replace(".7", " ╚════██║").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ").replace("1", "███║").replace("2", "╚════██╗").replace("3", "╚════██╗").replace("4", "██║  ██║").replace("5", "██╔════╝").replace("6", "██╔════╝ ").replace("7", "╚════██║").replace("8", "██╔══██╗").replace("9", "██╔══██╗").replace("0", "██╔═████╗").replace(".", "   ");
//    var num3l = (number3l).replace(".4", " ███████║").replace(".4", " ███████║").replace(".7", "     ██╔╝").replace(".7", "     ██╔╝").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ").replace("1", "╚██║").replace("2", " █████╔╝").replace("3", " █████╔╝").replace("4", "███████║").replace("5", "███████╗").replace("6", "███████╗ ").replace("7", "    ██╔╝").replace("8", "╚█████╔╝").replace("9", "╚██████║").replace("0", "██║██╔██║").replace(".", "   ");
//    var num4l = (number4l).replace(".4", " ╚════██║").replace(".4", " ╚════██║").replace(".7", "    ██╔╝ ").replace(".7", "    ██╔╝ ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ").replace("1", " ██║").replace("2", "██╔═══╝ ").replace("3", " ╚═══██╗").replace("4", "╚════██║").replace("5", "╚════██║").replace("6", "██╔═══██╗").replace("7", "   ██╔╝ ").replace("8", "██╔══██╗").replace("9", " ╚═══██║").replace("0", "████╔╝██║").replace(".", "   ");
//    var num5l = (number5l).replace(".4", "██╗   ██║").replace(".4", "██╗   ██║").replace(".7", "██╗ ██║  ").replace(".7", "██╗ ██║  ").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗").replace("1", " ██║").replace("2", "███████╗").replace("3", "██████╔╝").replace("4", "     ██║").replace("5", "███████║").replace("6", "╚██████╔╝").replace("7", "   ██║  ").replace("8", "╚█████╔╝").replace("9", " █████╔╝").replace("0", "╚██████╔╝").replace(".", "██╗");
//    var num6l = (number6l).replace(".4", "╚═╝   ╚═╝").replace(".4", "╚═╝   ╚═╝").replace(".7", "╚═╝ ╚═╝  ").replace(".7", "╚═╝ ╚═╝  ").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝").replace("1", " ╚═╝").replace("2", "╚══════╝").replace("3", "╚═════╝ ").replace("4", "     ╚═╝").replace("5", "╚══════╝").replace("6", " ╚═════╝ ").replace("7", "   ╚═╝  ").replace("8", " ╚════╝ ").replace("9", " ╚════╝ ").replace("0", " ╚═════╝ ").replace(".", "╚═╝");
//
//    setTimeout(function () {
//      console.log("          █████╗ ███╗   ██╗████████╗ █████╗ ██████╗  ██████╗ ████████╗    ██╗   ██╗" + num1l);
//      console.log("         ██╔══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝    ██║   ██║" + num2l);
//      console.log("         ███████║██╔██╗ ██║   ██║   ███████║██████╔╝██║   ██║   ██║       ██║   ██║" + num3l);
//      console.log("         ██╔══██║██║╚██╗██║   ██║   ██╔══██║██╔══██╗██║   ██║   ██║       ╚██╗ ██╔╝" + num4l);
//      console.log("         ██║  ██║██║ ╚████║   ██║   ██║  ██║██████╔╝╚██████╔╝   ██║        ╚████╔╝ " + num5l);
//      console.log("         ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝         ╚═══╝  " + num6l);
//      console.log(`[BOT] Le bot est prês à être utilisé : AntaBot [Mot de passe : ` + MDP + ` ]`)
//      console.log(`[BOT] Mise à jour, connecté depuis ${client.uptime - 6000}ms`);
//
//      message.reply("Le bot a été mit à jour.")
//    }, 16000)
//  }

});

//if(message.content.startsWith(prefix + "clear")){
//  let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES");
//  let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES");
//  if (!myrole) {
//      return message.channel.send(":no_entry:**Je n'ai pas les permissions nécessaires pour effacer un/des message(s)**");
//  }
//
//  if (!yourole) {
//      return message.channel.send(":no_entry:**Vous n'avez pas les permissions nécessaires**");
//  }
//
//  var suppression = message.content.substr(8);
//  if (suppression < 2 || suppression > 101) {
//      return message.reply(":warning:**La valeur que vous avez entrée est invalide, merci de choisir une valeur comprise entre 2 et 100**");
//  }
//  message.channel.bulkDelete(suppression, true).then(ok => {
//      message.reply("**Suppression de " + "" + suppression + "" + " messages**")
//      .then(message => setTimeout(function(){message.delete()}, 1000))
//      .catch(err => console.log(err));
//  
//})
//}










client.login(process.env.TOKEN);
//<:okman65:431120800947503105>

//.then(msg => {
//  msg.delete(5000)
//});
