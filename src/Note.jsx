function Note(props) {
  return (
    <div className="note">
          <h1>{props.name}</h1>
          <p>{props.myPara}</p>
          <img src={props.img} alt={props.alt} width="150px" height="150px"/>
    </div>
  );
}

export default Note;
