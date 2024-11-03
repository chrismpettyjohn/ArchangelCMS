import { ReactNode } from "react";
import { SiteHeader } from "../site-header/SiteHeader";
import { SiteFooter } from "../site-footer/SiteFooter";

export function UserLayout({ children }: { children: ReactNode }) {
    return (
        <div className="page-container">
            <SiteHeader />
            {children}
            <SiteFooter />
        </div>
    )
}