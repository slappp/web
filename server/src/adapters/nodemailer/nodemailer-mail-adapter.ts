import nodemailer from 'nodemailer'
import { MAilAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '960165baece06b',
    pass: '1dadfbf510b554'
  }
})

export class NodemailerMailAdapter implements MAilAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'jean.carlos.ti@gmail.com',
      subject,
      html: body
    })
  }
}
