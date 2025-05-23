import { Configurator } from './Configurator.tsx';
import { PageHeading } from './PageHeading.tsx';

export const Main = () => {
  return (
    <main className="px-64 my-8 flex flex-col gap-8 w-full h-full">
      <PageHeading />
      <Configurator />
    </main>
  );
};
