import DefaultLayout from "@/components/default-layout";
import { getAllPagesMeta, getPageData } from "@/lib/contents/pages";
import { ROUTES } from "@/lib/routes";

// Generate static params for SSG
export async function generateStaticParams() {
  const pages = getAllPagesMeta();
  return pages.map((page) => ({
    pageId: page.id,
  }));
}

export default async function PagePage({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const pageData = await getPageData(pageId);
  return (
    <DefaultLayout
      title={pageData.title ?? ""}
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: pageData.title ?? "", href: ROUTES.PAGES_ID(pageData.id) },
      ]}
    >
      <article
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
      />
    </DefaultLayout>
  );
}
