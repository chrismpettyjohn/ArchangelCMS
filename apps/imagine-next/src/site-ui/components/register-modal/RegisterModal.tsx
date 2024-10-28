'use client';
import React, { SyntheticEvent, useContext, useState } from 'react';
import {
    BETA_ENABLED,
    localStorageService,
    SESSION_LOCAL_STORAGE_IDX,
    sessionContext,
} from '@imagine-cms/web';
import {
    UserCreateInput,
    UserGender,
    useUserCreate,
    useUserFetchOne,
} from '@imagine-cms/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
export function RegisterModal() {
    const router = useRouter();
    const createUser = useUserCreate();
    const fetchUser = useUserFetchOne();
    const { setSession } = useContext(sessionContext);
    const [userCreateInput, setUserCreateInput] = useState<UserCreateInput>({
        username: '',
        email: '',
        password: '',
        gender: UserGender.Male,
        betaCode: '',
    });
    const [passwordAgain, setPasswordAgain] = useState('');

    const betaCodeRequirementsMet = BETA_ENABLED
        ? !!userCreateInput.betaCode
        : true;

    const isLoading = createUser.loading;

    const canCreateUser =
        userCreateInput.email !== '' &&
        userCreateInput.username !== '' &&
        userCreateInput.password !== '' &&
        userCreateInput.password === passwordAgain &&
        betaCodeRequirementsMet &&
        !isLoading;

    function onChanges(changes: Partial<UserCreateInput>) {
        setUserCreateInput(_ => ({
            ..._,
            ...changes,
        }));
    }

    async function onRegister(event: SyntheticEvent) {
        event.preventDefault();
        try {
            if (!canCreateUser) {
                return;
            }
            const newSession = await createUser.execute(userCreateInput);
            localStorageService.set(
                SESSION_LOCAL_STORAGE_IDX,
                newSession.accessToken
            );
            const matchingUser = await fetchUser.fetch({ id: newSession.userID });
            setSession(matchingUser as any);
            toast.success(`Welcome back, ${matchingUser.username}`);
            router.push('/me');
        } catch (e: any) {
            toast.error('Failed to create user');
            throw e;
        }
    }
    return (
        <div className="modal fade" id="registerModal" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="registerModalLabel">Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onRegister}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="registerUsername" placeholder="Enter username" required value={userCreateInput.username} onChange={e => onChanges({ username: e.currentTarget.value ?? '' })} />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" required value={userCreateInput.email} onChange={e => onChanges({ email: e.currentTarget.value ?? '' })} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="registerPassword" placeholder="Password" required value={userCreateInput.password} onChange={e => onChanges({ password: e.currentTarget.value ?? '' })} />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="registerConfirmPassword" placeholder="Confirm password" required value={passwordAgain} onChange={e => setPasswordAgain(e.currentTarget.value ?? '')} />
                            </div>
                            <button disabled={!canCreateUser} type="submit" className="btn btn-secondary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}