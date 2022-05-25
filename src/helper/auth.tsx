// import { createContext, useContext } from 'react';

// import useLocalStorage from "use-local-storage";

// const AuthContext = createContext({ session: null });

// const AuthProvider = (props: any) => {
//     const [session, setAuth] = useLocalStorage('session', null);

//     const logout = () => setAuth(null);

//     return (
//         <AuthContext.Provider value={{ session, setAuth, logout }} {...props} />
//     );
// };

import { createContext, useContext } from 'react';
import useStore from './store';
interface AuthContextType {
    // We defined the user type in `index.d.ts`, but it's
    // a simple object with email, name and password.
    user?: any;
    accounts: any,
    // loading: boolean;
    // error?: any;
    setAuth: (user: any) => void;
    signin: (user: any) => void;
    logout: () => void;
    isMod: (scope: string) => boolean
}

interface Session {
    _id: string,
    avt?: string,
    nm: string,
    mail: string,
    scope?: [string]
    token: string
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// const AuthContext = createContext({});

const AuthProvider = (props: any) => {
    // const [user, setAuth] = useState(null);
    // we will use loading later

    const [user, setAuth] = useStore<Session>('session');
    const [accounts, setAccounts] = useStore<Array<Session>>('accounts', []);

    const logout = () => {
        const lists = accounts?.filter(s => s._id !== user?._id);
        const session = lists && lists.length > 0 ? lists[0] : null;

        setAuth(session!);
        setAccounts(lists!);
    }

    const signin = (user: Session) => {
        var f = accounts?.some((s) => s._id == user._id);
        if (!f) {
            accounts?.push(user);
            setAccounts(accounts!);
        }

        setAuth(user);
    }

    const shift = (user: Session) => {
        setAuth(user);
    }

    const isMod = (scope:string) => user?.scope && user.scope.indexOf(scope) >= 0;

    // a function that will help us to add the user data in the auth;

    return (
        <AuthContext.Provider value={{ user, isMod, setAuth, accounts, shift, signin, logout }} {...props} />
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }