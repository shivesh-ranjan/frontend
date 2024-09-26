import Link from "next/link";

export default function Header(){
    return (
        <nav className="flex justify-between py-4 px-6">
        <div>
            <Link href="/" className="pr-2 hover:text-pink-500">Home</Link>
            <Link href="/blog" className="pr-2 hover:text-pink-500">Blog</Link>
            <Link href="/products" className="hover:text-pink-500">Products</Link>
        </div>
        <div>
            <Link href="/login" className="btn-primary px-3 py-1.5">LOGIN</Link>
        </div>
        </nav>
    );
}
