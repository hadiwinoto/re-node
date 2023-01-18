import React from "react";
import { Link } from "react-router-dom";
function Breadcrumb(props) {
    return (
        <div style={{background: "white"}} className="container-fluid row mb-1 mt-0">
            <div className="page-title-box d-sm-flex align-items-center justify-content-left">
                <div className="page-title-right">
                    <ol style={{background: "white"}} className="breadcrumb m-0" >
                        {props.data && props.data.map((dta, idx) => (
                            <li key={idx} className={dta.class}>
                                <Link to={dta.link}> {dta.label}</Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;