const nodemailer = require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ab41ed4defb1d0",
          pass: "4c3a8d7c605c1a"
        }
      });
    const mensaje = {
        from: "ST27 <noreply@st.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports = sendEmail;