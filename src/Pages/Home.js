import React from 'react';
function Home() {
    const contents=[{
        id:1,
        title:"Web Design", 
        description:"Learn WebSite Design",
        
    },
    {
      id:2,
        title:"Web Development",
        description:"Learn WebSite Development",
    },
     {
      id:2,
        title:"Digital Marketing",
        description:"Learn Digital Marketing",
    }
]
  return (
    <>
    <div className="home">
        <div className="home-content">
            <h1>Welcome to the Home Page</h1>
             <p>This is my Home Page.</p>

        </div>
        
      
    </div>
      <h1>Digital Courses</h1>
        <div className="content">
          
             <div className="card-content">
                {contents.map((contents)=>(
                    <div className="card" key={contents.id}>
                        <h2>{contents.title}</h2>
                        <p>{contents.description}</p>
                    </div>
                ))}
             </div>
        </div>
        </>

  );
}
export default Home;