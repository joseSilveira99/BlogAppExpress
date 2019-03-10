module.exports = {
  eAdmin: function(req, res, next){
    if (req.isAuthenticated() && req.user.eAdmin == 0) {
      return next();//passa
    }
    req.flash('error_msg', 'Voce precisa ser um Admin');
    res.redirect('/');
  }
}
