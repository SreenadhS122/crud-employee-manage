const logout = (req,res) => {
    req.session.destroy();
    res.clearCookie("access_token").redirect('/');
}

module.exports = {logout};