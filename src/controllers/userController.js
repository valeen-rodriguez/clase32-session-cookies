const {validationResult} = require('express-validator');

const userController = {
    index: (req, res)=> {
        res.render ("index")
    },
    login: (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.send("index", { errors: errors.mapped(), title: "Session&Cookies", old: req.body});
        }

        const user = req.body
        console.log(user)
        req.session.user = user
        if (req.body.remember) {    
            res.cookie('user', user, { maxAge: 1000 * 60 * 15 });
            res.cookie('remember', user.remember, { maxAge: 1000 * 60 * 15 });
        }

        res.send("index", {title: "Session", user: req.session.user});
    },
    mensaje: (req, res) => {
    },
    logout: (req,res)=>{
        req.session.destroy();
        if (req.cookies.user) {
        res.clearCookie('user');
        res.clearCookie('remember');
        }
        res.redirect('/');
    },
}

module.exports = userController