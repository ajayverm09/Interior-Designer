import BlogCard from "./BlogCard";

const UseBlog = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg",
      title: "First-Time Buyer Guide",
      excerpt:
        "Buying your first home can be both exciting and overwhelming. From saving for a down payment to understanding mortgage terms, it’s easy to get lost in the process. Start by assessing your finances and getting pre-approved for a loan. Research neighborhoods, visit open houses, and choose a real estate agent who understands your needs. Don’t rush—take time to understand the paperwork, taxes, and long-term responsibilities of owning a home. With the right preparation, your first home can be a smooth and rewarding investment for your future",
      date: "Aug 07, 2025 | 10:00 AM",
    },
    {
      id: 2,
      image:
        "https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      title: "Mistakes When Selling",
      excerpt:
        "Selling a home involves more than listing and waiting. Common mistakes include overpricing, poor photos, ignoring repairs, and skipping staging. Buyers form opinions quickly—often online—so your home’s first impression matters. Always declutter, fix minor issues, and use high-quality images. Avoid emotional pricing and listen to your agent’s market analysis. Also, make your home available for showings, even on short notice. These small changes can significantly improve your chances of selling faster and at a better price.",
      date: "Aug 06, 2025 | 02:30 PM",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/8815878/pexels-photo-8815878.jpeg",
      title: "Real Estate Trends 2025",
      excerpt:
        "The real estate market is constantly evolving, and 2025 is no exception. Expect to see continued growth in smart homes, remote work-driven relocations, and eco-friendly construction. Virtual tours and AI-powered property matching will become even more common. Suburban and smaller cities will attract more buyers due to affordability and lifestyle preferences. Investors are also turning to fractional ownership and real estate tokens. Staying informed about these trends can help buyers, sellers, and investors make smarter decisions in a tech-driven housing market..",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rent or Buy?",
      excerpt:
        "Deciding whether to rent or buy depends on your financial goals and lifestyle. Renting offers flexibility and lower upfront costs, making it ideal for those who move often or are uncertain about long-term plans. Buying builds equity and can be a smart investment, but it requires a significant commitment and maintenance. Consider your job stability, future plans, and budget. Use rent vs. buy calculators to compare long-term costs. There’s no one-size-fits-all answer—choose what fits your current stage of life.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Home Staging Tips",
      excerpt:
        "Staging your home can increase its appeal and help it sell faster. Start with decluttering—remove personal items to create a clean, inviting space. Add neutral colors, good lighting, and small decor accents. Rearranging furniture to open up rooms can make your home feel bigger. Don’t forget curb appeal—mow the lawn, clean the porch, and add fresh flowers. A well-staged home makes it easier for buyers to imagine themselves living there, often resulting in quicker offers and better sale prices.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 6,
      image:
        "https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
      title: "Best Property Investments",
      excerpt:
        "New to real estate investing? Start with beginner-friendly options. Rental properties offer steady income, especially in high-demand areas. REITs (Real Estate Investment Trusts) are ideal for hands-off investors. Fix-and-flip properties can yield high profits with the right renovations. Vacation rentals are booming thanks to platforms like Airbnb. Lastly, consider multifamily homes—you live in one unit and rent the rest. Each option has its risks and rewards, so research and plan according to your budget and goals.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1631052065964-dd7b96eb7f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1lbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
      title: "Market Cycles Explained",
      excerpt:
        "The real estate market moves in predictable cycles: recovery, expansion, hyper-supply, and recession. Buying during a downturn often means better deals, while selling during a boom may bring higher profits. Understanding these cycles helps you time the market more effectively. Watch indicators like home prices, interest rates, and construction activity. While perfect timing is hard, staying informed helps reduce risks and improves your chances of making profitable decisions—whether you’re buying, selling, or investing..",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc=",
      title: "Why Location Matters",
      excerpt:
        "In real estate, location truly is everything. A great home in a bad area can be hard to sell, while a smaller house in a prime location can soar in value. Proximity to schools, shopping, public transport, and safety all impact property prices. Upcoming developments or city infrastructure projects can also raise future value. Before buying, explore the neighborhood at different times, check crime rates, and research local plans. Good location equals better investment returns and quality of life.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/7144179/pexels-photo-7144179.jpeg",
      title: "Real Estate Taxes 101",
      excerpt:
        "Real estate comes with taxes you should understand before buying or selling. Property taxes vary by location and are based on your home’s value. When you sell, capital gains tax may apply if your home’s value increased. On the upside, mortgage interest and property tax deductions can save money. Investors have even more deductions—repairs, depreciation, and more. Always consult a tax advisor to stay compliant and make the most of tax-saving opportunities in your property journey.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1697319501786-8f5dc64326ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZW4lMjBzdWl0fGVufDB8fDB8fHww",
      title: "Green Homes Today",
      excerpt:
        "Eco-friendly homes are becoming a top choice for buyers. They reduce energy bills, are better for the environment, and often come with government incentives. Features like solar panels, energy-efficient appliances, rainwater harvesting, and insulation make a big difference. Green buildings can also boost property value and attract conscious buyers. Whether building or buying, consider eco upgrades—they’re not just trendy, they’re smart investments for a sustainable future.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1635205383144-402b892efa23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxtZW4lMjBzdWl0fGVufDB8fDB8fHww",
      title: "Avoiding Real Estate Scams",
      excerpt:
        "Real estate scams are increasing—be alert. Fake listings, identity theft, title fraud, and rental scams are common. Always verify a seller’s identity, never send money without paperwork, and avoid deals that seem “too good to be true.” Work with licensed agents, use secure payment methods, and don’t skip legal steps like due diligence or title checks. Protect your money and peace of mind by staying informed and cautious throughout every transaction.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1717730798531-6a62ed43b871?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "What Agents Really Do",
      excerpt:
        "A real estate agent is more than just a tour guide—they’re your legal, financial, and negotiation partner. They help price your property correctly, market it professionally, and handle showings and offers. Agents also manage contracts, paperwork, and legal issues that can be complex and risky. For buyers, they search listings, schedule visits, and represent your interests in negotiations. A skilled agent can save you time, money, and stress—making the entire process smoother and safer.",
      date: "Aug 05, 2025 | 09:45 AM",
    },
  ];

  return (
    <div className="px-4 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            excerpt={blog.excerpt}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default UseBlog;
