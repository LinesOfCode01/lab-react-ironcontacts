const Table = () => {
  contacts.map((eachContact) => {
    return (
      <tr>
        <td>
          <img src={eachContact.pictureUrl}></img>
        </td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
      </tr>
    );
  });
};
