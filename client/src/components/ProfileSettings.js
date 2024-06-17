// src/ProfileSettings.js

import React, { useState } from 'react';
import './ProfileSettings.css';
import Navbar from './Navbar';

function ProfileSettings() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the email and password changes
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCancelChanges = () => {
    // Logic to cancel the changes, resetting the fields
    setEmail('');
    setPassword('');
  };

  const handleDeleteAccount = () => {
    setShowConfirmPopup(true);
  };

  const handleConfirmDelete = () => {
    if (confirmText === 'APAGAR') {
      // Logic to delete the account
      console.log('Account deleted');
      setShowConfirmPopup(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmPopup(false);
    setConfirmText('');
  };

  return (
    <div className="profile-settings">
      <Navbar></Navbar>
      <h2>Configurações de Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Novo E-mail:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
        </div>
        <div>
          <label>
            Nova Senha:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
        </div>
        <button type="submit">Salvar Mudanças</button>
        <button type="button" className="cancel-changes" onClick={handleCancelChanges}>
          Cancelar Alterações
        </button>
      </form>
      <button type="button" className="delete-account" onClick={handleDeleteAccount}>
        Apagar Conta
      </button>
      {showConfirmPopup && (
        <div className="confirm-popup">
          <p>Para confirmar a exclusão, digite "APAGAR" abaixo:</p>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />
          <button type="button" onClick={handleConfirmDelete}>
            Confirmar
          </button>
          <button type="button" onClick={handleCancelDelete}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileSettings;
