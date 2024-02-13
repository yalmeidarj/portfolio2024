"use server"
import emailjs from "@emailjs/browser";

type template = {
  name: string;
  message: string;
  replyToEmail: string;
};

export async function sendEmail({ name, message, replyToEmail }: template) {
  
  const templateParams: template = {
    name: name,
    message: message,
    replyToEmail: replyToEmail,
  };

    const res =    emailjs
        .send(
        "service_b0pglef",
        "template_164m0lh",
        templateParams,
        "YC4Fd-yf-qEYRy7C8"
        )
        .then(
        (result) => {
            console.log(result.text);
            return true;
        },
        (error) => {
            console.log(error.text);
            return false;
        }
        );
    
    return res;

}
