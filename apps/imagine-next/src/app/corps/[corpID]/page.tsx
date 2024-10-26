import { CorpViewScreen } from "../../../site-ui/screens/corp-view-screen/CorpViewScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <CorpViewScreen />
        </UserGuard>
    )
}