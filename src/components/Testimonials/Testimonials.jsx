import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "David Beckham",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Beckswimbledon.jpg/100px-Beckswimbledon.jpg",
    },
    {
        id: 2,
        name: "Nicola Adams",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nicola_Adams_-_Our_Greatest_Team_Parade.jpg/220px-Nicola_Adams_-_Our_Greatest_Team_Parade.jpg",
    },
    {
        id: 3,
        name: "Simon Andrews",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Simon_Andrews_No_17_2009_BSB.jpg/220px-Simon_Andrews_No_17_2009_BSB.jpg",
    },
    {
        id: 5,
        name: "MS Dhoni",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "data:image/webp;base64,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bWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiBwaG90b3Nob3A6Q3JlZGl0PSJJQ0MgdmlhIEdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjExNTE0MzQyNTEiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5TaGF1biBCb3R0ZXJpbGwtSUNDPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5MT05ET04sIEVOR0xBTkQgLSBNQVkgMjQ6IE1TIERob25pIG9mIEluZGlhIHBvc2VzIGZvciBhIHBvcnRyYWl0IHByaW9yIHRvIHRoZSBJQ0MgQ3JpY2tldCBXb3JsZCBDdXAgMjAxOSBhdCB0aGUgUGxhemEgSG90ZWwgb24gTWF5IDI0LCAyMDE5IGluIExvbmRvbiwgRW5nbGFuZC4gKFBob3RvIGJ5IFNoYXVuIEJvdHRlcmlsbC1JQ0MvSUNDIHZpYSBHZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CgA=",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolorem repudiandae eaque</p>
                </div>
                {/* testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className="my-6">
                                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <div className="mb-4">
                                        <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
