import DisplaySingleProduct from "@/components/singleProduct";
import getSingleProduct from "@/services/getSingleProduct";
import { notFound } from "next/navigation";

// Generate metadata for each single product when page is fetched with that product

export async function generateMetadata({ params }: PageProps<"/product/[slug]">) {
    const { slug } = await params;
    const product = await getSingleProduct(slug);
    return {
        // Another example: title: `MyStore - ${product.title}`
        title: product.title,
        description: product.description

    }
}

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