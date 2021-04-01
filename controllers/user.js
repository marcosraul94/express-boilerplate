const getUsers = (req, res) => {
    const userExamples = ['User-1', 'User-2'];
    res.send({ users: userExamples });
};

module.exports = {
    getUsers,
};
