import DisplaySingleProduct from "@/components/singleProduct";
import getSingleProduct from "@/services/getSingleProduct";
import { notFound } from "next/navigation";

export default async function SingleProduct({
    params,
}: PageProps<"/product/[slug]">) {
    const { slug } = await params;
    // const singleProduct = data.find((item) => item.slug === String(slug))

    const product = await getSingleProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <section>

            <DisplaySingleProduct product={product} />

        </section>
    )
}