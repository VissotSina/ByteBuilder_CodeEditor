import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut} from "react-icons/fi";

type LogoutProps = {};

const Logout:React.FC = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogoutt = () => {
        signOut();
    }
    
    return <button className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2" onClick={handleLogoutt}>
        <FiLogOut />
    </button>};
export default Logout;