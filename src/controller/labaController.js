const labaService = require('../service/labaService');

const getAllLaba = async (req, res) => {
    try {
        const laba = await labaService.getAllLaba();
        res.status(200).json(laba);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createLaba = async (req, res) => {
    try {
        const newLaba = await labaService.createLaba(req.body);
        res.status(201).json(newLaba);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getLaba = async (req, res) => {
    try {
        const laba = await labaService.getLaba(req.params.id);
        if (!laba) {
            return res.status(404).json({ message: 'Laba not found' });
        }
        res.status(200).json(laba);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllLaba,
    createLaba,
    getLaba,
};
