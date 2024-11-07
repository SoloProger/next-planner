import {PageLayoutProps} from "../model/types/PageLayoutProps";

function PageLayout({title, children}: PageLayoutProps) {
    return (
        <section className="flex-col gap-34 mt-24 p-24 w-100 bg-white border-radius-8">
            <h1 className="subtitle-2">{title}</h1>
            {children}
        </section>
    );
}

export default PageLayout;
