import beast from "./beast.png";
import mersal from "./mersal.png";
import bigil from "./bigil.png";
import sarkar from "./sarkar.png";
import kaththi from "./kaththi.png";
import thuppaki from "./thuppaki.png"
import { FaStar } from "react-icons/fa";






function Main({side}){

    
    const sidebar = [
        {
            name:"Bigil",
            genre: "An Action Drama",
            img:beast
        },
        {
            name:"Bigil",
            genre: "An Action Drama",
            img:sarkar
        },
        {
            name:"Bigil",
            genre: "An Action Drama",
            img:mersal
        },
        {
            name:"Bigil",
            genre: "An Action Drama",
            img:bigil
        }
    
    
    
    
    
    ]


    const Block1 = [
        {
            name:"Bigil",
            background:bigil,
            year:2023
        },
        {
            name:"Mersal",
            background:mersal,
            year:2023
        },
        {
            name:"Beast",
            background:beast,
            year:2023
        },
        {
            name:"Kaththi",
            background:kaththi,
            year:2023
        },
        {
            name:"Sarkar",
            background:sarkar,
            year:2023
        },
        {
            name:"Thuppaki",
            background:thuppaki,
            year:2023
        },
        
    ]



    const Block2 = [
        {
            name:"Bigil",
            background:bigil,
            year:2023
        },
        {
            name:"Mersal",
            background:mersal,
            year:2023
        },
        {
            name:"Beast",
            background:beast,
            year:2023
        },
        {
            name:"Kaththi",
            background:kaththi,
            year:2023
        },
        {
            name:"Sarkar",
            background:sarkar,
            year:2023
        },
        {
            name:"Thuppaki",
            background:thuppaki,
            year:2023
        }
    ]
    













    return(
        <div className="main">
            <div className={side ? "sidebar-s" : "sidebar"}>
                <div className="side-top">
                    <button className="s-button">Action</button>
                    
                    <button className="s-button">Comey</button>
                    <button className="s-button">Sci-Fi</button>
                    <button className="s-button">Thriller</button>
                    <button className="s-button">Fantasy</button>
                    <button className="s-button">Drama</button>
                    
                    <button className="s-button">Crime</button>
                    <button className="s-button">History</button>

                </div>

                <div className="side-bottom">
                    <div className="main-1-p">Top Rated</div>
                    
                    <div className="side-bottom-block">
                        <Block sidebar={sidebar}/>
                    </div>
                </div>
                

            </div>





            <div className={side ? "main-cont-s" : "main-cont"}>
                <div className="banner">
                    <div className="ban-img-1">
                        <div className="ban-div">
                            <p className="ban-p">LEO THE BEAST</p>
                            <button className="ban-button">watch</button>
                        </div>
                    </div> 
                    <div className="ban-img-2">
                        <div className="ban-div">
                            <p className="ban-p">SPIDER MAN  NO WAY HOME</p>
                            <button className="ban-button">watch</button>
                        </div>
                    </div>


                </div>
                <div className="main-1">
                    <div className="main-1-p">Recommended</div>
                    <div className="main-1-blocks">
                        {
                        
                            Block1.map((data) => {
                                return(
                                    <div  style={{backgroundImage:`url(${data.background})`}} className="main-1-block"> 
                                        <div className="main-block-p">
                                            <div>{data.name}<br></br><span className="year">{data.year}</span></div>
                                            <div><span className="star"><FaStar/></span></div>
                                        </div>
                                        
                                    </div> 
                                )
                            })
                            
                        }
                        
                        
                    </div>
                    

                </div>


                <div className="main-1">
                    <div className="main-1-p">Latest movies</div>
                    <div className="main-1-blocks">


                        {
                        
                            Block2.map((data) => {
                                return(
                                    <div style={{backgroundImage:`url(${data.background})`}} className="main-1-block"> 
                                        <div  className="main-block-p">
                                            <div>{data.name}<br></br><span className="year">{data.year}</span></div>
                                            <div><span className="star"><FaStar/></span></div>
                                        </div>
                                    </div> 
                                )
                            })
                            
                        }
                        
                        
                    </div>
                    

                </div>
                

            </div>

            

        </div>
    )

}



export default Main;



function Block({sidebar}){
    
        return(
            sidebar.map((sidebar) => {
                return(
                <div className="side-blk">
                    <div className="blk-img">
                        <img className="img" src={sidebar.img}  alt="img" />

                    </div>
                    <div className="blk-det">
                        <p className="blk-p">{sidebar.name}</p>
                        <p className="blk-p">{sidebar.genre}</p>


                    </div>

                </div>
                )
                }
            )
        )

}
















