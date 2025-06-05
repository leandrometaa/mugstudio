import { useAppStore } from "@/stores/appStore.ts";
import { AppBreadcrumb } from "./AppBreadcrumb.tsx";
import { MugsList } from "../features/mugs-list/components/MugsList.tsx";

import { PageHeading } from "./PageHeading.tsx";
import { MugsConfigurator } from "@/features/mugs-configurator/components/MugsConfigurator.tsx";

export const Main = () => {
  // Ottiene selectedPage dallo store Zustand.
  const selectedPage = useAppStore((state) => state.selectedPage);

  return (
    <main className="my-8 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-64 flex flex-col gap-4">
      {selectedPage === "mugs" && (
        <>
          <AppBreadcrumb pageName="Tazze" />
          <div className="block h-[calc(100dvh-14.25rem)] overflow-y-auto p-4">
            <PageHeading
              title="Tazze"
              paragraph="Dai un'occhiata alla nostra grandiosissima offerta di tazze."
            />
            <MugsList />
          </div>
        </>
      )}
      {selectedPage === "configurator" && (
        <>
          <AppBreadcrumb pageName="Configuratore" />
          <div className="flex h-[calc(100dvh-14.25rem)] flex-col gap-4">
            <PageHeading
              title="La tua tazza, le tue regole."
              paragraph="Perché anche un sorso di caffè merita il tuo tocco personale."
            />
            <MugsConfigurator />
          </div>
        </>
      )}
    </main>
  );
};
