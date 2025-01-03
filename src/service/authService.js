// src/service/authService.js
const personModel = require("../model/Person"); // Pastikan model bernama 'Person' sesuai
const { hashPassword, checkPassword, generateTokens } = require("../utils/index");

const register = async (req, res) => {
    try {
        const { name, surname, mail, password } = req.body;
        const hashedPassword = hashPassword(password);

        const person = await personModel.create({
            person_name: name,
            person_surname: surname,
            person_mail: mail,
            person_password: hashedPassword,
        });

        const tokens = generateTokens(person.person_id);

        res.status(201).json({
            name: person.person_name,
            surname: person.person_surname,
            mail: person.person_mail,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({
            status: "error",
            message: err.errors ? err.errors[0].message : err.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const person = await personModel.findOne({ where: { person_mail: mail } });

        if (!person) {
            return res.status(404).json({ message: "Person not found" });
        }

        const validPassword = checkPassword(password, person.person_password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const tokens = generateTokens(person.person_id);

        res.status(200).json({
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            name: person.person_name,
            surname: person.person_surname,
            mail: person.person_mail,
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Error while finding person", error: err.message });
    }
};

module.exports = {
    register,
    login,
};
