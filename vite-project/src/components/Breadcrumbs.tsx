import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from './ui/breadcrumb.tsx';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbsProps {
  pageName: string;
}

export const Breadcrumbs = ({ pageName }: BreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="flex items-center gap-2"
          >
            <FontAwesomeIcon
              icon={faHome}
              className="text-xs"
            />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
