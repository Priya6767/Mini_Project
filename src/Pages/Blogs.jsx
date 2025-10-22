import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Nearby Healthcare",
    snippet: "Access to nearby hospitals can save lives in emergencies. Learn why geolocation tools matter.",
    imageUrl: "https://source.unsplash.com/400x250/?hospital,health",
    link: "#",
  },
  {
    id: 2,
    title: "Top 10 Health Tips for Urban Living",
    snippet: "Living in a city comes with health challenges. Here are ten tips to stay healthy and safe.",
    imageUrl: "https://source.unsplash.com/400x250/?health,city",
    link: "#",
  },
  {
    id: 3,
    title: "How to Use Maps to Find Hospitals",
    snippet: "Learn how to find nearby hospitals quickly using maps and geolocation tools.",
    imageUrl: "https://source.unsplash.com/400x250/?map,health",
    link: "#",
  },
];

export const BlogsArticles = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📝 Blogs & Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-3">{post.snippet}</p>
              <a
                href={post.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
