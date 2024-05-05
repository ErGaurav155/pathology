"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getUserByDbId } from "@/lib/actions/user.actions";
import Heading from "@/components/shared/Svgs/HEading";
import { DownloadIcon } from "lucide-react";
import { download } from "@/lib/utils";

export default function ImageGalleryPage({
  params: { userID },
}: {
  params: { userID: string };
}) {
  // State to store user data
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data when component mounts
    async function fetchData() {
      try {
        const user = await getUserByDbId(userID);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, [userID]);

  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    title: string
  ) => {
    e.preventDefault();
    download(item, title);
  };
  return (
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
                    "image" + (Math.floor(Math.random() * 100) + 1).toString()
                  )
                }
              >
                <DownloadIcon />
              </button>

              <Image
                alt="image removed"
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
  );
}
