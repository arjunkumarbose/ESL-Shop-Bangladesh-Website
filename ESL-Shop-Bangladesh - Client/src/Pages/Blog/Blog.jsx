import React from "react";
import Banner from "../../Shared/Banner/Banner";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Layering",
      date: "October 15, 2023",
      image:
        "https://img.freepik.com/free-photo/extreme-close-up-skilled-suitmaker-doing-fit-sizing-bespoken-clothing-piece-using-measurement-tape-precise-experienced-couturier-helping-customer-with-custom-made-sartorial-suit_482257-64887.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=sph",
      content:
        "When it comes to dressing for the changing seasons, mastering the art of layering is essential. Discover how to stay stylish and cozy with our expert tips and recommendations.",
      likes: 124,
      comments: 18,
    },
    {
      title: "Sustainable Fashion Choices",
      date: "September 28, 2023",
      image:
        "https://theprodigyofideas.files.wordpress.com/2021/06/sewing-keeps-my-mind-relaxed-cropped-shot-female-tailor-working-new-project-making-clothes-with-sewing-machine-workshop-being-busy-young-designer-making-her-ideas-come-true_176420-14579.jpg",
      content:
        "In a world of fast fashion, making sustainable choices is crucial. Explore the latest eco-friendly trends and how you can contribute to a greener, more fashionable future.",
      likes: 98,
      comments: 12,
    },
    {
      title: "Choosing the Perfect Accessories",
      date: "August 12, 2023",
      image:
        "https://www.hunarcourses.com/blog/wp-content/uploads/2019/01/Title-Image-3.jpg",
      content:
        "Accessories can elevate any outfit. Learn how to select the right pieces to complement your style, from statement necklaces to timeless scarves.",
      likes: 76,
      comments: 9,
    },
    {
      title: "Fall Fashion Must-Haves",
      date: "July 4, 2023",
      image: "https://i.ytimg.com/vi/0ausiScLJT8/maxresdefault.jpg",
      content:
        "As autumn approaches, it's time to revamp your wardrobe with fall essentials. Discover the must-have pieces and color palettes for a fashionable autumn season.",
      likes: 112,
      comments: 14,
    },
    {
      title: "A Guide to Denim Styles",
      date: "June 19, 2023",
      image:
        "https://evilato.com/wp-content/uploads/2021/09/IMG-20210904-WA0033.jpg",
      content:
        "Denim is a timeless classic, but with so many styles available, it can be overwhelming. Our guide breaks down different denim cuts and how to wear them with confidence.",
      likes: 88,
      comments: 10,
    },
    {
      title: "Dressing for Special Occasions",
      date: "May 2, 2023",
      image:
        "https://i.pinimg.com/originals/e1/b0/f2/e1b0f2b2b76d41d1bc732414830d93a5.jpg",
      content:
        "Attending a special event? We've got you covered with outfit ideas and tips on how to make a lasting impression at weddings, parties, and more.",
      likes: 101,
      comments: 13,
    },
  ];

  return (
    <div>
      <Banner title={"Blogs"}></Banner>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <a href="/" aria-label="Article">
                <img
                  src={post.image}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  {post.date}
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{post.title}</p>
                </a>
                <p className="mb-4 text-gray-700">{post.content}</p>
                <div className="flex space-x-4">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">{post.likes} Likes</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">{post.comments} Comments</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
