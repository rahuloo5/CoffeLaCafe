    import React ,{useState}from 'react'
    import Img from 'gatsby-image'
    import Title from './Global/Title'
    const getCategories = items => {
        let tempItems = items.map(item => {
          return item.node.category;
        });
        let tempCategories = new Set(tempItems);
        let categories = Array.from(tempCategories);
        categories = ["all", ...categories];
        return categories;
      };


function Menu({items}) {
const[item , SetItem] = useState({items:items.edges,
                                      coffeitem : items.edges,
                                      categories:getCategories(items.edges)
                                    })

                                   
                                  const handleItems = (category) => {

                                    
                                        let tempItems = [...item.items];
                                        
                                        if (category === "all") {
                            
                                          SetItem({...item ,coffeitem : tempItems });
                                          
                                        } else {
                                          let items = tempItems.filter(({ node }) => node.category === category);   
                                    
                                     SetItem({...item,coffeitem: items });
                                     
                                        }
                                      };

    return (
        <>
        {item.items.length>0?(
          <div style={{backgroundColor:"#F8F9F9 "}}>
        <section className="menu py-5">
          <div className="container">
            <Title title="Menu" />
            <div className="row mb-5">
              <div className="col-10  mx-auto text-center">
                {item.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-green text-capitalize m-3"
                      style={{outline:"none", color:"black",fontWeight:'bold', border:"1px black solid" , zIndex:"1" , boxShadow:"4px 4px 4px" }}
                      onClick={(e)=>{
                    handleItems(category)}
                      }
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="row">
              {item.coffeitem.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-2 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.images.fixed} />
                    </div>

                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="text-yellow mb-0">₹{node.price}</h6>
                      </div>

                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section> 
        </div>) 
        : 
         (<section className="menu py-5">
                <div className="container">
                  <Title title="best of our menu" />
                  <div className="row">
                    <div className="col-10 col-6 mx-auto text-center text-capitalize">
                      <h1>there are no items to display</h1>
                    </div>
                  </div>
                </div>
              </section>)
            }</>)
        }

export default Menu
