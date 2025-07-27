function UserInfo() {
    const users=[{
        id:1,
        Name:"latif",
        Age:20,
        DateofBirth:"2003-01-01",
        Email: "latif100@gmail.com",
        Address:"London",
        Image:"img/img1.jpeg",
    },
    {
         id:2,
        Name:"Alex",
        Age:22,
        DateofBirth:"2004-02-01",
        Email: "Alex@gmail.com",
        Address:"UK",
        Image:"img/img2.jpeg",  
    },
    {
         id:3,
        Name:"Paul",
        Age:25,
        DateofBirth:"2005-05-07",
        Email: "Paul@gmail.com",
        Address:"America",
        Image:"img/img3.jpeg",  
    },
    {   
         id:4,
        Name:"Luke",
        Age:26,
        DateofBirth:"1999-01-01",
        Email: "Luke@gmail.com",
        Address:"India",
        Image:"img/img4.jpeg",  
    },

];
   
  return (
       <>
      
    <div className="user">
      <h1>User Details</h1>
      <div className="usercard">
        {users.map((user)=>(
            <div className="user-card" key={user.id}>
            <img className="userimage"src={user.Image} alt="user-image"/>
            <h3>Name: {user.Name}</h3>
            <h3>Age: {user.Age}</h3>
            <h3>Date of Birth: {user.DateofBirth}</h3>
            <h3>Email: {user.Email}</h3>
            <h3>Address: {user.Address}</h3>
           
            </div>
        ))}
        
      </div>
    </div>
    </>
  );
}
export default UserInfo;