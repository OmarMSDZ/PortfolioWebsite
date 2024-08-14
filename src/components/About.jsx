import TypeIt from "typeit-react";

export default function About(){

    
    return(<>
        <div className="aboutpage">
            <div className="container">
                <div className="row d-flex   min-vh-100 justify-content-center align-items-center">
                    <div className="col-sm text-about">
                        {/* <h1 className="typed"> </h1> */}

                        <center>
                    <TypeIt
                     as="h1"
                     options={{
                        strings: [
                            "Hi, I'm <span style='color:green'>Omar Morales</span>, "+
                            "a <span style='color:lightblue'>software developer</span> "+
                            "with a passion for building <span style='color: purple'> scalable</span> " +
                            "and <span style='color: yellow'> impactful </span> digital solutions"
                        ],
                        speed: 5,
                        waitUntilVisible: true,
                     }}/>
                     </center>

                    </div>
                    <div className="col-sm image-about">
                        <center>
                        <img src="/imgabout.png" alt="" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </>)
}