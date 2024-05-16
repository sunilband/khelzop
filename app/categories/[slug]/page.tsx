import CategoriesPage from "@/components/pages/CategoriesPage/CategoriesPage";

export default function Page({ params }: { params: { slug: string } }) {
  const category = params.slug;
  return (
    <div>
      <CategoriesPage category={category} />
    </div>
  );
}
