async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}

const Testimonial = async () => {
    const data = await getData();
    return (
        <div>
            <section>
                <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                        <div
                            className="flex flex-wrap justify-center lg:justify-center items-center text-center lg:text-center">
                            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                                <span className="text-green-600 font-bold">
                                    Dolor sit amet consectutar
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                    Testimonials
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex">
                        <div className="flex flex-wrap max-w-6xl px-2 mx-auto">

                            {
                                data.map((item,i)=>{
                                    return(
                                        <div key={i} className="mb-4 w-full lg:w-1/3 px-3">
                                            <div className="p-8 bg-white rounded shadow text-center">
                                                <div className="bg-no-repeat bg-left-top"
                                                     style={{backgroundImage: 'url("atis-assets/elements/quote-grey.svg")'}}>
                                                    <p className="mb-8 text-gray-500 leading-loose">
                                                        {item['msg']}
                                                    </p>
                                                    <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                                                         src={item['image']}
                                                         alt=""/>
                                                    <h4 className="mb-1 text-2xl font-bold font-heading">
                                                        {item['name']}
                                                    </h4>
                                                    <p className="text-gray-500">{item['designation']}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Testimonial;