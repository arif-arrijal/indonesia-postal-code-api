module.exports.wait = (promise) => {
    return promise.then(data => {
        return {data: data};
    })
    .catch(err => {
        console.log(err);
        return {error: err};
    });
}

module.exports.success = (res, data) => {
    return res.status(200).send({
        data: data,
        error: false,
        message: 'Sukses'
    });
}

module.exports.error = (res, message) => {
    return res.status(400).send({
        data: null,
        error: true,
        message: message
    });
}