import { injectable } from "inversify";
import { createTransport } from "nodemailer"

@injectable()
export class Nodemailer {

    async sendMail( email: string, message: string ) {

        let transporter = createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
        let info = await transporter.sendMail({
            from: `"Hi!" <${process.env.EMAIL}>`, // sender address,
            to: email,
            subject: 'Welcome',
            text: message
        });
    
        console.log('Message sent: %s', info.messageId);
    }

}