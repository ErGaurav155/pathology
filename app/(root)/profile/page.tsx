"use client";

import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { getUserByDbId, getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import Heading from "@/components/shared/Svgs/HEading";
import { DownloadIcon } from "lucide-react";
import { download } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data when component mounts
    async function fetchData() {
      try {
        const { userId } = auth();

        if (!userId) redirect("/sign-in");
        const user = await getUserById(userId);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    title: string
  ) => {
    e.preventDefault();
    download(item, title);
  };
  return (
    <div className="wrapper">
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{userData.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">
              {userData.imageUrls.length}
            </h2>
          </div>
        </div>
        <div className="p-4 mt-5  ">
          <Heading title="Image Gallery" />
          {userData && userData.imageUrls && userData.imageUrls.length > 0 ? (
            <div className="grid p-0 sm:p-[80px] md:p-0  md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-0 ">
              {userData.imageUrls.map((imageUrl: string, index: number) => (
                <div
                  className={`rounded-md overflow-hidden relative w-[${1024}]
        h-[${1024}]`}
                  key={index}
                >
                  <button
                    className="absolute top-1 right-1 rounded-md bg-white p-2"
                    onClick={(e) =>
                      downloadHandler(
                        e,
                        imageUrl,
                        "image" +
                          (Math.floor(Math.random() * 100) + 1).toString()
                      )
                    }
                  >
                    <DownloadIcon />
                  </button>

                  <Image
                    alt="image"
                    className="flex-1 "
                    src={imageUrl}
                    width={1024}
                    height={1024}
                    priority
                  />
                </div>
              ))}
            </div>
          ) : (
            <Heading title="No images found." />
          )}
        </div>
      </section>
    </div>
  );
}
