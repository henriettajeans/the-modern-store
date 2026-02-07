import { IProduct } from "@/models/IProducts";

export default function DisplaySingleProduct({ product }: { product: IProduct }) {

    // const product: IProduct = await getProductBySlug();
    return (
        <section>
            <h3>{product.title}</h3>
            <span>{product.description}</span>

            <figure>
                {/* TODO: change to map */}
                <img src={product.images[0]} />
                <img src={product.images[1]} />
                <img src={product.images[2]} />
            </figure>
        </section>
    )

}