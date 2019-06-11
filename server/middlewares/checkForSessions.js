module.exports = function(req, res, next) {
    const {session} = req

    //check to see if has a user object
    if (!session.user) {
        session.user = {username: '', cart: [], total: 0}
    }
    //forces function to finish and move to the endpoint
    next()
};