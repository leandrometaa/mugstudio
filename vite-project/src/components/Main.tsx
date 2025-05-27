import { useAppStore } from '@/stores/store.ts';
import { Breadcrumbs } from './Breadcrumbs.tsx';
import { MugsList } from '../features/mugs-list/components/MugsList.tsx';
import { MugsConfigurator } from './MugsConfigurator.tsx';
import { PageHeading } from './PageHeading.tsx';

export const Main = () => {
  //
  const selectedPage = useAppStore((state) => state.selectedPage);

  return (
    <main className="px-64 my-8 flex flex-col gap-4 h-full w-full">
      {selectedPage === 'mugs' && (
        <>
          <Breadcrumbs pageName="Tazze" />
          <div className="h-[calc(100dvh-17.25rem)]">
            <h2></h2>
            <MugsList />
          </div>
        </>
      )}
      {selectedPage === 'configurator' && (
        <>
          <Breadcrumbs pageName="Configuratore" />
          <div className="h-[calc(100dvh-14.25rem)] flex flex-col gap-4">
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
