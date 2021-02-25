import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';
// createContext cria um contexto que comunica os componentes uns com os outros. Para que eventos de um determinado componente cause algum efeito ou evento em outro componente;

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: Number;
    currentExperience: Number;
    challengesCompleted: Number;
    activeChallenge: Challenge;
    experienceToNextLevel: Number;
    levelUp: () => void;
    startNewChallenger: () => void;
    resetChallenge: () => void;
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

    function levelUp () {
        setLevel(level + 1);
    }

    function startNewChallenger () {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges [randomChallengeIndex];
        setActiveChallenge(challenge)
    }

    function resetChallenge () {
        setActiveChallenge(null);
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
             }
            
            }>
          {children}
        </ChallengesContext.Provider>
    );

}

