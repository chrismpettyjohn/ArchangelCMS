import { ReactNode } from "react";
import { SiteHeader } from "../site-header/SiteHeader";
import { SiteFooter } from "../site-footer/SiteFooter";

export function UserLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <SiteHeader />
            <section className="features-section" style={{ height: 'calc(100% - 190px)' }}>
                {children}
            </section>
            <SiteFooter />
        </>
    )
}