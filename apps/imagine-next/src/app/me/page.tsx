import React from 'react';
import { UserGuard } from "@imagine-cms/web";
import { MeScreen } from "../../site-ui/screens/me-screen/MeScreen";

export default function Page() {
    return (
        <UserGuard redirect>
            <MeScreen />
        </UserGuard>
    )
}