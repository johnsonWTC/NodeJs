const validation = (model) => async(req, res, next) => {
    console.log("Trying to validate")
    const body = req.body;
    try {
        await model.validate(body);
        next();
        return next();
    } catch (error) {
        return res.status(400).json({ error })
    }

}



module.exports = validation