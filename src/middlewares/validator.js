'use strict';

function validatorFunction() {
    return (req, res, next) => {
  
        if (req.query.name === 'Yazan') {
            req.name = req.query.name;
            next();
        } else {
            next(`wrong query ${req.query.name}`)
        }
        
    }
}

module.exports = validatorFunction;