import { Socials } from "./Socials"
import { PageNavigation } from "./PageNavigation";

export const Introduction = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Rafiluis De Los Santos</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">I build digital experiences for web and mobile</p>
            </div>
            <PageNavigation />
            <Socials />
        </header>
    )
}