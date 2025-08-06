let IS_PROD = true;

const server = IS_PROD ?
    "https://chatzy-4105.onrender.com" :
    "http://localhost:8000"
    

export default server;