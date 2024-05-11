"use client";
import { RecoilRoot } from "recoil";
import WorkSpace from "./workspace";
export default function Page() {
    return (
        <RecoilRoot>
            <WorkSpace />
        </RecoilRoot>
    );
}