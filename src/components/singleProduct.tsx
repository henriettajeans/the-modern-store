import { IProduct } from "@/models/IProducts";
import LikeButton from "./likeButton";

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
            <LikeButton productTitle={product.slug} initialLikes={0} />
        </section>
    )

}