// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let SSH = require('simple-ssh')


export default function handler(req, res) {
    const ssh = new SSH({
        host: '170.187.201.49',
        user: 'root',
        pass: 'JettaMeeko1009'
    })

    ssh.exec(`docker restart ${process.env.CONTAINER_NAME}`, {
        out: console.log.bind(console)
    }).start();

    res.status(200).json({ command: 'restart' })
}
