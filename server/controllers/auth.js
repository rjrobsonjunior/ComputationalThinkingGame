// controllers/auth.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const JWT_SECRET = 'teste';


exports.signup = async (req, res) => {
    try {
        //Nenhum pode ser nulo
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Todos os campos precisam ser preechidos!' });
        }
        
        console.log("username: " + username + " email: " + email + " password: " + password);

        // Hash da senha
        const salt = await bcrypt.genSalt(10); //Valor aleatório para gerar o hash, tornando único
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log("hashedPassword: " + hashedPassword);

        //Salvar no banco de dados
        await pool.query(
            'INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)',
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        // Verificar se o email existe no banco de dados
        const user = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        console.log(user.rows);
        
        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Login incorreto' });
        }

        //Verificar a senha
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }
        
        // Gerar token de autenticação
        //const token = jwt.sign({ user_id: user.rows[0].id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const token = jwt.sign({ user_id: user.rows[0].id_user }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
