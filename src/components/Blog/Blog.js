import React, { useState } from 'react';
import { Container, Card, Button } from "react-bootstrap";
import './Blogs.css';

const blogs = [
  {
    id: "1",
    category: 'BAR & DRINKS',
    title: 'The Best Old Fashioned Glasses, According to Wine Experts',
    desc: 'Traditionally made with a muddled sugar cube, a dash of bitters, and whiskey, the Old Fashioned is a pillar in the world of classic drinks — as popular today as it was when it was first developed in the 19th century. "The Old Fashioned embodies the definition of a cocktail: spirit, bitters, sugar, and water," says Lynn House, the spirits and cocktail educator for Heaven Hill Distillery and host of Elijah Craig s Old Fashioned Week. It is also important to get the cocktail glassware right. The Old Fashioned glass, also known as a lowball or rocks glass, typically has a wide brim and a base that is weighty enough to stand up to muddling sugar as you build your whiskey cocktail. "Nothing beats the standard rocks glass," says David Vitale, founder of Melbourne-made Starward Whisky. "I like it flat-bottomed and lightweight, large enough for a single crystal-clear ice cube."Still, bar and spirit industry professionals have a range of opinions on what makes the best Old Fashioned glass, including material, cleaning, and how you plan to use the glasses. From sleek and sculptural to classic crystal with vintage charm, read on for the best Old Fashioned glasses.',
    url: 'img/blog1.png',
    author: 'Regan Stephens',
    date: 'February 8, 2024'
  },
  {
    id: "2",
    category: 'WINE MAKERS',
    title: 'This Land Is My Land: Krista Scruggs Is One of THE Most Intriguing American Winemakers',
    desc: 'Christopher Columbus landed in the Americas, he brought over this fukú: a curse. Anyone who is brown, really any marginalized person in this country, carries that curse. In 2019, I embarked on a path to owning 56 acres of land in Vermont where I am, for the first time, growing my own grapes to turn into wine. I am a Black queer woman doing the work of my ancestors here in America. My having access to land—I do not know what more of a counterspell there is to the fukú of colonialism. Everything within the umbrella of ZAFA Wines symbolizes anti-colonialism. It is the opposite of Christopher Columbus to leave something better than when you found it. As a farmer, that means improving the soil, using methods where I give back rather than take away',
    url: 'img/blog2.png',
    author: 'Krista Scruggs',
    date: 'March 22, 2021'
  }, 
  {
    id: "3",
    category: 'BEST WINES',
    title: '19 of the Best Sustainably Farmed Wines to Drink Now',
    desc: 'There is no question that grape growers and winemakers — and wine lovers, for that matter — lean toward concern for the environment. Sustainable viticulture, despite the fuzzy nature of that term, is almost de rigueur; the number of wineries growing grapes organically increases every year; and more rigorous approaches like biodynamic and regenerative agriculture are more popular than ever, too. The problem for wine buyers is that wine labels are utterly baffling in this regard. The U.S., E.U., Australia, and practically everywhere else all have different regulations about what "organic" means; there are dozens of different certifications and programs for sustainability and environmental friendliness of one kind or another; and, of course, there are categories like "clean" wine, which are more marketing plays than specific winemaking philosophies.',
    url: 'img/blog3.png',
    author: 'Ray Isle',
    date: 'November 7, 2023'
  },
  {
    id: "4",
    category: 'WINE NEWS',
    title: 'Meet the Wooly Weeders, the Adorable Heroes of California Wine',
    desc: 'Meet the "wooly weeders," a roving band of sheep that helps California wineries with eco-friendly farming, landscaping, grounds maintenance, and fire protection. In early spring, they mow, weed, and fertilize the vineyards, which saves grape-growers time and money while also reducing the operations environmental footprint. In early summer, sheep eat the vines young leaves, clearing the way for more sunlight and air to reach the grapes, which helps prevent mold and mildew while promoting even ripening and deep flavor. They create firebreaks to help protect properties ahead of wildfire season and munch on invasive plants in fallow fields, giving native species more breathing room. As an added benefit, the sheep also bring pure, unadulterated joy to vineyard staffers and customers. "Year one, we were over the moon with happiness, Oh my gosh, this is so fun to watch, said Nielsen. Now we are in year three, and it still feels like it is a holiday when the sheep arrive. The wooly weeders belong to Don and Carolyn Watson, who split their time between California and Colorado. After his best friend died of cancer in the mid-1980s, Don Watson, now 63, re-evaluated his priorities and his lifes purpose. He quit his job as an accountant in San Francisco, and the young couple moved to Australia and New Zealand for a year, where they learned sheep husbandry.When they returned, they settled in Napa Valley and began building up their own herd. Initially, the Watsons supplied open-range, milk-fed lamb to Northern California restaurants, but a chance occurrence soon added an unexpected revenue stream.',
    url: 'img/blog4.png',
    author: 'Sarah Kuta',
    date: 'March 23, 2023'
  },
  {
    id: "5",
    category: 'BURGUNDY WINE REGION',
    title: 'Why You Should Drink Burgundy Wine',
    desc: 'If you are a fan of wine that expresses the place it is from with clarity and elegance, then the reds and whites of Burgundy should be at the top of your list. Whether it Is through Pinot Noir or Chardonnay, Burgundy is a place whose magic reveals itself in rewarding, fascinating ways. In the north of the region, the crisp, mineral wines of Chablis utilize the Chardonnay grape variety to express the character of the land through wines of coiled energy and often briny acidity. Oak is far less common here than many people are used to with Chardonnay. In the Côte de Beaune, on the other hand, the great wines of Meursault and Montrachet allow Chardonnay to take on a richer, denser character. There, the nature of the terroir and aging in oak barrels lends it the kind of richness, plusher textures, and spice notes that evolve beautifully over the years. Pinot Noir has a similar affinity for telling the story of the land through the liquid in the glass. Whether it Is the elegance of wines from the village of Volnay or the lingering power of the Richebourg vineyard, red Burgundy wines have the ability to express the full flavor, aroma, and texture spectrum. They also are very useful at the table, since both reds and whites in Burgundy can be light and energetic or denser and more propulsive, focused primarily on the fruit or influenced by a greater sense of spice, flowers, and savoriness. As such, there is bound to be a Burgundy wine to pair with most anything you serve, whether it is a hearty meal or something lighter.On top of that, red and white Burgundy are among the most collectible wines anywhere, and while prices of the best of them have skyrocketed in recent years, there are still values to be found in less-famous parts of Burgundy, like Fixin, Santenay, and other locales.',
    url: 'img/blog5.png',
    author: 'Brian Freedman',
    date: 'June 24, 2022'
  },
  {
    id: "6",
    category: 'RIESLING',
    title: 'Rieslings for Every Budget',
    desc: 'Of all the more familiar grape varieties, Riesling is among the most misunderstood. Too often, it’s perceived as producing a monolithically sweet white wine, but that’s not the case at all — nothing about Riesling necessitates that it be sweet. And to be honest, some of the most profound Rieslings are both sweet and fresh, with enough acidity to counterbalance the residual sugar and provide everything a bottle needs to stand the test of time in a properly cooled cellar or wine fridge. Not too long ago, for example, I tasted (okay, drank…) the 2006 J.J. Christoffel Erben Ürziger Würzgarten Riesling Spätlese, and it was astoundingly delicious, reminiscent of grilled pineapples and petrol (a classic note, believe it or not, in many high-quality Rieslings), or eating a perfectly ripe and honey-drizzled mango outside just after a rainstorm. There also happen to be some truly spectacular dry Rieslings from Australia, Alsace, and Austria to Oregon, Napa Valley, and beyond. The best of them are uniquely able to express the character of the land in which they grew, age easily for years, and accompany a wide range of food: Riesling is famously versatile at the table, and many of them work brilliantly alongside both rich foods as well as spicy ones. It’s often described as a secret weapon for pairing with food. The following dozen are easily accessible and absolutely delicious.',
    url: 'img/blog6.png',
    author: 'Brian Freedman',
    date: 'October 18, 2022'
  },
  {
    id: "7",
    category: 'US WINES',
    title: 'Inside One Winery s Quest for Sulfite-Free Wine — What It Means and Why It Matters',
    desc: 'It is one the world s most important elements, and it is practically ubiquitous in wine. You know it from the "contains sulfites" warning that must, by law, appear on any bottle of wine containing 10mg per liter or more of the stuff. Some wine drinkers blame it for headaches, but added to most wine in either a liquid or powder form to help snuff out bacteria or microbes that could lead to spoiling, it is actually the only ingredient in wine that producers are required to name. It is sulfur dioxide (SO2), and it is facing a reckoning. More and more, winemakers are experimenting with low-sulfite or sulfite-free wine, which tends to be categorized as "natural" or "low-intervention," because of the lack of additives. But the exclusion of some or all sulfites must not be confused with the broader umbrella terms. As Master of Wine Isabelle Legeron, author of Natural Wine: An Introduction to Organic and Biodynamic Wines Made Naturally, and one of the foremost experts on natural wines, points out, "Natural wines are (and have always been) wines that are farmed using organic and biodynamic practices and made with the most minimal intervention possible, including being sulfite-free. But she cautions that while organic, biodynamic, low-intervention, and natural are all buzzwords in the sulfite-free world, they all mean different things and are not interchangeable."',
    url: 'img/blog7.png',
    author: 'Jonathan Cristaldi',
    date: 'September 22, 2023'
  },
  {
    id: "8",
    category: 'NATURAL WINES',
    title: 'Yes, You Should Be Cellaring Your Natural Wines',
    desc: 'With its relatively youthful following and easygoing energy, it is not hard to view natural wine as fundamentally at odds with the wine collector culture of yore. According to 2023 surveys, nearly 90% of wine purchased in the U.S. is consumed within 24 hours of purchasing, and 95%, within the week — which is to say, while natural wine thrives, cellaring, once fundamental to wine culture, has become something of a lost art. Antiquated as the whole collector shtick may seem (picture Dennis Quaid blowing dust from his wedding year vintage in The Parent Trap, or James Bond waxing poetic about Dom Perignon ‘53 in Goldfinder), perhaps it is a more tragic loss than we realize. Aging wine is a necessary exercise if you really want to get under the skin of something. You can not really know the whole story of a bottle if you have never aged it,” says Isabelle Legeron, France s first female Master of Wine, and founder of wildly popular international natural wine fair, RAW WINE. Imagine if you abandoned all of your friendships after the first year, when you would begun having deeper, more intense, revelatory conversations. That would mean you would hardly known those people at all, no? The same goes for a great bottle of wine.” ',
    url: 'img/blog8.png',
    author: 'Eliza Dumais',
    date: 'April 20, 2023'
  },
  {
    id: "9",
    category: 'SINGLE WINEYARD',
    title: 'How to Find Terroir-Driven Wines',
    desc: 'Earlier this year, Champagne Telmont released a wine with GPS coordinates on the label. Its full name is Lieux-Dits Damery Parcelle Sous Adrien 2012 Extra Brut, and that language conveys a highly specific sense of place regarding where the Pinot Meunier grapes for this fascinating, delicious Champagne were grown. On the other end of the labeling spectrum, I recently tasted two terrific vintages of Leviathan, a well-respected red blend by renowned winemaker Andy Erickson labeled, simply, as coming from California. Both the 2021 and 2014 vintages were excellent, the former full of bright fruit and aging potential, the latter mature, velvety, and still with plenty of energy in reserve…something that, in many ways, runs counter to wisdom about what to expect of wines with large geographical areas noted on the label. Erickson — who is one of the great translators of specific terroirs into iconic wines — has found a way to bridge the gap with Leviathan. “The beauty of single vineyard wines is that it really is a pure expression of that little slice of terroir from each specific vintage,” he notes. “The challenge is that, depending on the vineyard, it can be a very limited quantity of wine. The larger the appellation, the less specific but the more consistent the expression year to year.” With Leviathan, Erickson and his team look at the entirety of California as a single appellation, rather than a patchwork of smaller ones. It’s an important distinction: He and his team are looking to individual standout sites for this wine and bringing them together with excellent vision and harmony, while other wines labeled as coming from entire states are often more likely to be crafted from bulk juice. “We have vineyards in some amazing locations, and by seeing them as all being in the same appellation, we can knit together a beautiful blend and share the wine with more people,” he says. “I love the concept.',
    url: 'img/blog9.png',
    author: 'Brian Freedman',
    date: 'January 17, 2024'
  },

]


function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function Blog() {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleCardClick = (blogId) => {
    setExpandedBlogId((prevId) => (prevId === blogId ? null : blogId));
  };

  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
        Unveiling Wine Wonders <strong className="purple">Exploring, Tasting, and Sharing</strong>
      </h1>
      <Container>
        <div className="blog-cards">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className={`blog-card ${blog.id === expandedBlogId ? 'expanded' : ''}`}
              onClick={() => handleCardClick(blog.id)}
            >
              <Card.Img variant="top" src={blog.url} />
              <Card.Body>
                <Card.Subtitle>{blog.category}</Card.Subtitle>
                <br></br>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="text-muted">
                  {blog.id === expandedBlogId ? blog.desc : truncateText(blog.desc, 180)}
                </Card.Text>
                <Card.Text className="text-muted">By: {blog.author}</Card.Text>
                <Card.Text className="text-muted">Date: {blog.date}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Blog;