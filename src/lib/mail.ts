import nodemailer from "nodemailer";

declare var process: {
  env: {
    NODEMAILER_HOST: string;
    NODEMAILER_PORT: number;
    NODEMAILER_PASSWORD: string;
    NODEMAILER_USERNAME: string;
    APP_URL: string;
  };
};

let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.APP_URL}/new-password?token=${token}`;
  var message = {
    from: process.env.NODEMAILER_USERNAME,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to confirm email.</p>`,
  };
  await transporter.sendMail(message);
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.APP_URL}/new-verification?token=${token}`;
  var message = {
    from: process.env.NODEMAILER_USERNAME,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  };
  await transporter.sendMail(message);
};
