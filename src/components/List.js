import React from 'react';
import '../App.css';
import Model from './Model';
function List(props) {
  const [sortState, setSortState] = React.useState('none');
  const [model, setModel] = React.useState(false);
  const [tempData, setTempdata] = React.useState([]);

  const getData = (profileImageUrl, firstName, lastName, jobTitle, company) => {
    let tempData = [profileImageUrl, firstName, lastName, jobTitle, company];
    setTempdata(item => [
      profileImageUrl,
      firstName,
      lastName,
      jobTitle,
      company,
    ]);
    return setModel(true);
  };
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.firstName < b.firstName ? -1 : 1) },
    descending: {
      method: (a, b) => (a.firstName > b.firstName ? -1 : 1),
    },
  };
  return (
    <div>
      <div>
        <select
          defaultValue={'DEFAULT'}
          onChange={e => setSortState(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      {/* {props.data.sort(sortMethods[sortState].method).map(function (item) {
        <li key={item.id}>{item.firstName}</li>;
      })} */}
      {props.data.sort(sortMethods[sortState].method).map((item, i) => (
        <div className="all-tiles" key={item.id}>
          <div className="tileOuter">
            <div className="tileImg">
              <img
                src={item.profileImageUrl}
                alt=""
                className="image"
                width="30"
                height="30"
              />
            </div>
            <div className="details">
              <h3>
                {item.firstName} {item.lastName}
              </h3>
              <p>{item.jobTitle}</p>
              <p>{item.company}</p>
              <button
                className="btn btn-primary btn-sm btn-outline-primary py-0"
                onClick={() =>
                  getData(
                    item.profileImageUrl,
                    item.firstName,
                    item.lastName,
                    item.jobTitle,
                    item.company
                  )
                }
              >
                Click for pop up
              </button>
            </div>
          </div>
        </div>
      ))}
      {model === true ? (
        <Model
          profileImageUrl={tempData[0]}
          firstName={tempData[1]}
          lastName={tempData[2]}
          jobTitle={tempData[3]}
          company={tempData[4]}
          hide={() => setModel(false)}
        />
      ) : null}
    </div>
  );
}

export default List;

// {
//   props.data.map(function (item) {
//     return (
//       <div className="all-tiles" key={item.id}>
//         <div className="tileOuter">
//           <div className="tileImg">
//             <img
//               src={item.profileImageUrl}
//               alt=""
//               className="image"
//               width="100"
//               height="100"
//             />
//           </div>
//           <div className="details">
//             <h3>
//               {item.firstName} {item.lastName}
//             </h3>
//             <p>{item.jobTitle}</p>
//             <p>{item.company}</p>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }
