exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'Mickey',
            age: 39,
            email: 'mc.kim@theenm.com'
        })
    }
}