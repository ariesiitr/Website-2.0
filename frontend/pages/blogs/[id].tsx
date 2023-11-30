import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SingleBlogCall } from "../../hooks/blogs";
import styles from "../../styles/Blog.module.css";
import { BASE_IMG_URL } from "@/utils/network";

const BlogView = () => {
  const router = useRouter();
  type BlogData = {
    id: string;
    title: string;
    web_image: string;
    name: string;
    content: string | TrustedHTML | any;
  };

  const { id } = router.query;
  const [data, setData] = useState<BlogData | null>(null);

  const { mutate } = SingleBlogCall(
    (res :any) => {

      setData(res.data);
    },
    (err : any) => {
      console.log("Mutation error:", err);
    },
  );
  useEffect(() => {
    mutate(id);
  }, [id]);
  const imageUrl = `${BASE_IMG_URL}${data?.web_image}`;

  const styleObj = {
    background: "rgba(0, 0, 0, 0.10)",
    borderRadius: "1.5rem",
    boxShadow:
      "2px 2px 2px 0px rgba(255, 255, 255, 0.09) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.09) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);",
  };
  const blogStyle = {
    borderRadius: "20px",
    background: "rgb(114,110,106)",
    backgroundBlendMode: "luminosity",
    boxShadow:
      "2px 2px 2px 0px rgba(255, 255, 255, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);",
  };

  return (
    <>
      <div
        className="bg bg-cover h-screen min-w-screen bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="flex items-center xs:h-[8vh] sm:h-[8vh] justify-center ">
          <div className="flex justify-between md:hidden sm:w-[90vw] xs:w-[90%]  ml:hidden ">
            <button
              className="  mt-3 rounded-full  w-8 h-8"
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href={"/blog/"}>
                {" "}
                <img
                  src="/clarity_arrow-line.svg"
                  className="md:hidden ml:hidden"
                />
              </Link>
            </button>
            <button
              className="  mt-3 flex items-center justify-center rounded-full w-8 h-8 "
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href="">
  
                <img src="/charm.svg" className="md:hidden ml:hidden" />
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full h-[30%] md:h-[25%] xs:h-[20vh] sm:h-[22vh]  flex justify-center">
          <div
            className={` w-[65%] md:w-[75%] xs:w-[90%] sm:w-[90%] rounded-3xl xs:rounded-xl sm:rounded-2xl relative bg-cover text-3xl xs:mt-6 sm:mt-6 mt-10 ${styles["image-container"]} `}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <button
              className=" absolute ml-5 top-4 rounded-3xl"
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href={"/blog/"}>
                <img
                  src="/clarity_arrow-line.svg"
                  className="xs:hidden sm:hidden"
                />
              </Link>
            </button>
            <div className=" flex absolute flex-col bottom-4 left-0 ">
              <div className="text-white ml-6 font-semibold text-3xl sm:text-xl sm:ml-4 xs:text-sm xs:ml-2">
                {data?.title}
              </div>
              <div className=" ml-6 font-custom-Helvetica text-2xl sm:text-sm sm:ml-4 xs:text-xs xs:ml-2 text-white ">
                By {data?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[53%] xs:h-[65vh] sm:h-[65vh] md:h-[58%] flex justify-center ">
          <div
            className={`w-[65%] xs:w-[90%] sm:w-[90%] md:w-[75%] rounded-3xl xs:rounded-xl sm:rounded-2xl flex px-5 xs:px-4 xs:py-4 sm:px-5 sm:py-6 py-5 flex-col gap-20 text-2xl mt-10 sm:mt-5 xs:mt-5 bg-rgba(255, 255, 255, 0.23) bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 100%)]  ${styles["content-container"]} `}
            style={blogStyle}
          >
            <div
              className=" overflow-auto scroll-hidden md:text-xl xs:text-sm sm:text-xl text-2xl text-white "
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </div>
        <div className="flex xs:hidden sm:hidden align-center justify-center mt-12 mb-0">
          <div
            className="inline-flex px-2  py-4 items-start gap-2 rounded-3xl  shadow-md shadow-slate-100 backdrop-blur-2xl "
            style={styleObj}
          >
            <a href="">
              <img
                className="h-5 w-5 mx-2 shrink-0"
                src="/contactUs.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="h-5 w-5 mx-2 shrink-0"
                src="/fluentPeople.svg"
                alt=""
              />
            </a>
            <a href="">
              <img className="h-5 w-5 mx-2 shrink-0" src="/home.svg" alt="" />
            </a>
            <a href="">
              <img className="h-5 w-5 mx-2 shrink-0" src="/info.svg" alt="" />
            </a>
            <a href="">
              <img
                className="h-5 w-5 mx-2 shrink-0"
                src="/lightBulb.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogView;