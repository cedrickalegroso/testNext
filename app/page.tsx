export default function Home() {
  return (
    <main className="">
      <div
        id="nav"
        className="container mx-auto flex justify-between items-center z-40 sticky top-0 py-8 "
      >
        <div className="text-white font-bold">
          {/* Reference to the logo */}
          <img src="/promises-white.svg" alt="Logo" className="h-8" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              Porfolio
            </a>
          </li>
          <li>
            <a href="#" className="">
              Schedula a Date
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div
        id="header"
        className="container h-screen w-screen mx-auto flex container items-center"
      >
        <div id="heroTexts" className="">

        
          <h1 >Promises</h1>
          <h2>Creative Studio</h2>

          <div className="py-8">
          <p>
            A premier creative space with professional photography services that
            capture the best in you.
          </p>
          </div>

          <div className="py-16">
          <div className="button flex justify-between  py-4 px-8 items-center ">
            <p className="button-text">Find a Date</p>
            <img src="/buttonarrow.svg" alt="" />
          </div>
          </div>
          
         
        </div>

        <img id="photo3" src="header-photo3.png" alt="" />
        <img id="photo2" src="header-photo2.png" alt="" />
        <img id="photo1" src="header-photo1.png" alt="" />

        {/* 
        <div className="container ">
          <div className="header-content ">
            <h1 className="text-8xl">PROMISES</h1>
            <h2 className="text-5xl">Creative Studio</h2>

            <div className="subtag py-8">
              <p>
                A premier creative space with professional photography services
                that capture the best in you.
              </p>
            </div>
          </div>

         


    

        </div> */}
      </div>

      <div id="beyourownstar" className="h-screen w-screen ">
        <h1 className="beyourown"> BE YOUR OWN</h1>
        <h1 className="star"> Star</h1>
        <img src="/girl.png" alt="" />
      </div>
    </main>
  );
}
