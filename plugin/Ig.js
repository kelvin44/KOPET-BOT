const axios = membutuhkan ('axios')

const {json} = membutuhkan ('express')

let handler = async (m, {conn, text}) => {

    if (! text) return conn.reply (m.chat, 'Uhm ... urlnya mana?', m)

    conn.reply (m.chat, 'Tunggu bentar ya :)', m)

    Janji baru ((menyelesaikan, menolak) => {

        axios.get (`https: //arugaz.my.id/api/media/ig? url =` + teks)

            .then ((res) => {

                // conn.sendFile (m.chat, x.thumb, 'text', `➸ * Judul *: $ {x.title} \ n \ n➸ * Kualitas *: $ {x.quality} \ n \ n➸ * Peringkat *: $ {x.rating} \ n \ n➸ * Tautan *: $ {x.link} `, m)

                conn.sendFile (m.chat, res.data.result.medias [0] .url, 'video.mp4', `Nih om: 3 \ n \ n \ n * Link: * $ {res.data.result. media [0] .url} `, m)

                    // conn.reply (m.chat, `* Link: * $ {dl_link}`, m)

            })

            .catch (tolak)

    })

}

handler.help = ['ig <url image / video>']

handler.tags = ['pengunduh']

handler.command = / ^ ig $ / i

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

module.exports = handler</s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> orang </s>
