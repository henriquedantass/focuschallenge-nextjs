import styles from '../styles/components/Profile.module.css';

export function  Profile () {
    return (
        <div className = {styles.containerProfile}>
            <img src="https:github.com/henriquedantass.png" alt="Henrique Dantas"/>
            <div>
                <strong>Henrique Dantas</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>


    );
}