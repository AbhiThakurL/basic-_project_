import HeaderPage from "./header/header";
import FooterPage from "./footer/footer";

export default function MainLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <main >
                <HeaderPage/>
                {children}
                <FooterPage/>
            </main>

        </div>
    )
}
