import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="grid grid-rows-6 grid-flow-col gap-4 max-h-[400px] mt-20">
      <div className="col-span-3 row-span-3">
        <Image
          alt="ALt"
          width={300}
          height={200}
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="col-span-3 row-span-3">
        <Image
          alt="ALt"
          width={300}
          height={400}
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="col-span-3 row-span-6">
        <Image
          alt="ALt"
          width={300}
          height={500}
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          alt="ALt"
          width={300}
          height={500}
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="col-span-2 row-span-4">
        <Image
          alt="ALt"
          width={300}
          height={500}
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
    </section>
  );
};

export default Gallery;
