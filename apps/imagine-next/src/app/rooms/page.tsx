import { RoomListScreen } from "../../site-ui/screens/room-list-screen/RoomListScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <RoomListScreen />
        </UserGuard>
    )
}
