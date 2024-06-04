import { PageLayoutProps } from "../model/types/PageLayoutProps";

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <section className="flex-col gap-34 p-24 w-100">
      <h1 className="header-semibold-4 border-bottom-1 border-gray">{title}</h1>
      {children}
    </section>
  );
}

export default PageLayout;
