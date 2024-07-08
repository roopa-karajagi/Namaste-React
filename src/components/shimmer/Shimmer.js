import './shimmer.css'

export const Shimmer = () =>{
    return (
      <section className='text-gray-500 p-9 m-6 mb-0'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row  flex-wrap'>
          {
            Array(12).fill("").map((item , index) => (
              <div className='p-2 md:w-1/4' key={index}>
              <div className="h-full border-2 border-gray-200 shadow-lg overflow-hidden">
              <div className="lg:h-48 h-32 animate-pulse bg-slate-400 md:h-36 w-full object-cover object-center"></div>
                    <div className="p-2">
                    <h2 className="bg-slate-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                    <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-slate-500"></h1>
                    <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-slate-500'></p>
                    <p className='leading-relaxed mb-3 w-4/5 h-3 animate-pulse bg-slate-500'></p>
                      </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    )
}


export const MainShimmer = () => {
    return (
    <>
    <section className="text-gray-500 body-font">
      <div className="container px-5  mx-auto ">
        <div className="flex flex-col lg:flex-row flex-wrap ">
          {Array(12)
            .fill("")
            .map((e, index) => (
              <div className="p-6 md:w-1/3">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                  <div className="lg:h-48 h-32 animate-pulse bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                  <div className="p-6">
                    <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                    <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                    {/* <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p> */}
                    <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                    <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  </>
    )
}