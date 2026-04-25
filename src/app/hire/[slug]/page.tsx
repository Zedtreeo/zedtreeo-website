import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function HireRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/services/${slug}`);
}
