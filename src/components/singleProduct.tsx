import { IProduct } from "@/models/IProducts";

export default async function SingleProduct({ product }: { product: IProduct }) {

    // const product: IProduct = await getProductBySlug();
    return (
        <section>
            <h3>{product.title}</h3>
            <span>{product.description}</span>
        </section>
    )

}