import { useContext } from "react";
import { sessionContext } from "../context";

export function useSession(): any {
    const { session } = useContext(sessionContext);
    if (!session) {
        throw new Error('session is missing');
    }

    return session;
}