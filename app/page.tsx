import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Just my website
      </h1>
      <p className="mb-4">
        {`
        I am a dev. 
        I build things.
        `}
      </p>
      <div className="my-8"></div>
      <Image src={"/literallyMe.png"} alt="literrallyMe.png" width={256} height={256}/>
      <p>literally, this guy is like me.</p>
      <p>sitting there, building some random stuff at 3am.</p>
    </section>
  );
}
