import { Send } from 'express'

export interface SendMailData {
  subject: string
  body: string
}

export interface MAilAdapter {
  sendMail: (data: SendMailData) => Promise<void>
}
