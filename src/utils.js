import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.resolve(__dirname,".env")});

import {adjectives, nouns} from "./words";
import sgMail from "@sendgrid/mail";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random()*adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendSecretMail = (address, secret) => {
    
    const email = {
        from: process.env.SENDGRID_USERNAME,
        to: address,
        subject: "Login Secret for Prismagram",
        html: `Hello! Your login secret is <strong>${secret}</strong>.<br/> Copy paste on the website to log in`
    };
    return sgMail.send(email);
};

export const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}