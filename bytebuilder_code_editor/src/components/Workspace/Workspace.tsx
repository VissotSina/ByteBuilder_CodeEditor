import React, { useState } from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Confetti from 'react-confetti';
import useWindowSize from '@/hooks/userWindowSize';

type WorkspaceProps = {
    problem: Problem
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    const {width,height} = useWindowSize();
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);
    
    return <Split className='split' minSize={0}>
        <ProblemDescription problem={problem} _solved={solved}/>
        <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved}/>
        {success && <Confetti gravity={0.3} tweenDuration={4000} width={width} height={height-1}/>}
        </Split>
}
export default Workspace;