import React from 'react';
import './LoginForm.css'; // Importe o arquivo de estilo para personalizar o layout

const LoginForm = () => {
    return (
        <div className="container" margin-top="50px" > 
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src="./page.png" alt="Imagem" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Usuário</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;