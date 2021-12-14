const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;

    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\/public\/postImages(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\/public\/userImages(.*)/ , methods: ['GET', 'OPTIONS']},

            {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS']},
            
            {url: /\/api\/v1\/address(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/address(.*)/ , methods: ['POST', 'OPTIONS']},

            {url: /\/api\/v1\/users(.*)/ , methods: ['GET', 'OPTIONS']},

            {url: /\/api\/v1(.*)/ , methods: ['GET', 'OPTIONS']},// tmp
            {url: /\/api\/v1(.*)/ , methods: ['POST', 'OPTIONS']},// tmp
            {url: /\/api\/v1(.*)/ , methods: ['PUT', 'OPTIONS']},// tmp

            `${api}/address`,
            `${api}/users/login`,
            `${api}/users/check`,
            `${api}/users/register`,
            `${api}/wishlist`
        ]
    })
}

async function isRevoked(req, payload, done) { //check if admin
    if(!payload.isAdmin) {
        done(null, true); //reject token
    }
    
    done();
 
}

module.exports = authJwt;