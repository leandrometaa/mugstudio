import { useAppStore } from "@/stores/appStore.ts";
import { AppBreadcrumb } from "./AppBreadcrumb.tsx";
import { MugsList } from "../features/mugs-list/components/MugsList.tsx";
import { MugsConfigurator } from "./MugsConfigurator.tsx";
import { PageHeading } from "./PageHeading.tsx";

export const Main = () => {
  //
  const selectedPage = useAppStore((state) => state.selectedPage);

  return (
    <main className="my-8 flex h-full w-full flex-col gap-4 px-64">
      {selectedPage === "mugs" && (
        <>
          <AppBreadcrumb pageName="Tazze" />
          <div className="h-[calc(100dvh-17.25rem)]">
            <h2></h2>
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
