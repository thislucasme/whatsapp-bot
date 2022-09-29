case 'cep':
var teks = budy.slice(6);
if (!teks) return enviar(`❌ Comando incorreto!\n\nExemplo: ${prefix + command} Luqeta`);
enviar('⏳ Por favor, espere um momento!');
fetchJson(`https://viacep.com.br/ws/38610009/json/`).then(({
	resultado
}) => {
	if (resultado.messageError?.statusCode !== 410) {
		client.sendMessage(from, {
			audio: {
				url: resultado.link
			}, mimetype: 'audio/mp4', ptt: false
		}, {
			quoted: info
		});
	} else {
		enviar(`❌ Nenhum áudio/música encontrado com o título: ${teks} 💢`);
	}
},
	(err) => {
		enviar("Ocorreu um erro! Tente novamente.");
		console.log("Error : %s",
			color(err, "red"));
	});
break;