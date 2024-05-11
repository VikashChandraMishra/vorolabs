import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function Page() {
    async function handleLogin(formData: FormData) {
        'use server';
        redirect('/dashboard');
    }

    return (
        <div className="flex h-screen">
            <div className="w-2/5 bg-blue-400 flex flex-col justify-center items-center">
                <form
                    method="post"
                    action={handleLogin}
                    className="w-3/5 h-1/4 flex flex-col items-center justify-evenly"
                >
                    <p className="text-center w-full m-auto py-8 text-4xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text inline-block text-transparent">Welcome to VOROLABS</p>
                    <Input
                        className="py-6"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Input
                        className="my-2 py-6"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Button
                        className="bg-blue-300 py-8 my-4 mx-20 w-full text-1xl text-center font-bold rounded-3xl"
                        type="submit"
                    >Create Account</Button>
                </form>
            </div>
            <div className="w-3/5 bg-blue-300 px-28 flex flex-col justify-center">
            </div>
        </div>
    );
}