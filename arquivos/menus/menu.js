const menu = (prefix, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender) => {
return `
 
┌──⊰ _*${nomeBot}️*_
┃𝐍𝐎𝐌𝐄: ${pushname} 
└──────────⊰
┌──⊰ _*♨️⭐️♨️*_
│🎭➣${prefix}novocmd
│🎭➣${prefix}bug
└──────────⊰
┌──⊰ _*♻️ALEATÓRIO♻️*_
│🎭➣${prefix}menuadm
│🎭➣${prefix}menu2
│🎭➣${prefix}perfil
│🎭➣${prefix}listadm
│🎭➣${prefix}ping
│🎭➣${prefix}infogp
└─────────⊰
┌──⊰ _*♻️Brincadeira♻️*_
│🎭➣${prefix}cassino 
│🎭➣${prefix}ppt
│🎭➣${prefix}gay
│🎭➣${prefix}gado
│🎭➣${prefix}gostoso
│🎭➣${prefix}punheteiro
│🎭➣${prefix}lindo
│🎭➣${prefix}feio
└─────────⊰
┌──⊰ _*♻️ADM♻️*_
│🎭➣${prefix}antilink 1
│🎭➣${prefix}antilink 0
│🎭➣${prefix}resetarlink
│🎭➣${prefix}botsai
│🎭➣${prefix}hidetag
│🎭➣${prefix}ban @
│🎭➣${prefix}mudardk
│🎭➣${prefix}mudarnm
│🎭➣${prefix}grupo a
│🎭➣${prefix}grupo f
│🎭➣${prefix}promover @
│🎭➣${prefix}rebaixar @
└─────────⊰
┌──⊰ _*♻️ANIME♻️*_
│🎭➣${prefix}neko
│🎭➣${prefix}hentaift
│🎭➣${prefix}loli
│🎭➣${prefix}waifu
│🎭➣${prefix}megumin
│🎭➣${prefix}beijo
└─────────⊰
┌──⊰ _*♻️DONO♻️*_
│🎭➣${prefix}reiniciar
└─────────⊰
┌──⊰ _*♻️DONO♻️*_
│🎭➣wa.me/${numeroDono}
└─────────⊰
`
}
exports.menu = menu