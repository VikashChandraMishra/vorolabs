import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-center w-4/5 m-auto mt-16 text-8xl font-bold">Help customers instantly</p>
      <p className="text-center w-full m-auto py-4 text-8xl font-bold bg-gradient-to-r from-blue-800 to-purple-300  bg-clip-text inline-block text-transparent">with an AI-driven chatbot</p>
      <p className="text-2xl w-2/5 my-4 text-center m-auto">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <span className="text-slate-400">
          &nbsp;
          Iusto libero et dolorem quis necessitatibus fugit rem commodi nesciunt, suscipit sapiente exercitationem molestiae omnis nemo deserunt vero eveniet voluptates. Modi, in!
        </span>
      </p>
      <div className="w-1/6 m-auto">
        <Link href="/login">
          <Button className="bg-blue-600 py-8 w-48 my-8 mx-20 text-1xl text-center font-bold">Let's Get Started!</Button>
        </Link>
      </div>
    </div>
  );
}
