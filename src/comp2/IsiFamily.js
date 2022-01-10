import React from "react";

const IsiFamily = (props) => {
  return (
    <tr>
      <td>{props.isi.name}</td>
      <td>{props.isi.age}</td>
      <td>{props.isi.sex}</td>
      <td>
        <button onClick={() => props.hapus(props.idx)}>Delete</button>
      </td>
    </tr>
  );
};

export default IsiFamily;
