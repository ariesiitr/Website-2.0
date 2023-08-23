import React, { useState, useEffect } from "react";
import { BlogApi } from "../../hooks/blogs";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { debounce } from "lodash";

const Blogs = () => {
  const pageSize = 10;
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [results, setResults] = useState([]);
  const { mutate, isLoading } = BlogApi(
    (res) => {
      setResults(res.data.results);
    },
    (err) => {
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
  const debouncedSearch = debounce((query) => {}, 500);
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchText(query);
    debouncedSearch(query);
  };
  useEffect(() => {
    if (searchText.length >= 3 || searchText.length === 0) {
      mutate({currentPage,pageSize,searchText});
    }
  }, [currentPage,searchText]);
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
    background: "rgba(84, 84, 84, 1)",
  };
  

  return (
    <>
      <div
        className="bg bg-cover bg-blur h-screen min-w-screen bg-center "
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="w-full relative h-[80%]  flex justify-center">
          <div
            className="w-[68%] bg-cover bg-center flex items-start pt-10 pl-14 pb-0 pr-14 flex-col gap-5 text-3xl mt-10  "
            style={blogStyle}
  
          >
            <div className="text-white  text-4xl">Blogs</div>
            <div className="flex px-3 py-3 w-[99%] " style={Search}>
              <img src="./ri_search-line.svg" />
              <input
                type="text "
                value={searchText}
                onChange={(e) => {
                  handleSearchInput(e);
                }}
                className=" w-[90%]  ml-3 text-2xl text-white-20  placeholder-white "
                style={{ background: "rgba(84, 84, 84,1)", color: "white" }}
                placeholder="Search"
              />{" "}
            </div>
            <div className=" w-full h-[70%] overflow-y-scroll scroll-smooth scrollbar-thin  flex flex-col ">
              <div className="flex flex-wrap  w-[100%] ">
                {results.map((result) => (
                  <div
                    key={result?.id}
                    className={`result-cont w-1/4 p-3 h-[40%]  relative group ${styles["result-container"]}`}
                  >
                    <Link href={`/blog/${result.id}`}>
                      <img
                        src={result?.image_1}
                        alt=""
                        className="rounded-2xl  w-[100%] transition-transform duration-300 transform hover:scale-105   "
                      />
                      <div className="">
                        <div
                          className="text-white font-medium   "
                          style={{ fontSize: "1.5rem", textAlign: "justify" }}
                        >
                          {result?.title}
                        </div>
                        <div
                          className="text-white "
                          style={{ fontSize: "1.3rem", textAlign: "justify" }}
                        >
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
        {}
        <div className="w-full flex justify-center items-center mt-auto mb-2">
          {currentPage > 1 && (
            <button
              className="mx-2 text-2xl text-white px-2 py-2 rounded hover:text-black-600 disabled:bg-300"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
          )}
          {results.length === pageSize && (
            <button
              className="mx-2 text-2xl text-white  py-2 rounded hover:text-black-600 disabled:bg-300"
              onClick={handleNextPage}
            >
              Next Page
            </button>
          )}
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
export default Blogs;
