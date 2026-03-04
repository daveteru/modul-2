import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

interface Blog {
  DESCRIPTION: string;
  created: number;
  ___class: string;
  TITLE: string;
  THUMBNAIL: string | undefined;
  TIME: null;
  CONTENT: string;
  AUTHOR: string;
  ownerId: string | null;
  updated: number;
  objectId: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoad, setIsload] = useState(true)

  console.log(blogs);

  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get("/data/Blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
    finally{
        setIsload(false)
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
      {isLoad && <h2>Loading...</h2>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {blogs.map((blog) => {
          return (
            <div>
              <img
                src={blog.THUMBNAIL}
                alt="thumbnail"
                style={{ height: "150px" }}
              ></img>
              <p>{blog.TITLE}</p>
              <p>{blog.CONTENT}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
