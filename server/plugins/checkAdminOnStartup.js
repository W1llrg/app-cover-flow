import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin';
import bcrypt from 'bcrypt';
import { AppDataSource, initialize } from '../database/database';
import User from '../database/entities/User';

const saltRounds = 10;
const adminEmail = 'admin@example.com';
const adminPassword = 'adminpassword';
const adminUsername = 'admin';

export default defineNitroPlugin(async () => {
    console.log('DB: Checking for admin user');

    try {
        await initialize(); // Assurez-vous que la base de données est initialisée

        const userRepository = AppDataSource.getRepository(User);
        const adminUser = await userRepository.findOne({ where: { mail: adminEmail } });

        if (!adminUser) {
            console.log('DB: Admin user not found, creating one');

            const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);
            const newAdminUser = userRepository.create({
                mail: adminEmail,
                password: hashedPassword,
                username: adminUsername,
            });

            await userRepository.save(newAdminUser);
            console.log('DB: Admin user created successfully');
        } else {
            console.log('DB: Admin user already exists');
        }
    } catch (error) {
        console.error('DB: Error checking/creating admin user:', error);
        throw error;
    }
});