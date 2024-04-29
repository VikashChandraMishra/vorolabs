"use client";
import { RecoilRoot } from "recoil";
import WorkSpace from "./workspace/page";

export default function Home() {
  return (
    <RecoilRoot>
      <WorkSpace />
    </RecoilRoot>
  );
}
