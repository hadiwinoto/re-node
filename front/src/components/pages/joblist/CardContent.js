
import { Link } from "react-router-dom";
const Content = ({ data }) => {
  return (
    <>
    {data &&
      data.map((job, idxjob) => (
        <div key={idxjob} className="card card-container">
                <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.company} - {job.type}</h6>
                <span>Location  : {job.location}</span><br></br>
                <span>Crated at : {job.created_at}</span>
                <p className="card-text"></p>
                <Link to={'/joblist/detail/'+job.id} className="card-link">Detail</Link>
              </div>
        </div>
    ))}
    </>
    
  );
};

export default Content;