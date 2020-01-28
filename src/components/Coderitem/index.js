import React from 'react';
import './style.css';

function CoderItem({coder}){
    return (
        <li className="dev-item">
            <header>
                <img src={coder.avatar_url} alt={coder.name} />
                <div className="user-info">
                    <strong>{coder.name}</strong>
                    <span>{coder.techs.join(', ')}</span>
                </div>
            </header>
            <p>{coder.bio}</p>
            <a href={`https://github.com/${coder.github_username}`}>Acessar Perfil no Github</a>
        </li>
    )
}

export default CoderItem;