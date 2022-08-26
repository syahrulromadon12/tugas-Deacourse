import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import Loaders from '../Utilities/loaders';
import Modals from "../Utilities/modals";
import "./popup.posts.css";


const Popup = () => {
  // {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // }

  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => {
          setDatas(result.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>
        Fetching posts API  
      </h3>
      <p className="limit">
        Currently showing {limit}
      </p>
      {datas.map((data, i) => {
        return (
          <div key={i} className="">
            <Modals
              title={data.title}
              description={data.body}
              id={data.id}
              userID={data.userId}
            />
            {/* <div class="card d-flex gap-3">
              <div class="card-body">
                <p>{data.title}</p>
                <hr/>
                <Button class="btn btn-primary" onClick={Modals} >Show Details</Button>
              </div>
            </div> */}
            <br/>
          </div>
          
          ); 
      })}
      <ButtonGroup className="d-flex justify-content-center align-items-center m-2">
        {limit > 1 ? (
          <button className="btn btn-danger" onClick={() => handleLimit("-")}>
            Delet
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-primary" onClick={() => handleLimit("+")}>
          Add
        </button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Popup;