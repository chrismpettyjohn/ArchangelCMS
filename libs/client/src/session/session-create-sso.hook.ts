import { useMutation } from "@apollo/client";
import { SESSION_CREATE_SSO_MUTATION, SessionCreateSSOResponse } from "./session-create-sso.mutation";

export interface UseSessionCreateSSOResponse {
    execute(): Promise<SessionCreateSSOResponse>;
    error?: Error;
    loading: boolean;
    data?: SessionCreateSSOResponse;
}

export function useSessionCreateSSO(): UseSessionCreateSSOResponse {
    const [createSSO, { loading, error, data }] = useMutation<SessionCreateSSOResponse>(SESSION_CREATE_SSO_MUTATION);

    const onCreateSession = async (): Promise<SessionCreateSSOResponse> => {
        const response = await createSSO();
        return response.data!;
    }

    return {
        execute: onCreateSession,
        error,
        loading,
        data: data ?? undefined,
    }
}