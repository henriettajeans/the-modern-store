import Image from "next/image";
import styles from "./page.module.css";
import { IProduct } from "./models/IProducts";
import getAllProducts from "./services/getAllProducts";
import DisplayAllProducts from "./components/products";

export default async function Home() {
  const products: IProduct[] = await getAllProducts();

  if (!products) {
    console.log("Inga produkter laddas");
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DisplayAllProducts products={products} />
      </main>
    </div>
  );
}
