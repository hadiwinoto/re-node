import React, { useState, useEffect } from "react";
import ApiService from "../../../services/joblist.services";
import Content from "./CardContent";
import Pagination from "./Pagination";
import Breadcrumb from "./BreadCrumbs";

function IndexJoblist() {
  const breadcrumb = [
    {
      'label': 'Jobs List',
      'link': '/jobslist',
      'class': 'breadcrumb-item'
    },
  ];
  const [joblist, setJoblist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [query, setQuery] = useState("");
 

  const search = (joblist) => {
    return joblist.filter((item) => item.description.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query))
  };
  
  const findAllJobs = async () => {
    await ApiService.findAll(query).then(response => {
      setJoblist(response.data);
    }).catch((error) => {
      console.log(error.message)
    });
  }

  useEffect(() => {
    findAllJobs();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = joblist.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <Breadcrumb data={breadcrumb}></Breadcrumb>
    <div className="col-md-12">
      <div className="card card-container">
        <div className="row">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label>Description</label>
                <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} name="description" className="form-control" placeholder="" />
              </div>
              <div className="col-auto">
                <label>Location</label>
                <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} name="location" className="form-control" placeholder="" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <span>
        <h4>Jobs List</h4>
      </span>
      <Content data={search(currentPosts)}  ></Content>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={joblist.length}
          paginate={paginate}
        />
    </div>
    </>
  );
};

export default IndexJoblist;
