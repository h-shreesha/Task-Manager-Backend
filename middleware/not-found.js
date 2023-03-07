const notFound = (req, res) => res.status(404).send('Route Does Not exist');

module.exports = notFound;
