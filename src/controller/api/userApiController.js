const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.User.findAll()
            .then((users) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: users
                });
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({
                    message: 'Ocurrió un error al buscar usuarios',
                    error: error.message
                });
            });
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then((user) => {
                if (user) {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            total: 1,
                            url: '/api/users'
                        },
                        data: user
                    });
                } else {
                    return res.status(404).json({
                        message: 'El usuario no existe'
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({
                    message: 'Ocurrió un error al buscar el usuario',
                    error: error.message
                });
            });
    },

    create: async (req, res) => {
        try {
            const userToCreate = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const createdUser = await db.User.create(userToCreate);
            res.status(201).json({
                meta: {
                    status: 201,
                    url: '/api/users'
                },
                data: createdUser
            });
        } catch (err) {
            res.status(400).json({
                message: 'Error al crear el usuario',
                error: err.message
            });
        }
    },

    delete: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await db.User.findByPk(userId);

            if (user) {
                await db.User.destroy({ where: { id: userId } });
                res.send('Usuario eliminado con éxito');
            } else {
                res.status(404).json({
                    message: 'El usuario no existe'
                });
            }
        } catch (err) {
            res.status(500).json({
                message: 'Error al eliminar el usuario',
                error: err.message
            });
        }
    }
};