'use strict';

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    firstName: 'Pham',
                    lastName: 'Quach',
                    email: 'admin@gmail.com',
                    password: '123456',
                    address: '78 Phu Yen',
                    gender: '1',
                    typeRole: 'ROLE',
                    keyRole: 'R1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    },
};
