async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}

const AllProject = async () => {

    const data = await getData();

    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"/>
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"/>
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-green-600 font-bold">
                            Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Our Projects
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                        <a target="_blank" href={item['live']}>
                                            <img className="h-80 w-full mx-auto object-cover rounded"
                                                 src={item['image']}
                                                 alt=""/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"/>
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10"/>
                </svg>
            </div>
        </section>
    );
};
export default AllProject;