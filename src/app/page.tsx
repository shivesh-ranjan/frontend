import Image from "next/image";

export default function Home() {
    const tool: string[] = ['Next JS', 'Golang', 'Postgres', 'Kubernetes', 'PyTorch', 'Java Spring', 'Flask'];
    const meme: string[] = [
      'Because server-side rendering is too mainstream without some React spice.',
      "Simplifying concurrency so much that you'll get bored and write another language.",
      "The database that makes you feel like you're configuring a spaceship.",
      "For when running containers wasn't already complex enough.",
      "For when you want your code to look like math, but not enough to use TensorFlow.",
      "For when writing boilerplate code feels like a right of passage.",
      "When you need a backend but don't want to carry too much baggage.",
    ];
  return (
<div>
<div className="relative">
  <div className="h-full absolute inset-0 z-0 bg-center brightness-[0.35] bg-[url('https://m.media-amazon.com/images/M/MV5BNjIzMzI4YzAtMmVlOC00NTM5LTljYWItNDhkYTY5OTNlZTZkXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg')]"></div>
  <div className="relative z-1 md:container py-10 md:py-50 md:mx-auto px-4 text-center">
    <p className="text-4xl text-white mx-auto align-middle font-extrabold">
      Welcome to &quot;<span className="text-primary">The Overlord</span>&quot;!
    </p>
    <p className="text-xl text-white py-4">
      Try out some of the POC Products for FREE or Explore my Blogs.
    </p>
    <div className="container md:flex md:justify-center mx-auto mt-2">
      <button className="btn-primary mr-4 w-full md:w-fit mb-2 md:mb-0">
        Explore Products
      </button>
      <button className="bg-white text-black rounded-lg py-1 px-4 hover:bg-black hover:text-white w-full md:w-fit">
        Read Blogs
      </button>
    </div>
  </div>
</div>

    <div className="container mx-auto max-w-2xl px-4 pb-6 pt-10">
  <h1 className="text-white text-3xl font-extrabold my-2">Tech Stack:</h1>
    <table className="table-fixed border-separate border-white border">
      <thead className="text-white font-extrabold text-xl">
      <tr>
        <th className="border border-white py-2">Tools</th>
        <th className="border border-white">But Why?</th>
      </tr>
      </thead>
      <tbody>
        { tool.map((item, index) => (
        <tr key={index}>
          <td className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 border border-white py-1 px-1">
            {item}
          </td>
          <td className="font-extrabold font-mono text-white border border-white px-1">
            {meme[index]}
          </td>
        </tr>
        ))}
      </tbody>
    </table>
</div>

    <section className="container mx-auto py-12">
  <p
    className="text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 text-center w-fit mx-auto">
    &quot;About Me&quot;
  </p>
  <div className="container mx-auto grid grid-cols-1 md:grid-flow-cols md:grid-cols-2 gap-4 pt-6 px-6 max-w-2xl">
    <div className="md:col-span-1">
      <img className="w-24 mx-auto rounded-full"
        src="https://imgs.search.brave.com/5TUrhnb1Se-ppc3etZn6gR-dc8BTB9dDJB3vtozpx0U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY0L2Y1/LzAxLzY0ZjUwMWRi/NDY3YzQ0NDQ1Mjg1/NTkxYWI4Y2E4NTEy/LmpwZw"
        alt="profile_pic" />
    </div>
    <div className="md:col-span-1 md:pt-2">
      <p className="font-mono text-white text-xl font-extrabold text-center md:text-left py-2">
        Upcoming DevOps Engineer and Full Stack Developer
      </p>
      <p className="font-mono text-slate-300 font-extrabold text-sm text-center md:text-left">
        Arch Linux + i3 + VIM user
      </p>
    </div>
  </div>
  <p className="text-white grid grid-cols-1 px-6 max-w-2xl mx-auto pt-2 pb-6">
    &quot;Hi, I am your friendly neighborhood coding geek. 
    I juggle Docker containers and Kubernetes clusters while sipping coffee, because why not? 
    When I am not busy automating the world, you’ll find me writing backend code that could probably run Mars missions 
    or training machine learning models that might take over the world one day. 
    But hey, don’t worry— I will make sure the logs are readable and the servers stay up ... most of the time.&quot;
  </p>
</section>

</div>
  );
}
