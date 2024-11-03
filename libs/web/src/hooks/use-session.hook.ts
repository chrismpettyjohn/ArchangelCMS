import { useContext } from "react";
import { sessionContext } from "../context";
import { UserFragment } from "@imagine-cms/client";

export function useSession(): UserFragment {
    const { session } = useContext(sessionContext);
    if (!session) {
        throw new Error('session is missing');
    }

    return session;
}