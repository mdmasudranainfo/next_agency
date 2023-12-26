async function getData(){
   const res=await fetch(process.env.BASE_URL+"api/BrandList");
   if(!res.ok){
       throw new Error("BrandList Calling Fail");
   }
   return res.json();
}

const Brands =async () => {
    const data= await getData();
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="mb-16 text-2xl font-heading">
                    Trusted by brands all over the world
                </h3>
                <div className="flex flex-wrap -mx-2">
                    {
                        data.map((item,i)=>{
                          return(
                              <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                                  <div>
                                      <img className="mx-auto h-8" src={item['image']} alt=""/>
                                  </div>
                              </div>
                          )
                        })
                    }
                </div>
            </div>
        </section>

    );
};

export default Brands;