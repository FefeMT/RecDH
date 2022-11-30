const port = process.env.PORT || 3312;
const start = () => console.log(`Server on http://localhost:${port}`);
module.exports = {port,start};