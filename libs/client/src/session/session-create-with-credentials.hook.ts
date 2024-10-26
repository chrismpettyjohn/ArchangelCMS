import { useMutation } from "@apollo/client";
import { SESSION_CREATE_WITH_CREDENTIAL_MUTATION, SessionCreateWithCredentialsResponse, SessionCreateWithCredentialsVariables } from "./session-create-with-credentials.mutation";

export interface UseSessionCreateWithCredentialsResponse {
    execute(email: string, password: string): Promise<SessionCreateWithCredentialsResponse>;
    error?: Error;
    loading: boolean;
    data?: SessionCreateWithCredentialsResponse;
}

export function useSessionCreateWithCredentials(): UseSessionCreateWithCredentialsResponse {
    const [createSession, { loading, error, data }] = useMutation<SessionCreateWithCredentialsResponse, SessionCreateWithCredentialsVariables>(SESSION_CREATE_WITH_CREDENTIAL_MUTATION);

    const onCreateSession = async (email: string, password: string): Promise<SessionCreateWithCredentialsResponse> => {
        const response = await createSession({
            variables: {
                input: {
                    email,
                    password,
                }
            }
        });
        return response.data!;
    }

    return {
        execute: onCreateSession,
        error,
        loading,
        data: data ?? undefined,
    }
}