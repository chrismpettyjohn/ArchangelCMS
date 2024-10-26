import React from 'react';
import { UserGuard } from "@imagine-cms/web";
import { PhotoListScreen } from "../../site-ui/screens/photo-list-screen/PhotoListScreen";

export default function Page() {
    return (
        <UserGuard redirect>
            <PhotoListScreen />
        </UserGuard>
    )
}