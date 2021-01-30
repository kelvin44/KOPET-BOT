let handler = async(m, { conn, participants, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `ketik: ${usedPrefix}xp <nomor>| <jumlah>`)

    let [who, jumlah] = text.split `|`
    if (!who) m.reply('Kepada Siapa ?')
    if (!jumlah) m.reply('Jumlah ?')

    global.DATABASE._data.users[m.mentionedJid].xp = JSON.parse(jumlah)
    m.reply('Done!')
}
handler.help = ['gift <jumlah>']
handler.tags = ['owner']
handler.command = /^xp$/i
handler.owner = true

module.exports = handler