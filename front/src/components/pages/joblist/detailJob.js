import React, { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../../services/joblist.services";
import Breadcrumb from "./BreadCrumbs";

function IndexJoblist(){
  const breadcrumb = [
    {
      'label': 'Jobs List',
      'link': '/joblist',
      'class': 'breadcrumb-item'
    },
    {
      'label': 'Detail',
      'link': '/joblist/detail',
      'class': 'breadcrumb-item active'
    },
  ];
  let params = useParams();
  const id = params.id;
  const [detail, setDetail] = useState({});

 console.log(id);
  const findDetail = () => {
    ApiService.findByid(id).then(response => {
      setDetail(response.data);
    }).catch((error) => {
        console.log(error.message)
    });
};

  useEffect(() => {
    findDetail();
  }, []);


  return (
    <>
    <Breadcrumb data={breadcrumb}></Breadcrumb>
    <div className="col-md-12">
      <div className="card card-container">
        <div className="row">
            <span>{detail.type} / {detail.location}</span>
            <h3>{detail.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: detail.description }}></div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default IndexJoblist;
