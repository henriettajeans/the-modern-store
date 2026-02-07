import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Om oss',
    description: 'Historien om The Modern store',
}

export default function About() {
    return (<section>

        <h1>Om oss</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio consequatur ad modi illo impedit hic soluta enim nulla minima? Et ducimus sequi repudiandae aspernatur cupiditate eligendi eos quos minima reiciendis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia necessitatibus tempora ad aliquid, alias optio rerum esse numquam neque quisquam facere at voluptatum sequi recusandae architecto culpa. Voluptatibus, natus cum.</p>
    </section>)
}