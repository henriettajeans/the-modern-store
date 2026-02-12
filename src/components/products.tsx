
import { IProduct } from "../models/IProducts";
import ProductFilter from "./filterProduct";


export default function DisplayAllProducts({ products }: { products: IProduct[] }) {


    return (
        <section className="product-display">
            <h2>Alla våra produkter</h2>
            <ProductFilter products={products} />
                

        </section>
    )
}