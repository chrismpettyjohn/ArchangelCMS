import { useLazyQuery } from "@apollo/client";
import { SESSION_BY_JWT_QUERY, SessionByJwtQueryResponse, SessionByJwtQueryVariables } from "./session-by-jwt.query";

export interface UseSessionByJwt {
    execute(jwt: string): Promise<SessionByJwtQueryResponse>;
    error?: Error;
    loading: boolean;
    data?: SessionByJwtQueryResponse;
}

export function useSessionByJwt(): UseSessionByJwt {
    const [getSession, { loading, error, data }] = useLazyQuery<SessionByJwtQueryResponse, SessionByJwtQueryVariables>(SESSION_BY_JWT_QUERY);

    const onCreateSession = async (jwt: string): Promise<SessionByJwtQueryResponse> => {
        const response = await getSession({ fetchPolicy: "network-only", variables: { jwt } })
        return response.data!;
    }

    return {
        execute: onCreateSession,
        error,
        loading,
        data: data ?? undefined,
    }
}