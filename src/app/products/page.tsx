import Link from "next/link";

export default function ProductsHome(){
    const products = [
        {
            id: 1,
            name: 'Friday', 
            description: 'Meet Friday, your ultimate Data Scientist Buddy! Not only can she visualize your data like a pro, creating charts and graphs that make sense of even the messiest datasets, but she goes beyond that. She’ll effortlessly find correlations between attributes you didn’t even know mattered, uncovering hidden relationships like a detective with a PhD in statistics. Need a deep learning model? No problem! Friday can build one from scratch, handling everything from data preprocessing to training complex neural networks—all without any human intervention. She’s basically the full-stack data scientist you always wished for, minus the coffee breaks.', 
            image: 'https://images.datacamp.com/image/upload/v1682074694/AI_shaking_hands_with_a_human_5f059b70c5.png', 
            url: '/products/friday'
        },
    ]
    return (
        <section className="pt-8 px-6 pb-4">
            <p className="bg-clip-text text-5xl bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent font-extrabold w-fit">Products:</p>
            {products.map((product) => (
                <div key={product.id} className="container border border-white rounded-lg my-4 py-8 px-4">
                    <p className="text-3xl font-bold pb-2 text-primary w-fit">{product.id}.{product.name}</p>
                    <div className="flex-none lg:flex">
                        <img src={product.image} alt={product.name} className="rounded-xl border border-white w-full md:w-60 lg:w-72"/>
                        <div className="mx-0 md:ml-12">
                            <p className="py-4 md:py-0">{product.description}</p>
                            <Link href={product.url} className="btn-primary py-2">Explore</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
