\\\\Albions#5704
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`link_${message.guild.id}`, "aç")
    message.channel.send('Sunucunuzda artık Link Filtresi aktif edilmiştir!')
  return
}
if (args[0] === 'kapat') {
  db.delete(`link_${message.guild.id}`)
message.channel.send('Sunucunuzda artık Link Filtresi devre dışı bırakılmıştır!')
return
}
  message.channel.send('Sunucuda Link Filtresi açmak için lütfen aç/kapat yazınız.\nÖrnek: !küfür aç: Sunucunuzda artık Link Filtresi aktif eder.\nSunucunuzda artık Link Filtresi devre dışı bırakır!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['link','linkayarla','link-ayarla'],
 permLevel: 0
};

exports.help = {
 name: 'link',
 description: 'Link Engel Sistemi V12',
 usage: '${prefix}link aç/kapat | Link engellemeyi açar veya kapatırsınız!'
};
\\\\Albions#5704
