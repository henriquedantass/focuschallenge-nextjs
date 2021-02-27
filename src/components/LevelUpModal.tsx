import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';



export function  LevelUpModal () {
    const {level,closeModalLevelUp} = useContext(ChallengesContext);
     return (
        
        <div className = {styles.overlay}>
            <div className = {styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você avançou de nível</p>
                <button type = 'button' onClick = {closeModalLevelUp}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button> 
            </div>
        </div>
        
     )
}