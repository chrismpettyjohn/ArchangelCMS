import { SettingsScreen } from "../../site-ui/screens/settings-screen/SettingsScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <SettingsScreen />
        </UserGuard>
    )
}