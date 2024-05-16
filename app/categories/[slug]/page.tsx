import CategoriesPage from "@/components/pages/CategoriesPage/CategoriesPage";

export default function Page({ params }: { params: { slug: string } }) {
  const category = decodeURIComponent(params.slug);
  console.log(category);
  return (
    <div>
      <CategoriesPage category={category} />
    </div>
  );
}
