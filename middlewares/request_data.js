const request_data = (request, response, next) => {
    let data = {
        timestamp: new Date().toISOString(),
        method: request.method,
        url: request.url,
        queryParams: request.query,
        body: request.body,
        ip: request.ip,
    }
    console.log(data);
    next()
};

export default request_data;