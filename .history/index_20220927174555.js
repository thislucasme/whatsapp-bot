import axios, { AxiosError } from "axios";
axios.create({ baseURL: "link aqui" });

api.get('user').then(result => {

})
return res

const {
  default: WAConnection,
  MessageType,
  Presence,
  GroupSettingChange,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  makeInMemoryStore,
  useSingleFileAuthState,
  BufferJSON,
  DisconnectReason,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  delay
} = require("@adiwajshing/baileys")
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const p = require("pino")
const Pino = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./arquivos/lib/color")
const { fetchJson } = require("./arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const {
  tmpdir
} = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")


/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./files/config/data.json"))
const upload = require("./arquivos/lib/functions")
const TelegraPh = require("./arquivos/lib/functions")
const { addFlod, isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const img = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const { menu } = require("./arquivos/menus/menu.js")


///  prefixo e dono aqui ///
logo = img.logo
nomeBot = config.nomeBot
numeroBot = config.numeroBot
nomeDono = config.nomeDono
numeroDono = config.numeroDono
const dono = config.numeroDono
prefix = config.prefix
prefixo = config.prefix


let girastamp = speed()
let latensi = speed() - girastamp


const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })
const { state, saveState } = useSingleFileAuthState('./cache/qrcode.json')

const { banner } = require('./arquivos/lib/functions.js')


async function startzhx() {
  const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

  // 𝚀𝚁𝙲𝙾𝙳𝙴
  const { state, saveState } = useSingleFileAuthState("./cache/zhx.json")
  // limpar console
  console.log("L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@Zhx-MD")
  console.log(banner.string)
  console.log(color(''), color('AUTENTIFICANDO'))
  const client = WAConnection({
    logger: P({ level: "silent" }),
    printQRInTerminal: true,
    auth: state
  })

  client.ev.on("creds.update", saveState)

  store.bind(client.ev)
  client.ev.on("chats.set", () => {
    console.log("Tem conversas", store.chats.all())
  })

  client.ev.on("contacts.set", () => {
    console.log("Tem contatos", Object.values(store.contacts))
  })

  client.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update
    if (connection === "close") {
      const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
      console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

      if (shouldReconnect) {
        startzhx()
      }

    } else if (connection === "open") {
      console.log(" bot ta online!!!\n\n")
    }

  })
  console.log(`${color(`conectado\nprefixo: ${prefix}\nDono: ${nomeDono}\n\nCriador: Zhx-MD`, 'red')}`)
  client.ev.on("messages.upsert", async m => {
    try {
      const info = m.messages[0]
      if (!info.message) return
      await client.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
      if (info.key && info.key.remoteJid == "status@broadcast") return
      const altpdf = Object.keys(info.message)
      const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextinfo" ? altpdf[2] : altpdf[1] : altpdf[0]
      global.prefixo
      const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
        options ? options : {}
        await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
          resolve(res.data)
        }).catch(reject)
      })
      const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`
      }
      const getExtension = async (type) => {
        return await mimetype.extension(type)
      }
      // ====  \\

      const content = JSON.stringify(info.message)
      const from = info.key.remoteJid
      const body = (type === 'conversation' &&
        info.message.conversation.startsWith(prefixo)) ?
        info.message.conversation : (type == 'imageMessage') &&
          info.message[type].caption.startsWith(prefixo) ?
          info.message[type].caption : (type == 'videoMessage') &&
            info.message[type].caption.startsWith(prefixo) ?
            info.message[type].caption : (type == 'extendedTextMessage') &&
              info.message[type].text.startsWith(prefixo) ?
              info.message[type].text : (type == 'listResponseMessage') &&
                info.message[type].singleSelectReply.selectedRowId ?
                info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
                  info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextinfo') ?
                    info.message[type].singleSelectReply.selectedRowId : (type == 'client.sendMessageButtonMessage') &&
                      info.message[type].selectedButtonId ?
                      info.message[type].selectedButtonId : (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""
      budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefixo)
      const zhx = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
      const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
      bady = (type === "conversation") ? info.message.conversation : (type == "imageMessage") ? info.message.imageMessage.caption : (type == "videoMessage") ? info.message.videoMessage.caption : (type == "extendedTextMessage") ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : ""
      budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""
      button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDisplayText : ""
      button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
      listMessage = (type == "listResponseMessage") ? info.message.listResponseMessage.title : ""
      var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""

      bidy = budy.toLowerCase()

      // Enviar gifs
      const enviargif = (videoDir, caption) => {
        client.sendMessage(from, {
          video: fs.readFileSync(videoDir),
          caption: caption,
          gifPlayback: true
        })
      }

      // Enviar imagens
      const enviarimg = (imageDir, caption) => {
        client.sendMessage(from, {
          image: fs.readFileSync(imageDir),
          caption: caption
        })
      }

      // Enviar figs
      const enviarfig = async (figu, tag) => {
        bla = fs.readFileSync(figu)
        client.sendMessage(from, { sticker: bla }, { quoted: info })
      }


      ///////////////
      const getFileBuffer = async (mediakey, MediaType) => {
        const stream = await downloadContentFromMessage(mediakey, MediaType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
      }
      const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
      }
      const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
          if (i.admin == "admin") admins.push(i.id)
          if (i.admin == "superadmin") admins.push(i.id)
        }
        return admins
      }
      const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
      const arg = body.substring(body.indexOf(" ") + 1)
      const numeroBot = client.user.id.split(":")[0] + "@s.whatsapp.net"
      const argss = body.split(/ +/g)
      const testat = body
      const ants = body
      const isGroup = info.key.remoteJid.endsWith("@g.us")
      const tescuk = ["0@s.whatsapp.net"]
      const q = args.join(" ")
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
      }
      const sender = isGroup ? info.key.participant : info.key.remoteJid
      const pushname = info.pushName ? info.pushName : ""
      const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
      const groupName = isGroup ? groupMetadata.subject : ""
      const groupDesc = isGroup ? groupMetadata.desc : ""
      const groupMembers = isGroup ? groupMetadata.participants : ""
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
      const canal = config.canal
      const grupo = config.grupo
      const text = args.join(" ")
      const c = args.join(' ')
      const enviar = (texto) => {
        client.sendMessage(from, { text: texto }, { quoted: info })
      }

      // VERIFICADOS ⭐️
      const live = { key: { participant: '0@s.whatsapp.net' }, message: { liveLocationMessage: {} } }
      const imgm = { key: { participant: '0@s.whatsapp.net' }, message: { imageMessage: {} } }
      const vid = { key: { participant: '0@s.whatsapp.net' }, message: { videoMessage: {} } }
      const contato = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: `${pushname}` } } }
      const doc = { key: { participant: '0@s.whatsapp.net' }, message: { documentMessage: {} } }



      //configruracao de dono, adm etc...
      const quoted = info.quoted ? info.quoted : info
      const mime = (quoted.info || quoted).mimetype || ""
      const isBot = info.key.fromMe ? true : false
      const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isOwner = sender.includes(numeroDono)
      //const isOwner = numeroDono.includes(numeroDono)
      const groupId = isGroup ? groupMetadata.jid : ''
      banChats = true
      const argis = bidy.trim().split(/ +/)




      // PRA ENVIAR BOTÃO DE TEMPLATE
      const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
        templateMessage = {
          image: { url: img1 },
          caption: text1,
          footer: desc1,
          templateButtons: but,
        }
        client.sendMessage(id, templateMessage, { quoted: vr })
      }
      // Envia imagem com botão
      const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
        buttonMessage = {
          image: { url: img1 },
          caption: text1,
          footer: desc1,
          buttons: but,
          headerType: 4
        }
        client.sendMessage(id, buttonMessage, { quoted: vr })
      }


      // Consts isQuoted
      const isImage = type == "imageMessage"
      const isVideo = type == "videoMessage"
      const isAudio = type == "audioMessage"
      const isSticker = type == "stickerMessage"
      const isContact = type == "contactMessage"
      const isLocation = type == "locationMessage"
      const isProduct = type == "productMessage"
      const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
      typeMessage = body.substr(0, 50).replace(/\n/g, "")
      if (isImage) typeMessage = "Image"
      else if (isVideo) typeMessage = "Video"
      else if (isAudio) typeMessage = "Audio"
      else if (isSticker) typeMessage = "Sticker"
      else if (isContact) typeMessage = "Contact"
      else if (isLocation) typeMessage = "Location"
      else if (isProduct) typeMessage = "Product"
      const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
      const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
      const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
      const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
      const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
      const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
      const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
      const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
      const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

      outrasVariavel = "bot"

      let { name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor } = outrasVariavel



      if (budy == `${prefixo}`) {
        enviar('🤔👍')
      }
      const dados = m.messages[0];


      // FUNCAO DE ANTILINK \\
      if (budy.includes("https://")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
        var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout(() => {
          enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
        }, 100)
        enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
        setTimeout(() => {
          client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => { enviar(`*ERROR:* ${e}`) })
        }, 10)
        setTimeout(() => {

        }, 0)
      }
      if (budy.includes("wa.me")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
        var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout(() => {
          enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
        }, 100)
        enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
        setTimeout(() => {
          client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => { enviar(`*ERROR:* ${e}`) })
        }, 10)
        setTimeout(() => {

        }, 0)
      }
      if (budy.includes("http://")) {
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return enviar(`*${pushname}* vc é admin por isso não vou te banir`)
        var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout(() => {
          enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
        }, 100)
        enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
        setTimeout(() => {
          client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => { enviar(`*ERROR:* ${e}`) })
        }, 10)
        setTimeout(() => {

        }, 0)
      }




      // RESPOSTAS DOS COMANDOS \\
      resposta = {
        espere: "🎭 Aguarde...enviando ",
        aguarde: "🎭 Aguarde...enviando ",
        dono: "🎭 Esse comando so pode ser usado pelo meu dono!!! ",
        grupo: "🎭 Esse comando só pode ser usado em grupo ",
        privado: "🎭 Esse comando só pode ser usado no privado ",
        adm: "🎭 Esse comando só pode ser usado por administradores de grupo",
        botadm: " 🎭 Este comando só pode ser usado quando o bot se torna administrador ",
        registro: `[⚙️️] Você não se registrou utilize ${prefixo}rg para se registrar `,
        norg: "[⚙️️] Você ja está registrado ",
        erro: "🎭 Error, tente novamente mais tarde "
      }


      ////////////////////////////////////
      //mensagens que aparecem no terminal
      if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} \n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
      if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} \n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
      if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
      if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'blue')}\n${color('┃', 'blue')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)

      var ativado = true;

      if (zhx === "artificial 0") {
        ativado = false;
      } else if (zhx === "artificial 1") {
        ativado = true;
      }

      if (ativado) {
        var callback = function (answer, wildCardArray, input) {
          enviar(answer)
        };

        var caseCallback = function (answer, wildCardArray, input) {
          if (answer == this) {
            enviar(answer)
          } else {
            console.log('ERROR:', answer);
            enviar("Não entendi o que você disse ")
          }
          aimlInterpreter.findAnswerInLoadedAIMLFiles(budy.toLowerCase(), callback);
        };
      }







      switch (zhx) {
        // Começo dos comandos com prefix //
        //     /\/\                              
        //    (° v °)                             
        //    /|    |\                            
        //     V---V                             
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//




        case "help":
        case "comandos":
        case 'menuprincipal':
          enviar(resposta.aguarde)
          templateButtons = [
            { index: 1, urlButton: { displayText: 'Criador', url: canal } },
            { index: 2, urlButton: { displayText: 'Dono', url: grupo } },
            { index: 3, quickReplyButton: { displayText: '🎭 BUG 🎭', id: '/bug' } },
            { index: 4, quickReplyButton: { displayText: '🎭 IDEIA 🎭', id: '/novocmd' } },
            { index: 5, quickReplyButton: { displayText: '🎭 PING 🎭', id: '/ping' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: live
            },
            caption: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
          break


        //preguiça de colocar menus com fotos kkkkk
        case 'menu': {
          templateMassage = {
            image: {
              url: "https://telegra.ph/file/bc299b1c0ca3427d0414e.jpg",
              quoted: info
            },
            caption: (`
┌──⊰ _*${nomeBot}️*_
┃𝐍𝐎𝐌𝐄: ${pushname} 
└──────────⊰

┌──⊰ _*♻️ALEATÓRIO♻️*_
│🎭➣${prefix}menuadm
│🎭➣${prefix}menu
│🎭➣${prefix}perfil
┌──⊰ _*♻️Brincadeira♻️*_
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
└─────────⊰
┌──⊰ _*♻️DONO♻️*_
│🎭➣wa.me/${numeroDono}
└─────────⊰
`),
            footer: "ZHXTEAM",

          }
          client.sendMessage(from, templateMassage)

          break
        }


        case "menuadm":
          if (!isGroup) return enviar(resposta.grupo)
          if (!groupAdmins) return enviar(resposta.adm)
          return enviar(`
${prefix}antilink 1
┃》${prefix}antilink 0
┃》┏━━••• *_MENUS_* 
┃》${prefix}resetarlink
┃》${prefix}sair 
┃》${prefix}ban
┃》${prefix}mudardk
┃》${prefix}mudarnm
┃》${prefix}grupo a
┃》${prefix}grupo f
┃》${prefix}ban (marcamsg)
┃》${prefix}promover @
┃》${prefix}rebaixar @
┗━━━━━━━━ ✓
`)
          break


        case "ping":
          enviar(`🎭 Velocidade de resposta ${latensi.toFixed(4)} segundos `)
          break



        case "ppt":
          if (!isGroup) return enviar(resposta.grupo)
          if (args.length < 1) return enviar('exemplo: /ppt pedra')
          ppt = ["pedra", "papel", "tesoura"]
          ppy = ppt[Math.floor(Math.random() * ppt.length)]
          ppg = Math.floor(Math.random() * 50)
          pptb = ppy
          pph = `Você ganhou ${ppg} em money`
          if ((pptb == "pedra" && args == "papel") ||
            (pptb == "papel" && args == "tesoura") ||
            (pptb == "tesoura" && args == "pedra")) {
            var vit = "vitoria"
          } else if ((pptb == "pedra" && args == "tesoura") ||
            (pptb == "papel" && args == "pedra") ||
            (pptb == "tesoura" && args == "papel")) {
            var vit = "derrota"
          } else if ((pptb == "pedra" && args == "pedra") ||
            (pptb == "papel" && args == "papel") ||
            (pptb == "tesoura" && args == "tesoura")) {
            var vit = "empate"
          } else if (vit = "undefined") {
            return enviar(linguagem.tterro())
          }
          if (vit == "vitoria") {
            var tes = "Vitória do jogador"
          }
          if (vit == "derrota") {
            var tes = "A vitória é do bot"
          }
          if (vit == "empate") {
            var tes = "O jogo terminou em empate"
          }
          enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
          if (tes == "Vitória do jogador") {
            enviar(pph)
          }
          break

        case 'clear': case "reiniciar":
          if (!isOwner) return enviar(resposta.dono)
          client.sendMessage(from, ' L I M P A N D U 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlimpo', text, { quoted: live })
          break

        case "perfil":
          try {
            ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
          } catch (e) {
            ppimg = logo
          }
          perfil = await getBuffer(ppimg)
          enviar(resposta.espere)
          try {
            client.sendMessage(from, {
              image: perfil,
              caption: `
🎭 Aqui está suas informações 

☆ Nome: ${pushname}
☆ Número: ${sender.split("@")[0]}
☆ Wa.me: https://wa.me/${sender.split("@")[0]}
☆ Grupo: ${groupName}
`
            }, { quoted: info })
            tujuh = fs.readFileSync("./arquivos/audios/perfil.mp3")
            await client.sendMessage(from, { audio: tujuh, mimetype: "audio/mp4", ptt: true }, { quoted: info })
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case 'gay':// Sem Fotos
          const aleta = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De Gay é De : ${aleta}%`)
          break
        case 'feio': // Sem Fotos
          const aletb = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De Feio é De : ${aletb}%`)
          break
          break
        case 'lindo':
          const aletc = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De Lindo(a) é De : ${aletc}%`)
          break
        case 'gostoso':
          const aletd = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
          break

        case 'gado':
          const alete = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
          break
        case 'punheteiro':
          const aletl = `${Math.floor(Math.random() * 105)}`
          enviar('Aguarde, confiscando sua porcentagem...')
          await delay(5000)
          enviar(`${pushname} Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
          break

        case "gplink":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          const link = await client.groupInviteCode(from)
          enviar(`🎭 Link do grupo : https://chat.whatsapp.com/${link} `)
          break

        case "resetarlink":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            await client.groupRevokeInvite(from)
            enviar("🎭 Link de convite resetado com sucesso ✓ ")
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case "sair":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          enviar("ok...me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔")
          await delay(1000)
          try {
            await client.groupLeave(from)
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case "idgp":
          enviar(`Id : ${from}`)
          enviar("some id here to send a mensagem");
          enviar("that´s so great")
          break

        case "rebaixar":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          if (q < 1) return enviar("🎭 Digite o número, animal ")
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "demote")
            enviar(`🎭 ${q} Foi rebaixado a membro comum com sucesso `)
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case "promover":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          if (q < 1) return enviar("🎭 Cade o número, mongolóide ")
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
            enviar(`🎭 ${q} Foi promovido a adm com sucesso `)
            kak = fs.readFileSync("./arquivos/audios/promover.mp3")
            client.sendMessage(from, { audio: kak, mimetype: "audio/mp4", ptt: true }, { quoted: info })
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case 'tagall':
        case 'marcar':
        case 'hidetag':
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          members_id = []
          const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, {
              text: '@12345678901', contextInfo: {
                "mentionedJid": memberr
              }
            }) : client.sendMessage(from, {
              text: teks.trim(), contextInfo: {
                "mentionedJid": memberr
              }
            }, {
              quoted: info
            })
          }
          teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n` : ''}$\n`
          for (let mem of groupMembers) {
            teks += `♧ @${mem.id.split('@')[0]}\n`
            members_id.push(mem.id)
          }
          mentions(teks, members_id, true)
          break


        case "ban":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (q < 1) return enviar("🎭 Cade o número, mongolóide ")
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
            kicka = info.message.extendedTextMessage.contextInfo.participant
            cod = fs.readFileSync("./arquivos/audios/ban.mp3")
            client.sendMessage(from, { audio: cod, mimetype: "audio/mp4", ptt: true }, { quoted: live })
            client.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "remove")
          } else {
            enviar("࿐ Marque a mensagem da pessoa")
          }
          break

        case "grupo":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            if (q == "a") {
              await client.groupSettingUpdate(from, "not_announcement")
              enviar("Grupo aberto com sucesso")
            }
            if (q == "f") {
              await client.groupSettingUpdate(from, "announcement")
              enviar("Grupo fechado com sucesso ")
            }
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case "infogp":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          enviar(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${data}
 Horário : ${hora}
`)
          break

        case "mudardk":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            await client.groupUpdateDescription(from, `${q}`)
            enviar("🎭 Descrição alterada com sucesso ✓ ")
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case "mudarnm":
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          try {
            await client.groupUpdateSubject(from, `${q}`)
            enviar("🎭 Nome alterado com sucesso ✓ ")
          } catch (e) {
            console.log(e)
            enviar(resposta.erro)
          }
          break

        case 'listadm':
          if (!isGroup) return enviar(resposta.grupo)
          teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
          no = 0
          for (let admon of groupAdmins) {
            no += 1
            teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
          }
          mentions(teks, groupAdmins, true)
          break

        case 'antilink':
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          if (args.length < 1) return enviar('digite 1 para ativar ou 0 para desativar ')
          if (Number(args[0]) === 1) {
            if (isAntiLink) return enviar('o anti-link está ativo')
            antilink.push(from)
            fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
            enviar('O anti-link foi ativo no grupo ✔️')
          } else if (Number(args[0]) === 0) {
            antilink.splice(from, 1)
            fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
            enviar('O anti-link foi desativado com sucesso neste grupo✔️')
          } else {
            enviar('1 para ativar, 0 para desativar ')
          }
          break










        case 'hidetag':
          if (!isGroup) return enviar(resposta.grupo)
          if (!isGroupAdmins) return enviar(resposta.adm)
          if (!isBotGroupAdmins) return enviar(resposta.botadm)
          pp = args.join(" ")
          if (pp < 1) enviar("coloque a mensagem de aviso...")
          client.sendMessage(from, {
            image: fs.readFileSync('./arquivos/fotos/menu2.jpg'),
            caption: `
 ${nomeBot}
「*AVISO*」
 ⩺${pushname} diz que
 ⩺ ${pp}
`,
          })
          break

        case "ping":
          enviar(`Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *PC DA NASA*\nRAM: *300 Gb*\nData: 09/08/2734 d.c*\nRede: *9G*\nStatus: *Ainda não cobrado*\nTipo do bot: *Termux Somente*`)
          break


        //******comandos de fotos**********\\

        case 'loli': {
          //enviar("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/loli' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: 'vc e um(a) lolicon?🤔!',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
        }
          break

        case 'neko': {
          //enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
          //enviar("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/neko' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: 'Neko!',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
        }
          break

        case 'waifu': {
          //enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
          //enviar("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/waifu' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: 'waifu!',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
        }
          break

        case 'hentaift': {
          //enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
          //enviar("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/hentaift' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/nsfw/waifu')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: '🤨',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(sender, templateMassage)
        }
          break


        case 'megumin': {
          //enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
          waifuddd = await axios.get('https://waifu.pics/api/sfw/megumin')
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/waifu' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/megumin')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: 'megumi!',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
        }
          break

        case 'beijo': {
          //enviar("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
          waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
          templateButtons = [
            { index: 1, quickReplyButton: { displayText: '🎭 PROXIMO 🎭', id: '/beijo' } },
          ]
          waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
          templateMassage = {
            image: {
              url: waifuddd.data.url,
              quoted: info
            },
            caption: 'beijo!',
            footer: "Zhxmd",
            templateButtons: templateButtons
          }
          client.sendMessage(from, templateMassage)
        }
          break




        // sticker/figurinhas \\


        case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
          function TelegraPh(Path) {
            return new Promise(async (resolve, reject) => {
              if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
              try {
                const form = new BodyForm();
                form.append("file", fs.createReadStream(Path))
                const data = await axios({
                  url: "https://telegra.ph/upload",
                  method: "POST",
                  headers: {
                    ...form.getHeaders()
                  },
                  data: form
                })
                return resolve("https://telegra.ph" + data.data[0].src)
              } catch (err) { return reject(new Error(String(err))) }
            })
          }

          module.exports = { TelegraPh }
          const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
          }
          async function videoToWebp(media) {
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
            fs.writeFileSync(tmpFileIn, media)
            await new Promise((resolve, reject) => {
              ff(tmpFileIn)
                .on("error", reject)
                .on("end", () => resolve(true))
                .addOutputOptions([
                  "-vcodec",
                  "libwebp",
                  "-vf",
                  "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                  "-loop",
                  "0",
                  "-ss",
                  "00:00:00",
                  "-t",
                  "00:00:05",
                  "-preset",
                  "default",
                  "-an",
                  "-vsync",
                  "0"
                ])
                .toFormat("webp")
                .save(tmpFileOut)
            })
            const buff = fs.readFileSync(tmpFileOut)
            fs.unlinkSync(tmpFileOut)
            fs.unlinkSync(tmpFileIn)
            return buff
          }
          const enviarfiguimg = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
              buffer = await writeExifImg(buff, options)
            } else {
              buffer = await imageToWebp(buff)
            }

            await client.sendMessage(jid, {
              sticker: {
                url: buffer
              }, ...options
            }, {
              quoted
            })
            return buffer
          }
          const enviarfiguvid = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
              buffer = await writeExifVid(buff, options)
            } else {
              buffer = await videoToWebp(buff)
            }
            await client.sendMessage(jid, {
              sticker: {
                url: buffer
              }, ...options
            }, {
              quoted
            })
            return buffer
          }
          async function imageToWebp(media) {
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

            fs.writeFileSync(tmpFileIn, media)

            await new Promise((resolve, reject) => {
              ff(tmpFileIn)
                .on("error", reject)
                .on("end", () => resolve(true))
                .addOutputOptions([
                  "-vcodec",
                  "libwebp",
                  "-vf",
                  "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
                ])
                .toFormat("webp")
                .save(tmpFileOut)
            })
            const buff = fs.readFileSync(tmpFileOut)
            fs.unlinkSync(tmpFileOut)
            fs.unlinkSync(tmpFileIn)
            return buff
          }
          async function writeExifImg(media, metadata) {
            let wMedia = await imageToWebp(media)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            fs.writeFileSync(tmpFileIn, wMedia)
            if (metadata.packname || metadata.author) {
              const img = new webp.Image()
              const json = {
                "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
                "sticker-pack-name": metadata.packname,
                "sticker-pack-publisher": metadata.author,
                "emojis": metadata.categories ? metadata.categories : [""]
              }
              const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
              const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
              const exif = Buffer.concat([exifAttr, jsonBuff])
              exif.writeUIntLE(jsonBuff.length, 14, 4)
              await img.load(tmpFileIn)
              fs.unlinkSync(tmpFileIn)
              img.exif = exif
              await img.save(tmpFileOut)
              return tmpFileOut
            }
          }
          async function writeExifVid(media, metadata) {
            let wMedia = await videoToWebp(media)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            fs.writeFileSync(tmpFileIn, wMedia)
            if (metadata.packname || metadata.author) {
              const img = new webp.Image()
              const json = {
                "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
                "sticker-pack-name": metadata.packname,
                "sticker-pack-publisher": metadata.author,
                "emojis": metadata.categories ? metadata.categories : [""]
              }
              const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
              const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
              const exif = Buffer.concat([exifAttr, jsonBuff])
              exif.writeUIntLE(jsonBuff.length, 14, 4)
              await img.load(tmpFileIn)
              fs.unlinkSync(tmpFileIn)
              img.exif = exif
              await img.save(tmpFileOut)
              return tmpFileOut
            }
          }

          // nao muda isso 🥺 \\
          const pacote = "Zhxmd"
          //==================\\

          const criador = "Zhx-MD"
          if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
            enviar('criando figurinha')
            const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
            rane = getRandom('.' + await getExtension(encmedia.mimetype))
            imgbuff = await getFileBuffer(encmedia, 'image')
            fs.writeFileSync(rane, imgbuff)
            const media = rane
            ran = getRandom('.' + media.split('.')[1])
            const upload = await TelegraPh(media)
            await enviarfiguimg(from, util.format(upload), info, {
              packname: pacote, author: criador
            })
          } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
            enviar('criando figurinha')
            const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
            rane = getRandom('.' + await getExtension(encmedia.mimetype))
            imgbuff = await getFileBuffer(encmedia, 'video')
            fs.writeFileSync(rane, imgbuff)
            const media = rane
            ran = getRandom('.' + media.split('.')[1])
            const upload = await TelegraPh(media)
            await enviarfiguvid(from, util.format(upload), info, {
              packname: pacote, author: criador
            })
          } else return enviar(`Marque a imagem com o zhx ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
        }
          break



        default:
      }

      switch (comando) {

        case "ala":
          enviar("boteco da garena")
          break

        default:
      }


    } catch (e) {
      console.log(e)
    }

  })

}
startzhx()
