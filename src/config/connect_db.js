import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('My_SQL', 'root', 'Quach10052005', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
