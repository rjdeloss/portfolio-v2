import { useEffect, useState } from "react";

import { Socials } from "./Socials";
import { PageNavigation } from "./PageNavigation";

export const Introduction = () => {
    const [personal, setPersonal] = useState<any>({});

    useEffect(() => {
        async function fetchInfo() {
          if (window !== undefined) {
            try {
              const response = await fetch('/info.json', { next: { revalidate: 3600 } });
              const jsonData = await response.json();
              setPersonal(jsonData.personal)
            } catch (error) {
              new Error("could not fetch the data")
            }
          }
        }
    
        fetchInfo();
      }, [])
    
    const {name, currentRole, description} = personal
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{name}</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{currentRole}</h2>
                <p className="mt-4 max-w-xs leading-normal">{description}</p>
            </div>
            <PageNavigation />
            <Socials />
        </header>
    )
}