import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SingleBlogApi } from "../../hooks/blogs";
import styles from "../../styles/Blog.module.css";
import { BASE_IMG_URL } from "@/utils/network";

const BlogView = () => {
  const router = useRouter();
  type BlogData = {
    id: string;
    title: string;
    Web_image: string;
    name: string;
    content: string;
  };

  const { id } = router.query;
  const [data, setData] = useState<BlogData | null>(null);

  const { mutate, isLoading } = SingleBlogApi(
    (res) => {
      console.log(res);
      setData(res.data);
    },
    (err) => {
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
    background: "rgba(255, 255, 255, 0.23)",
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
        <div className="w-full h-[30%] flex justify-center">
          <div
            className={` w-[65%] rounded-3xl relative bg-cover text-3xl mt-10 ${styles["image-container"]} `}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <button
              className=" absolute ml-5 top-4 rounded-3xl"
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href={"/blog/"}>
                {" "}
                <img src="/clarity_arrow-line.svg" />
              </Link>
            </button>
            <div className=" flex absolute flex-col bottom-4 left-0 ">
              <div className="text-white ml-6  text-3xl">{data?.title}</div>
              <div
                className=" ml-6 font-custom-Helvetica text-2xl text-white "
               
              >
                By {data?.name}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[53%] flex justify-center">
          <div
            className={`w-[65%]  rounded-3xl flex px-5 py-5 flex-col gap-20 text-2xl mt-10 bg-rgba(255, 255, 255, 0.23) bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.10) 100%)]  ${styles["content-container"]} `}
            style={blogStyle}
          >
            <div
              className="overflow-auto  text-white "
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
        </div>
        <div className="flex  align-center justify-center mt-12 mb-0">
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
