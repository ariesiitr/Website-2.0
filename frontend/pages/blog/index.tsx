import React, { useState, useEffect } from "react";
import { BlogApi } from "../../hooks/blogs";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { debounce } from "lodash";

const Blogs = () => {
  const pageSize = 10;
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [results, setResults] = useState<any>([]);
  const { mutate } = BlogApi(
    (res: any) => {
      setResults(res.data.results);
    },
    (err: any) => {
      console.log("Mutation error:", err);
    },
  );
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const debouncedSearch = debounce((query) => { }, 500);
  const handleSearchInput = (e: any) => {

    const query = e.target.value;
    setSearchText(query);
    debouncedSearch(query);
  };
  useEffect(() => {
    if (searchText.length >= 3 || searchText.length === 0) {
      mutate({ currentPage, pageSize, searchText });
    }
  }, [currentPage, searchText]);
  const styleObj = {
    background: "rgba(0, 0, 0, 0.10)",
    borderRadius: "1.5rem",
    boxShadow:
      "2px 2px 2px 0px rgba(255, 255, 255, 0.05) inset, -1px -1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.10);",
  };
  const blogStyle = {
    borderRadius: "18px",
    backgroundImage: "url('/lib.jpeg')",
  };
  const Search = {
    borderRadius: "12px",
    background: "rgb(124,115,105)",
  };


  return (
    <>
      <div
        className="h-screen bg-center bg-cover bg bg-blur min-w-screen "
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="flex items-center xs:h-[8vh] sm:h-[8vh] justify-center ">
          <div className="flex justify-between md:hidden sm:w-[90vw] xs:w-[90%]  ml:hidden ">
            <button
              className="flex items-center justify-center w-8 h-8 mt-3 ml-3 rounded-full "
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href="">

                <img
                  src="/clarity_arrow-line.svg"
                  className="md:hidden ml:hidden"
                />
              </Link>
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 mt-3 mr-3 rounded-full "
              style={{ background: "rgba(255, 255, 255, 0.20)" }}
            >
              <Link href="">

                <img src="/charm.svg" className="md:hidden ml:hidden" />
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full relative h-[80%] sm:h-[88%] flex justify-center">
          <div
            className="w-[68%] md:w-[72%] xs:w-[90%] sm:w-[90%] bg-cover bg-center flex items-start pt-10 pl-14 pb-0 pr-14 xs:pl-3 sm:pl-4 md:pr-6 xs:pt-7 sm:pt-7 md:pt-10 xs:pr-4 sm:pr-5 md:pl-6 flex-col gap-5 sm:gap-3 xs:gap-2 text-3xl mt-10  "
            style={blogStyle}
          >
            <div className="text-4xl text-white sm:text-3xl xs:text-xl">
              Blogs
            </div>
            <div className="flex px-3 py-3 w-[100%]" style={Search}>
              <img src="./ri_search-line.svg" />
              <input
                value={searchText}
                onChange={(e) => {
                  handleSearchInput(e);
                }}
                className=" w-[98%] ml-3 text-2xl sm:text-xl xs:text-sm text-white-20 placeholder-white"
                style={{ background: "rgb(124,115,105)", color: "white" }}
                placeholder="Search"
              />{" "}
            </div>
            <div className="w-full h-[70%] overflow-y-scroll scroll-hidden scroll-smooth scrollbar-thin  flex flex-col ">
              <div className="flex flex-wrap  w-[100%] ">
                {results.map((result: any) => (
                  <div
                    key={result?.id}
                    className={`result-cont w-1/4 md:w-1/3 sm:w-1/2 xs:w-[100%] p-3 h-[40%]  relative group ${styles["result-container"]}`}
                  >
                    <Link href={`/blog/${result.id}`}>
                      <img
                        src={result?.image_1}
                        alt=""
                        className="rounded-2xl w-[100%] transition-transform duration-300 transform hover:scale-105"
                      />
                      <div className="">
                        <div className="text-2xl font-medium text-white md:text-xl sm:text-xl xs:text-sm">
                          {result?.title}
                        </div>
                        <div className="text-xl text-white sm:text-sm xs:text-xs ">
                          by {result?.name}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        { }
        <div className="flex items-center justify-center w-full mt-auto mb-2">
          {currentPage > 1 && (
            <button
              className="px-2 py-2 mx-2 text-2xl text-white rounded hover:text-black-600 disabled:bg-300"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
          )}
          {results.length === pageSize && (
            <button
              className="py-2 mx-2 text-2xl text-white rounded hover:text-black-600 disabled:bg-300"
              onClick={handleNextPage}
            >
              Next Page
            </button>
          )}
        </div>

        <div className="flex justify-center mt-12 mb-0 xs:hidden sm:hidden align-center">
          <div
            className="inline-flex items-start gap-2 px-2 py-4 shadow-md rounded-3xl shadow-slate-100 backdrop-blur-2xl"
            style={styleObj}
          >
            <a href="">
              <img
                className="w-5 h-5 mx-2 shrink-0"
                src="/contactUs.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-5 h-5 mx-2 shrink-0"
                src="/fluentPeople.svg"
                alt=""
              />
            </a>
            <a href="">
              <img className="w-5 h-5 mx-2 shrink-0" src="/home.svg" alt="" />
            </a>
            <a href="">
              <img className="w-5 h-5 mx-2 shrink-0" src="/info.svg" alt="" />
            </a>
            <a href="">
              <img
                className="w-5 h-5 mx-2 shrink-0"
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
export default Blogs;
