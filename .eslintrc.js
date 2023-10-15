 /*global */
 
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "globals": {
            "_": "readonly"
    },
    
        "env": {
            "commonjs": true,
            "es2021": true,
            "node": true
        },
        "extends": [
            "airbnb-base"
        ],
        "parserOptions": {
            "ecmaVersion": 12
        },
        "rules": {
            "no-console": "off"
        }
    }
    

