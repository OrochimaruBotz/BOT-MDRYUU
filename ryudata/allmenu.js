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
⚘国 ${prefix}antilink
⚘国 ${prefix}antiwame
⚘国 ${prefix}antivirtex
⚘国 ${prefix}nsfw
⚘国 ${prefix}afk [alasan]
⚘国 ${prefix}tagall
⚘国 ${prefix}hidetag
⚘国 ${prefix}absen
⚘国 ${prefix}hadir
⚘国 ${prefix}tidakhadir
⚘国 ${prefix}cekabsen
⚘国 ${prefix}hapusabsen
⚘国 ${prefix}linkgroup
⚘国 ${prefix}revoke
⚘国 ${prefix}ephemeral [option]
⚘国 ${prefix}setppgc
⚘国 ${prefix}setname [text]
⚘国 ${prefix}group [option]
⚘国 ${prefix}add @user
⚘国 ${prefix}kick @user
⚘国 ${prefix}promote @user
⚘国 ${prefix}demote @user

*📦 DOWNLOAD MENU*
⚘国 ${prefix}tiktok [url]
⚘国 ${prefix}tiktokwm [url]
⚘国 ${prefix}tiktoknowm [url]
⚘国 ${prefix}tiktokaudio [url]
⚘国 ${prefix}instagram [url]
⚘国 ${prefix}twitter [url]
⚘国 ${prefix}facebook [url]
⚘国 ${prefix}ytmp4 [url]
⚘国 ${prefix}ytmp3 [url]
⚘国 ${prefix}play [judul]
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
⚘国 ${prefix}infogempa
⚘国 ${prefix}faktaunik
⚘国 ${prefix}ssweb

*✍️ NULIS MENU*
⚘国 ${prefix}nulisbiasa
⚘国 ${prefix}nuliskanan
⚘国 ${prefix}nuliskiri
⚘国 ${prefix}foliokanan
⚘国 ${prefix}foliokiri

*👭 ASUPAN MENU*
⚘国 ${prefix}hijaber
⚘国 ${prefix}cecan
⚘国 ${prefix}bocil
⚘国 ${prefix}ukhty
⚘国 ${prefix}gheayubi
⚘国 ${prefix}rikagusriani
⚘国 ${prefix}santuy

*👩 CECAN MENU*
⚘国 ${prefix}china
⚘国 ${prefix}vietnam
⚘国 ${prefix}thailand
⚘国 ${prefix}indonesia
⚘国 ${prefix}korea
⚘国 ${prefix}japan
⚘国 ${prefix}malaysia

*🎙️ VOICE CHANGER*
⚘国 ${prefix}bass
⚘国 ${prefix}blown
⚘国 ${prefix}deep
⚘国 ${prefix}earrape
⚘国 ${prefix}fast
⚘国 ${prefix}fat
⚘国 ${prefix}nightcore
⚘国 ${prefix}reverse
⚘国 ${prefix}robot
⚘国 ${prefix}slow
⚘国 ${prefix}tupai

*📸 EPHOTO MENU*
⚘国 ${prefix}3dnature
⚘国 ${prefix}bevel
⚘国 ${prefix}burnpaper
⚘国 ${prefix}quotesgrass
⚘国 ${prefix}stars
⚘国 ${prefix}flaming
⚘国 ${prefix}romance
⚘国 ${prefix}gerbang
⚘国 ${prefix}fur
⚘国 ${prefix}funnycup

*🖼️ PHOTOOXY MENU*
⚘国 ${prefix}3d-underwater  
⚘国 ${prefix}3dtext-pig  
⚘国 ${prefix}3dvalentine-cards  
⚘国 ${prefix}anonymous-neon  
⚘国 ${prefix}advanced-glow  
⚘国 ${prefix}art-shader  
⚘国 ${prefix}angels-wings 

*🎮 FUN MENU*
⚘国 ${prefix}truth
⚘国 ${prefix}dare
⚘国 ${prefix}bagaimanakah [teks]
⚘国 ${prefix}kapankah [teks]
⚘国 ${prefix}dimanakah [teks]
⚘国 ${prefix}suit [✌️/✊/✋]
⚘国 ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⚘国 ${prefix}suitpvp [tag user]
⚘国 ${prefix}ttt
⚘国 ${prefix}delttt

*🎰 GAME MENU*
⚘国 ${prefix}tebak lagu
⚘国 ${prefix}tebak gambar
⚘国 ${prefix}tebak kata
⚘国 ${prefix}tebak kalimat
⚘国 ${prefix}tebak lirik
⚘国 ${prefix}tebak lontong
⚘国 ${prefix}kuismath

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
⚘国 ${prefix}ahegeo
⚘国 ${prefix}ass
⚘国 ${prefix}bdsm
⚘国 ${prefix}blowjob
⚘国 ${prefix}cuckold 
⚘国 ${prefix}cum 
⚘国 ${prefix}ero
⚘国 ${prefix}femdom
⚘国 ${prefix}foot
⚘国 ${prefix}gangbang
⚘国 ${prefix}glasses
⚘国 ${prefix}hentai
⚘国 ${prefix}ahy
⚘国 ${prefix}mstb
⚘国 ${prefix}neko
⚘国 ${prefix}orgy
⚘国 ${prefix}panties
⚘国 ${prefix}pussy
⚘国 ${prefix}yuri
⚘国 ${prefix}zettai

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
