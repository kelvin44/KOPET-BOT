const axios = require('axios')

let handler = async(m, { conn, text }) => {
    let [link, resolusi] = text.split `|`
    if (!link) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)

    if (!resolusi) return conn.reply(m.chat, 'Harap memasukkan resolusi hd/sd !', m)

    conn.reply(m.chat, 'Tunggu bentar ya :), tergantung durasinya om :)', m)
    new Promise((resolve, reject) => {
        axios.get(`https://mnazria.herokuapp.com/api/fbdownloadervideo?url=` + encodeURIComponent(link))
            .then((res) => {
                if (resolusi == 'hd') {
                    dl_link = res.data.resultHD
                } else {
                    dl_link = res.data.resultSD
                }
                conn.reply(m.chat, `*Link:* ${dl_link} \n\nfile akan segera dikirim !`, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `Nih om :3\n\n\n*Link:* ${dl_link}`, m)

            })
            .catch(reject => {
                conn.reply(m.chat, 'NoneType object has no attribute group', m)
            })
    })

}

handler.help = ['fb <hd/sd>|<url>']
handler.tags = ['downloader']
handler.command = /^fb$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler