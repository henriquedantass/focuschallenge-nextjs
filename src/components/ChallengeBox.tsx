import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox () {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    return (
        <div className = {styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className = {styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} de xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt = "desafio"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                        type = 'button'
                        className = {styles.challengeCompletedButton}
                        >
                            Consegui
                        </button>
                        <button 
                        type = 'button'
                        className = {styles.challengeFailButton}
                        onClick = {resetChallenge}
                        >
                            Falhei
                        </button>
                    </footer>

                </div>
            ) : (
            <div className = {styles.challengeBoxNotActive}>
                <strong>Finalize o tempo de foco para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando o desafio
                </p>
            </div>
            )}

        </div>
    )
}