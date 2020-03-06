import React from 'react';
import styles from './styles'
import './styles.css'
function App() {
  return (
    <div style={styles.DadBox}>
        <div style={styles.title}>
          <spam style={{ color: 'grey', fontSize: 20 }}>STEAM POWERED</spam>
        </div>

        <div>
          <input style={styles.loginBoxes} placeholder="E-mail" />
          <input secureTextEntry style={styles.loginBoxes} placeholder="Senha" />
          <div style={{color: 'grey'}}>
              Ainda não tem cadastro? Cadastre-se
          </div>
        </div>

        <div style={styles.other}>
          <button title="Acessar" color="grey" style={{color: '#fff', backgroundColor: 'grey', padding: 5, borderStyle: 'solid', borderRadius: 5, paddingTop: 8, paddingBottom: 8}}>ACESSAR</button>
        </div>
  
      </div>
  );
}

export default App;
