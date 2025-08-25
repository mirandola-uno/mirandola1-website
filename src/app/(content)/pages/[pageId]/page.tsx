import DefaultLayout from "@/components/default-layout";
import { getAllContents, getContentData } from "@/lib/contents";
import { ROUTES } from "@/lib/routes";

// Generate static params for SSG
export async function generateStaticParams() {
  const pages = getAllContents("pages");
  return pages.map((page) => ({
    pageId: page.id,
  }));
}

export default async function PagePage({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const pageData = await getContentData("pages", pageId);
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
