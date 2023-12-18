import Image from "next/image";
import Searching from "./components/Searching";
import Gallery from "./components/Gallery";
import Categories from "./components/Categories";
import DefaultBanner from "@/components/organisms/DefaultBanner";
import DoubleTextBlock from "@/components/molecules/DoubleTextBlock";
import Link from "next/link";

export default function Home() {
  return (
    <main className="primary-color">
      <Searching />

      <Gallery />

      <Categories />

      <DefaultBanner imageSrc="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D">
        <div className="flex flex-col gap-5 pb-4 lg:pt-4">
          <h4 className="extra-color font-bold hidden lg:block">Create Profile</h4>
          <DoubleTextBlock
            subtitle="Work Profile is a personality assessment that measures an individual's work personality through their workplace traits, social and emotional traits; as well as the values and aspirations that drive them forward."
            title="Create Your Personal Account Profile"
          />
          <Link href={"#"}>
            <button className="primary-btn">Create Profile</button>
          </Link>
        </div>
      </DefaultBanner>
    </main>
  );
}
