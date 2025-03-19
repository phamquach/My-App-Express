import db from '../models/index.js';

export const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        return res.render('home.ejs',{
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
};

export const getAdminPage = (req, res) => {
    return res.render('admin/admin.ejs');
};
