import { IProduct } from "@/models/IProducts";

export default function DisplaySingleProduct({ product }: { product: IProduct }) {

    // const product: IProduct = await getProductBySlug();
    return (
        <section className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>

            <figure>

                {product.images.map((img, index) => (
                    <img key={index} src={img} />
                ))}
            </figure>
        </section>
    )

}