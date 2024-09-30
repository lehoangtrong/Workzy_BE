import db from "../models";
import {handleLimit, handleOffset, handleSortOrder} from "../utils/handleFilter";
import moment from "moment";

export const getAllUsersService = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
    try {
        const users = await db.User.findAndCountAll({
            where: {
                name: {
                    [db.Sequelize.Op.substring]: name || ''
                },
                role_id: 4,
                ...query
            },
            include: [
                {
                    model: db.Customer,
                    attributes: {
                        exclude: ['created_at', 'updated_at', 'createdAt', 'updatedAt']
                    }
                }
            ],
            attributes: {
                exclude: ['password', 'created_at', 'updated_at', 'createdAt', 'updatedAt']
            },
            order: [handleSortOrder(order, 'name')],
            limit: handleLimit(limit),
            offset: handleOffset(page, limit)
        });

        if (!users) {
            return reject('User not found')
        }

        // change date of birth format
        const formattedUsers = [];
        await users.rows.forEach(user => {
            const plainUser = user.get({plain: true});
            plainUser.date_of_birth = moment(plainUser.date_of_birth).format('MM/DD/YYYY');
            formattedUsers.push(plainUser)
        });

        resolve({
            err: 0,
            message: 'User found',
            data: {...users, rows: formattedUsers}
        })
    } catch (error) {
        reject(error)
    }
});


export const removeUserService = (userId) => new Promise(async (resolve, reject) => {
    try {
        const user = await db.User.findOne({
            where: {
                user_id: userId
            }
        });

        if (!user) {
            return reject('User not found')
        }

        user.setStatus('inactive');
        await user.save();

        resolve({
            err: 0,
            message: 'Remove user successful'
        })
    } catch (error) {
        reject(error)
    }
});