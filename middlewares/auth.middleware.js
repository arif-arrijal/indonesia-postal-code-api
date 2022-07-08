exports.AuthenticationMiddleware = (req, res, next) => {
    const token = req.headers["Authorization"] || req.headers["authorization"];
    if (!token) {
        return res.status(401).send({
            data: null,
            error: true,
            message: "Access denied. No token provided."
        });
    }

    if (token !== process.env.APP_KEY) {
        return res.status(401).send({
            data: null,
            error: true,
            message: "Access denied. Invalid token."
        });
    }

    next();
}