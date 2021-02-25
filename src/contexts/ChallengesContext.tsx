import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
// createContext cria um contexto que comunica os componentes uns com os outros. Para que eventos de um determinado componente cause algum efeito ou evento em outro componente;

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenger: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}


interface ChallengesProviderProps  {
    children: ReactNode 
};


export const ChallengesContext = createContext ( { } as ChallengesContextData) ;

export function ChallengesProvider ( { children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel  = Math.pow((level + 1) * 4 ,2)


    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp () {
        setLevel(level + 1);
    }

    function startNewChallenger () {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges [randomChallengeIndex];
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play(); 

        if (Notification.permission === 'granted') {
            new Notification ('Novo Desafio', {body: `Valendo ${challenge.amount} xp!`})
        }
    }

    function resetChallenge () {
        setActiveChallenge(null);
    }


    function completedChallenge () {
        if (!activeChallenge) {
            return;
        }

        const  { amount }  = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);


    }


    return (
        <ChallengesContext.Provider value = { {
            level, 
            levelUp, 
            currentExperience, 
            challengesCompleted,
            startNewChallenger,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completedChallenge,           
             }
            
            }>
          {children}
        </ChallengesContext.Provider>
    );

}

