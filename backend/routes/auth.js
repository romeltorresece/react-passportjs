const express = require('express');
const router = express.Router();
const passport = require('passport');
const CLIENT_URL = 'http://localhost:3000';

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'Login Successful',
            user: req.user,
        });
    }
});
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'Login Failed' 
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: [ 'profile' ] }));
router.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: CLIENT_URL, 
        failureRedirect: '/login/failed' 
    }));

// Github OAuth
router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
router.get('/github/callback', 
    passport.authenticate('github', { 
        successRedirect: CLIENT_URL ,
        failureRedirect: '/login/failed'
    }));

// Facebook OAuth
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', 
    passport.authenticate('facebook', {
        successRedirect: CLIENT_URL,
        failureRedirect: '/login/failed'
    }));

module.exports = router;