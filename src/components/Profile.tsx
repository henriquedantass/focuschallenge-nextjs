import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function  Profile () {

    const {level} = useContext(ChallengesContext);


    return (
        <div className = {styles.containerProfile}>

            <img src = "/icons/user.svg" alt="Henrique Dantas"/>
            <div>
                <strong>Usuário</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>


    );
}