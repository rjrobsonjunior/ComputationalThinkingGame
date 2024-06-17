const pool = require('../db');

exports.prathical = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await pool.query('SELECT * FROM atividades_praticas WHERE id_pratica = $1', [id]);
        if (response.rows.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        
        res.json(response.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Erro ao verificar autenticação' });
    }
};