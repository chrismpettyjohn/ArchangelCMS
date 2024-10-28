'use client';
import { toast } from 'react-toastify';
import React, { SyntheticEvent, useContext, useState } from 'react';
import {
    SESSION_LOCAL_STORAGE_IDX,
    sessionContext,
} from '@imagine-cms/web';
import {
    useSessionCreateWithCredentials,
    useUserFetchOne,
} from '@imagine-cms/client';
import { useRouter } from 'next/navigation';

export function LoginModal() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setSession } = useContext(sessionContext);
    const sessionCreate = useSessionCreateWithCredentials();
    const userLookup = useUserFetchOne();

    const isDisabled = !email || !password;

    async function onLogin(event: SyntheticEvent) {
        try {
            event.preventDefault();
            if (!email) {
                toast.error('You must provide an email address');
            }
            if (!password) {
                toast.error('You must provide a password');
            }

            const newSession = await sessionCreate.execute(email, password);
            localStorage.setItem(
                SESSION_LOCAL_STORAGE_IDX,
                newSession.sessionCreateWithCredentials.accessToken
            );

            const matchingUser = await userLookup.fetch({
                id: newSession.sessionCreateWithCredentials.userID,
            });
            setSession(matchingUser);

            toast.success(`Welcome back, ${matchingUser.username}`);
            router.push('/me');
        } catch (e: any) {
            toast.error('Check your credentials and try again');
            throw e;
        }
    }

    return (
        <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" required value={email} onChange={e => setEmail(e.currentTarget.value ?? '')} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Password" required value={password} onChange={e => setPassword(e.currentTarget.value ?? '')} />
                            </div>
                            <button disabled={isDisabled} type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}