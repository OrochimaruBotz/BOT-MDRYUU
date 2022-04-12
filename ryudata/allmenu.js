const fs = require('fs')
const chalk = require('chalk')

exports.allmenu = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👤 OWNER MENU*
⚘国 ${prefix}setmenu
⚘国 ${prefix}join [link]
⚘国 ${prefix}leave
⚘国 ${prefix}self
⚘国 ${prefix}public
⚘国 ${prefix}setppbot
⚘国 ${prefix}block @user
⚘国 ${prefix}unblock @user
⚘国 ${prefix}bc
⚘国 ${prefix}bcgc
⚘国 ${prefix}setcmd [reply sticker/pesan]
⚘国 ${prefix}delcmd [reply sticker/pesan]
⚘国 ${prefix}listcmd
⚘国 ${prefix}lockcmd
⚘国 ${prefix}promosi

*👥 GROUP MENU*
⚘ ${prefix}antilink
⚘ ${prefix}antiwame
⚘ ${prefix}antivirtex
⚘ ${prefix}nsfw
⚘ ${prefix}afk [alasan]
⚘ ${prefix}tagall
⚘ ${prefix}hidetag
⚘ ${prefix}absen
⚘ ${prefix}hadir
⚘ ${prefix}tidakhadir
⚘ ${prefix}cekabsen
⚘ ${prefix}hapusabsen
⚘ ${prefix}linkgroup
⚘ ${prefix}revoke
⚘ ${prefix}ephemeral [option]
⚘ ${prefix}setppgc
⚘ ${prefix}setname [text]
⚘ ${prefix}group [option]
⚘ ${prefix}add @user
⚘ ${prefix}kick @user
⚘ ${prefix}promote @user
⚘ ${prefix}demote @user

*📦 DOWNLOAD MENU*
⚘ ${prefix}tiktok [url]
⚘ ${prefix}tiktokwm [url]
⚘ ${prefix}tiktoknowm [url]
⚘ ${prefix}tiktokaudio [url]
⚘ ${prefix}instagram [url]
⚘ ${prefix}twitter [url]
⚘ ${prefix}facebook [url]
⚘ ${prefix}ytmp4 [url]
⚘ ${prefix}ytmp3 [url]
⚘ ${prefix}play [judul]
⚘国 ${prefix}ytsearch [judul]
⚘国 ${prefix}gitclone

*🔎 SEARCH MENU*
⚘国 ${prefix}pinterest [query]
⚘国 ${prefix}pantun
⚘国 ${prefix}google [query]
⚘国 ${prefix}gimage [query]
⚘国 ${prefix}kbbi [query]
⚘国 ${prefix}igstalk [username]
⚘国 ${prefix}ghstalk [username]

*🗞️ INFORMASI MENU*
⚘👾 ${prefix}infogempa
⚘👾 ${prefix}faktaunik
⚘👾 ${prefix}ssweb

*✍️ NULIS MENU*
⚘👾 ${prefix}nulisbiasa
⚘👾 ${prefix}nuliskanan
⚘👾 ${prefix}nuliskiri
⚘👾 ${prefix}foliokanan
⚘👾 ${prefix}foliokiri

*👭 ASUPAN MENU*
⚘👾 ${prefix}hijaber
⚘👾 ${prefix}cecan
⚘👾 ${prefix}bocil
⚘👾 ${prefix}ukhty
⚘👾 ${prefix}gheayubi
⚘👾 ${prefix}rikagusriani
⚘👾 ${prefix}santuy

*👩 CECAN MENU*
⚘👾 ${prefix}china
⚘👾 ${prefix}vietnam
⚘👾 ${prefix}thailand
⚘👾 ${prefix}indonesia
⚘👾 ${prefix}korea
⚘👾 ${prefix}japan
⚘👾 ${prefix}malaysia

*🎙️ VOICE CHANGER*
⚘👾 ${prefix}bass
⚘👾 ${prefix}blown
⚘👾 ${prefix}deep
⚘👾 ${prefix}earrape
⚘👾 ${prefix}fast
⚘👾 ${prefix}fat
⚘👾 ${prefix}nightcore
⚘👾 ${prefix}reverse
⚘👾 ${prefix}robot
⚘👾 ${prefix}slow
⚘👾 ${prefix}tupai

*📸 EPHOTO MENU*
⚘👾 ${prefix}3dnature
⚘👾 ${prefix}bevel
⚘👾 ${prefix}burnpaper
⚘👾 ${prefix}quotesgrass
⚘👾 ${prefix}stars
⚘👾 ${prefix}flaming
⚘👾 ${prefix}romance
⚘👾 ${prefix}gerbang
⚘👾 ${prefix}fur
⚘👾 ${prefix}funnycup

*🖼️ PHOTOOXY MENU*
⚘👾 ${prefix}3d-underwater  
⚘👾 ${prefix}3dtext-pig  
⚘👾 ${prefix}3dvalentine-cards  
⚘👾 ${prefix}anonymous-neon  
⚘👾 ${prefix}advanced-glow  
⚘👾 ${prefix}art-shader  
⚘👾 ${prefix}angels-wings 

*🎮 FUN MENU*
⚘👾 ${prefix}truth
⚘👾 ${prefix}dare
⚘👾 ${prefix}bagaimanakah [teks]
⚘👾 ${prefix}kapankah [teks]
⚘👾 ${prefix}dimanakah [teks]
⚘👾 ${prefix}suit [✌️/✊/✋]
⚘👾 ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⚘👾 ${prefix}suitpvp [tag user]
⚘👾 ${prefix}ttt
⚘👾 ${prefix}delttt

*🎰 GAME MENU*
⚘👾 ${prefix}tebak lagu
⚘👾 ${prefix}tebak gambar
⚘👾 ${prefix}tebak kata
⚘👾 ${prefix}tebak kalimat
⚘👾 ${prefix}tebak lirik
⚘👾 ${prefix}tebak lontong
⚘👾 ${prefix}kuismath

*🎡 RANDOM MENU*
⚘国 ${prefix}darkjokes
⚘国 ${prefix}meme
⚘国 ${prefix}quotes
⚘国 ${prefix}quotes2
⚘国 ${prefix}katabijak
⚘国 ${prefix}wallgaming
⚘国 ${prefix}wallpentol
⚘国 ${prefix}wallcogan
⚘国 ${prefix}wallcecan
⚘国 ${prefix}wallestetik
⚘国 ${prefix}wallislami
⚘国 ${prefix}wallbkackpink
⚘国 ${prefix}wallpaperanime

*⛩️ ANIME MENU*
⚘国 ${prefix}quotesanime
⚘国 ${prefix}wallpaper
⚘国 ${prefix}waifu
⚘国 ${prefix}loli
⚘国 ${prefix}cry
⚘国 ${prefix}kill
⚘国 ${prefix}hug
⚘国 ${prefix}pat
⚘国 ${prefix}lick
⚘国 ${prefix}kiss
⚘国 ${prefix}bite
⚘国 ${prefix}yeet
⚘国 ${prefix}neko
⚘国 ${prefix}bully
⚘国 ${prefix}bonk
⚘国 ${prefix}wink
⚘国 ${prefix}poke
⚘国 ${prefix}nom
⚘国 ${prefix}slap
⚘国 ${prefix}smile
⚘国 ${prefix}wave
⚘国 ${prefix}awoo
⚘国 ${prefix}blush
⚘国 ${prefix}smug
⚘国 ${prefix}glomp
⚘国 ${prefix}happy
⚘国 ${prefix}dance
⚘国 ${prefix}cringe
⚘国 ${prefix}cuddle
⚘国 ${prefix}highfive
⚘国 ${prefix}shinobu
⚘国 ${prefix}megumin
⚘国 ${prefix}handhold

*🔞 NSFW MENU*
⚘👾 ${prefix}ahegeo
⚘👾 ${prefix}ass
⚘👾 ${prefix}bdsm
⚘👾 ${prefix}blowjob
⚘👾 ${prefix}cuckold 
⚘👾 ${prefix}cum 
⚘👾 ${prefix}ero
⚘👾 ${prefix}femdom
⚘👾 ${prefix}foot
⚘👾 ${prefix}gangbang
⚘👾 ${prefix}glasses
⚘👾 ${prefix}hentai
⚘👾 ${prefix}ahy
⚘👾 ${prefix}mstb
⚘👾 ${prefix}neko
⚘👾 ${prefix}orgy
⚘👾 ${prefix}panties
⚘👾 ${prefix}pussy
⚘👾 ${prefix}yuri
⚘👾 ${prefix}zettai

*🎨 MAKER MENU*
⚘国 ${prefix}toimage
⚘国 ${prefix}smeme
⚘国 ${prefix}smeme2
⚘国 ${prefix}sticker
⚘国 ${prefix}tovideo
⚘国 ${prefix}togif
⚘国 ${prefix}tourl
⚘国 ${prefix}emojimix 😎+😂
⚘国 ${prefix}readmore
⚘国 ${prefix}ttp [teks]
⚘国 ${prefix}semoji [emoji]

*👨‍🎨 TEXTPRO MENU*
⚘国 ${prefix}serti1 [teks]
⚘国 ${prefix}serti2 [teks]
⚘国 ${prefix}serti3 [teks]
⚘国 ${prefix}blackpink [teks]
⚘国 ${prefix}neon [teks]
⚘国 ${prefix}magma [teks]
⚘国 ${prefix}3dstone [teks]
⚘国 ${prefix}halloween [teks]
⚘国 ${prefix}horror [teks]
⚘国 ${prefix}larva [teks]
⚘国 ${prefix}toxic [teks]
⚘国 ${prefix}marvel [teks|teks]
⚘国 ${prefix}potter [teks]
⚘国 ${prefix}pornhub [teks|teks]
⚘国 ${prefix}tahta [teks]

*☕ OTHER MENU*
⚘国 ${prefix}simi [teks]
⚘国 ${prefix}ping
⚘国 ${prefix}owner
⚘国 ${prefix}creator
⚘国 ${prefix}menu / ${prefix}help / ${prefix}?
⚘国 ${prefix}delete
⚘国 ${prefix}sc
⚘国 ${prefix}tqto
⚘国 ${prefix}donasi
⚘国 ${prefix}rules
⚘国 ${prefix}sewabot
⚘国 ${prefix}listgc
⚘国 ${prefix}liston
⚘国 ${prefix}liston
⚘国 ${prefix}report
⚘国 ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
