client.on("message", async msg => {
  
  
 const i = await db.fetch(`link_${msg.guild.id}`)
    if (i == "acik") {
        const link = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",".site",".bet",".club",".group",".store",".xyz",".ltd",".club",".online",".com",".today",".cafe",".agency",".capital",".style",".film",".express",".design",".business",".tools",".exchange",".events",".buzz",".fashion",".health",".rent",".london",".clinic",".watch",".fan",".directory",".ventures",".kitchen",".parts",".football",".photography"];
        if (link.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Sunucunuzda **Link Filtresi** açık bu yüzden Link atamazsınız!')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.link`)
    if (i) {
        const link = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",".site",".bet",".club",".group",".store",".xyz",".ltd",".club",".online",".com",".today",".cafe",".agency",".capital",".style",".film",".express",".design",".business",".tools",".exchange",".events",".buzz",".fashion",".health",".rent",".london",".clinic",".watch",".fan",".directory",".ventures",".kitchen",".parts",".football",".photography"];
        if (link.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return msg.reply('Sunucunuzda **Link Filtresi** açık bu yüzden Link atamazsınız!')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
