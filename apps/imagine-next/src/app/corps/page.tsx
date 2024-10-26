import { CorpListcreen } from "../../site-ui/screens/corp-list-screen/CorpListScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <CorpListcreen />
        </UserGuard>
    )
}