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
      <picture>
        <source srcSet="/literallyMe-dark.png" media="(prefers-color-scheme: dark)"/>
        <source srcSet="/literallyMe.png"/>
        <img src="/literallyMe.png" alt="literallyMe.png" width={256} height={256}/>
      </picture>
      <p>literally, this guy is like me.</p>
      <p>sitting there, building some random stuff at 3am.</p>
    </section>
  );
}
