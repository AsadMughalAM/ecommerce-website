import { Product } from '../types';
import hoddies1 from '../assets/hoddies/1.jpg'
import hoddies2 from '../assets/hoddies/2.jpg'
import hoddies3 from '../assets/hoddies/3.jpg'
import hoddies4 from '../assets/hoddies/4.jpg'
import hoddies5 from '../assets/hoddies/5.jpg'
import hoddies6 from '../assets/hoddies/6.jpg'
import hoddies7 from '../assets/hoddies/7.jpg'
import hoddies8 from '../assets/hoddies/8.jpg'
import hoddies9 from '../assets/hoddies/9.jpg'
import hoddies10 from '../assets/hoddies/10.jpg'
import tracksuit1 from '../assets/tracksuits/1.jpg'
import tracksuit2 from '../assets/tracksuits/2.jpg'
import tracksuit3 from '../assets/tracksuits/3.jpg'
import tracksuit4 from '../assets/tracksuits/4.jpg'
import tracksuit5 from '../assets/tracksuits/5.jpg'
import tracksuit6 from '../assets/tracksuits/6.jpg'
import tracksuit7 from '../assets/tracksuits/7.jpg'
import tracksuit8 from '../assets/tracksuits/8.jpg'
import tracksuit9 from '../assets/tracksuits/9.jpg'
import tracksuit10 from '../assets/tracksuits/10.jpg'
import sweatshirt1 from '../assets/sweatshirts/1.jpg'
import sweatshirt2 from '../assets/sweatshirts/2.jpg'
import sweatshirt3 from '../assets/sweatshirts/3.jpg'
import sweatshirt4 from '../assets/sweatshirts/4.jpg'
import sweatshirt5 from '../assets/sweatshirts/5.jpg'
import sweatshirt6 from '../assets/sweatshirts/6.jpg'
import sweatshirt7 from '../assets/sweatshirts/7.jpg'
import sweatshirt8 from '../assets/sweatshirts/8.jpg'
import sweatshirt9 from '../assets/sweatshirts/9.jpg'
import sweatshirt10 from '../assets/sweatshirts/10.jpg'
import jackets1 from '../assets/jackets/1.jpg'
import jackets2 from '../assets/jackets/2.jpg'
import jackets3 from '../assets/jackets/3.jpg'
import jackets4 from '../assets/jackets/4.jpg'
import jackets5 from '../assets/jackets/5.jpg'
import jackets6 from '../assets/jackets/6.jpg'
import jackets7 from '../assets/jackets/7.jpg'
import jackets8 from '../assets/jackets/8.jpg'
import jackets9 from '../assets/jackets/9.jpg'
import jackets10 from '../assets/jackets/10.jpg'
import vest1 from '../assets/vests/1.jpg'
import vest2 from '../assets/vests/2.jpg'
import vest3 from '../assets/vests/3.png'
import vest4 from '../assets/vests/4.jpg'
import vest5 from '../assets/vests/5.jpg'
import vest6 from '../assets/vests/6.jpg'
import vest7 from '../assets/vests/7.jpg'
import vest8 from '../assets/vests/8.jpg'
import short1 from '../assets/shorts/1.jpeg'
import short2 from '../assets/shorts/2.jpeg'
import short3 from '../assets/shorts/3.jpeg'
import short4 from '../assets/shorts/4.png'
import short5 from '../assets/shorts/5.jpg'
import short6 from '../assets/shorts/6.jpg'
import short7 from '../assets/shorts/7.jpeg'
import short8 from '../assets/shorts/8.jpeg'
import short9 from '../assets/shorts/9.jpeg'
import short10 from '../assets/shorts/10.png'
import sock1 from '../assets/socks/1.jpg'
import sock2 from '../assets/socks/2.jpg'
import sock3 from '../assets/socks/3.jpg'
import sock4 from '../assets/socks/4.jpg'
import sock5 from '../assets/socks/5.jpg'
import sock6 from '../assets/socks/6.jpg'
import sock7 from '../assets/socks/7.jpg'
import sock8 from '../assets/socks/8.jpg'
import sock9 from '../assets/socks/9.jpg'
import sock10 from '../assets/socks/10.jpg'
import swimsuit1 from '../assets/swimsuits/1.jpg'
import swimsuit2 from '../assets/swimsuits/2.jpg'
import swimsuit3 from '../assets/swimsuits/3.jpg'
import swimsuit4 from '../assets/swimsuits/4.jpg'
import swimsuit5 from '../assets/swimsuits/5.jpg'
import swimsuit6 from '../assets/swimsuits/6.jpg'
import swimsuit7 from '../assets/swimsuits/7.jpg'
import swimsuit8 from '../assets/swimsuits/8.jpg'
import swimsuit9 from '../assets/swimsuits/9.jpg'
import swimsuit10 from '../assets/swimsuits/10.jpg'
import shirt1 from '../assets/t-shirts/1.jpeg'
import shirt2 from '../assets/t-shirts/2.jpg'
import shirt3 from '../assets/t-shirts/3.jpeg'
import shirt4 from '../assets/t-shirts/4.jpg'
import shirt5 from '../assets/t-shirts/5.jpg'
import shirt6 from '../assets/t-shirts/6.jpg'
import shirt7 from '../assets/t-shirts/7.jpg'
import shirt8 from '../assets/t-shirts/8.jpg'
import shirt9 from '../assets/t-shirts/9.jpg'
import shirt10 from '../assets/t-shirts/10.jpg'
import pant1 from '../assets/pants/1.jpg'
import pant2 from '../assets/pants/2.jpg'
import pant3 from '../assets/pants/3.jpg'
import pant4 from '../assets/pants/4.jpg'
import pant5 from '../assets/pants/5.jpg'
import pant6 from '../assets/pants/14.jpeg'
import pant7 from '../assets/pants/7.jpg'
import pant8 from '../assets/pants/11.png'
import pant9 from '../assets/pants/12.png'
import pant10 from '../assets/pants/10.png'
import sweatpant1 from '../assets/sweatpants/1.jpg'
import sweatpant2 from '../assets/sweatpants/2.jpeg'
import sweatpant3 from '../assets/sweatpants/3.jpg'
import sweatpant4 from '../assets/sweatpants/4.jpeg'
import sweatpant5 from '../assets/sweatpants/5.jpeg'
import sweatpant6 from '../assets/sweatpants/6.jpeg'
import sweatpant7 from '../assets/sweatpants/7.jpg'
import sweatpant8 from '../assets/sweatpants/8.jpg'
import sweatpant9 from '../assets/sweatpants/9.jpeg'
import sweatpant10 from '../assets/sweatpants/10.jpg'
import footwear1 from '../assets/footwears/1.jpeg'
import footwear2 from '../assets/footwears/2.jpeg'
import cap1 from '../assets/caps/1.jpg'
import cap2 from '../assets/caps/2.jpg'








export const products: Product[] = [
  // Hoodies
  {
    id: '1',
    name: 'Urban Explorer Hoodie',
    description: 'A modern hoodie with a sleek fit, perfect for city adventures.',
    category: 'hoodies',
    image: hoddies1,
    longDescription: 'The Urban Explorer Hoodie is crafted from a premium cotton blend, offering both warmth and breathability. Its minimalist design and adjustable drawstring hood make it ideal for layering in any season. Machine washable and available in multiple colors, this hoodie is your go-to for both style and comfort.'
  },
  {
    id: '2',
    name: 'Classic Comfort Hoodie',
    description: 'Timeless comfort with a soft fleece lining and kangaroo pocket.',
    category: 'hoodies',
    image: hoddies2,
    longDescription: 'Experience unmatched coziness with the Classic Comfort Hoodie. Featuring a plush fleece interior, ribbed cuffs, and a spacious front pocket, it\'s designed for everyday wear. Whether you\'re lounging at home or heading out, this hoodie keeps you warm and stylish.'
  },
  {
    id: '3',
    name: 'Pullover Hoodie',
    description: 'Heavy-weight pullover hoodie with fleece lining for extra warmth.',
    category: 'hoodies',
    image: hoddies3,
    longDescription: 'This heavyweight pullover hoodie features a premium fleece lining that provides exceptional warmth without bulk. The classic fit and durable construction make it perfect for outdoor activities or casual wear.',
  },
  {
    id: '4',
    name: 'Sporty Hoodie',
    description: 'Athletic-inspired hoodie designed for active lifestyles.',
    category: 'hoodies',
    image: hoddies4,
    longDescription: 'Engineered for performance and style, this sporty hoodie features moisture-wicking fabric and a streamlined fit. Perfect for workouts or casual wear.',
  },
  {
    id: '5',
    name: 'Urban Hoodie',
    description: 'Trendy urban hoodie with contemporary street style.',
    category: 'hoodies',
    image: hoddies5,
    longDescription: 'This urban-inspired hoodie combines street style with premium comfort. Features include a modern cut, quality materials, and attention to detail.',
  },
  {
    id: '6',
    name: 'Minimal Hoodie',
    description: 'Clean, minimal design hoodie for everyday versatility.',
    category: 'hoodies',
    image:hoddies6,
    longDescription: 'Embrace simplicity with this minimal hoodie. Clean lines, premium materials, and versatile styling make it a wardrobe essential.',
  },
  {
    id: '7',
    name: 'Graphic Hoodie',
    description: 'Eye-catching hoodie with unique graphic design elements.',
    category: 'hoodies',
    image: hoddies7,
    longDescription: 'Stand out with this graphic hoodie featuring original artwork and premium printing techniques. Comfortable fit with artistic flair.',
  },
  {
    id: '8',
    name: 'Fleece Hoodie',
    description: 'Ultra-soft fleece hoodie for maximum comfort.',
    category: 'hoodies',
    image: hoddies8,
    longDescription: 'Indulge in luxury comfort with this fleece hoodie. Super soft materials and cozy fit make it perfect for relaxation.',
  },
  {
    id: '9',
    name: 'Cropped Hoodie',
    description: 'Modern cropped hoodie with a fashionable silhouette.',
    category: 'hoodies',
    image: hoddies9,
    longDescription: 'This cropped hoodie offers a contemporary twist on the classic design. Perfect for layering and creating modern looks.',
  },
  {
    id: '10',
    name: 'Eco Hoodie',
    description: 'Sustainable hoodie made from eco-friendly materials.',
    category: 'hoodies',
    image: hoddies10,
    longDescription: 'Made from sustainable materials, this eco-friendly hoodie proves that style and environmental consciousness can go hand in hand.',
  },

  // Sweatpants
  {
    id: 'sp1',
    name: 'Essential Sweatpants',
    description: 'Soft, relaxed-fit sweatpants for daily comfort.',
    category: 'sweatpants',
    image: sweatpant1,
    longDescription: 'Our Essential Sweatpants are made from a premium cotton-poly blend, featuring an elastic waistband and adjustable drawstring. Perfect for workouts or lounging, these sweatpants offer both style and comfort.'
  },
  {
    id: 'sp2',
    name: 'Athletic Tapered Sweatpants',
    description: 'Tapered sweatpants with zip pockets and sporty style.',
    category: 'sweatpants',
    image: sweatpant2,
    longDescription: 'Designed for movement, these sweatpants feature a modern tapered fit, zippered pockets, and moisture-wicking fabric. Ideal for active days or casual outings.'
  },
  {
  id: 'sp3',
  name: 'Fleece-Lined Jogger Sweatpants',
  description: 'Cozy fleece interior for cold weather.',
  category: 'sweatpants',
  image: sweatpant3,
  longDescription: 'Stay warm with these fleece-lined sweatpants. Featuring a slim fit, cuffed ankles, and a soft brushed interior for ultimate comfort.'
},
{
  id: 'sp4',
  name: 'Vintage Wash Sweatpants',
  description: 'Retro-inspired wash for a laid-back vibe.',
  category: 'sweatpants',
  image: sweatpant4,
  longDescription: 'These vintage wash sweatpants offer a worn-in look with a soft feel, perfect for weekend lounging or casual wear.'
},
{
  id: 'sp5',
  name: 'Slim Fit Lounge Sweatpants',
  description: 'Tailored comfort for at-home wear.',
  category: 'sweatpants',
  image: sweatpant5,
  longDescription: 'Crafted from a lightweight, stretchy fabric, these slim fit lounge sweatpants combine comfort with a clean silhouette.'
},
{
  id: 'sp6',
  name: 'Drop-Crotch Street Sweatpants',
  description: 'Bold streetwear design with extra room.',
  category: 'sweatpants',
  image: sweatpant6,
  longDescription: 'These drop-crotch sweatpants offer a relaxed fit with an edgy look, perfect for making a statement in streetwear fashion.'
},
{
  id: 'sp7',
  name: 'Eco-Friendly Recycled Sweatpants',
  description: 'Made from sustainable materials.',
  category: 'sweatpants',
  image: sweatpant7,
  longDescription: 'Feel good and look great in these sweatpants made from recycled fabrics. Sustainable style without sacrificing comfort.'
},
{
  id: 'sp8',
  name: 'Tech-Knit Performance Sweatpants',
  description: 'High-tech fabric for all-day wear.',
  category: 'sweatpants',
  image: sweatpant8,
  longDescription: 'Built with technical knit fabric, these sweatpants offer flexibility, breathability, and sleek style for an active lifestyle.'
},
{
  id: 'sp9',
  name: 'Contrast Panel Sweatpants',
  description: 'Bold panels for a modern look.',
  category: 'sweatpants',
  image: sweatpant9,
  longDescription: 'Add flair to your fit with these sweatpants featuring contrast color-block panels and an elastic drawstring waistband.'
},
{
  id: 'sp10',
  name: 'Oversized Cozy Fit Sweatpants',
  description: 'Roomy and ultra-soft for lounging.',
  category: 'sweatpants',
  image: sweatpant10,
  longDescription: 'Experience next-level relaxation in these oversized sweatpants. Ideal for lounging or layering in cooler weather.'
},



// Jackets
{
  id: 'j1',
  name: 'All-Weather Jacket',
  description: 'Water-resistant jacket for year-round protection.',
  category: 'jackets',
  image: jackets1,
  longDescription: 'Stay dry and comfortable with our All-Weather Jacket. Features a lightweight shell, adjustable hood, and breathable lining for versatile wear.'
},
{
  id: 'j2',
  name: 'Classic Denim Jacket',
  description: 'Timeless denim jacket with a modern fit.',
  category: 'jackets',
  image: jackets2,
  longDescription: 'A wardrobe staple, this denim jacket offers a tailored fit, durable construction, and classic styling. Perfect for layering in any season.'
},
{
  id: 'j3',
  name: 'Fleece Lined Utility Jacket',
  description: 'Rugged and warm utility jacket with fleece lining.',
  category: 'jackets',
  image: jackets3,
  longDescription: 'Built for adventure, this utility jacket features fleece lining, multiple pockets, and a durable water-repellent finish.'
},
{
  id: 'j4',
  name: 'Lightweight Windbreaker',
  description: 'Packable and lightweight windbreaker jacket.',
  category: 'jackets',
  image: jackets4,
  longDescription: 'Designed for on-the-go weather changes, this windbreaker is water-repellent, breathable, and easy to pack into its own pocket.'
},
{
  id: 'j5',
  name: 'Bomber Jacket',
  description: 'Stylish bomber jacket with ribbed cuffs.',
  category: 'jackets',
  image: jackets5,
  longDescription: 'This bomber features a sleek silhouette, soft inner lining, and bold details for a confident look.'
},
{
  id: 'j6',
  name: 'Quilted Puffer Jacket',
  description: 'Insulated puffer jacket for cold-weather comfort.',
  category: 'jackets',
  image: jackets6,
  longDescription: 'The quilted design provides warmth without bulk. Features elastic cuffs and a high collar for extra protection.'
},
{
  id: 'j7',
  name: 'Suede Trucker Jacket',
  description: 'Luxurious suede finish on a classic trucker style.',
  category: 'jackets',
  image: jackets7,
  longDescription: 'Crafted from soft-touch suede, this trucker jacket combines heritage style with premium materials.'
},
{
  id: 'j8',
  name: 'Hooded Parka Jacket',
  description: 'Extended-length parka with faux fur trim.',
  category: 'jackets',
  image: jackets8,
  longDescription: 'Perfect for deep winter, this parka offers thermal insulation, a faux-fur lined hood, and windproof outer shell.'
},
{
  id: 'j9',
  name: 'Varsity Letterman Jacket',
  description: 'Retro varsity jacket with contrast sleeves.',
  category: 'jackets',
  image: jackets9,
  longDescription: 'This old-school favorite gets a modern refresh. Snap-button front, ribbed hem and cuffs, and sporty styling.'
},
{
  id: 'j10',
  name: 'Tech Softshell Jacket',
  description: 'Breathable and stretchable softshell for mobility.',
  category: 'jackets',
  image: jackets10,
  longDescription: 'Made with performance in mind, this jacket is ideal for active days with 4-way stretch and wind resistance.'
},

// Tracksuits
{
  id: 'ts1',
  name: 'Performance Tracksuit',
  description: 'Breathable tracksuit for sports and leisure.',
  category: 'tracksuits',
  image: tracksuit1,
  longDescription: 'Our Performance Tracksuit is made from lightweight, moisture-wicking fabric. The jacket and pants combo is perfect for warm-ups, workouts, or casual wear.'
},
{
  id: 'ts2',
  name: 'Retro Stripe Tracksuit',
  description: 'Tracksuit with vintage-inspired stripes and modern comfort.',
  category: 'tracksuits',
  image: tracksuit2,
  longDescription: 'This tracksuit features bold stripes, a zip-up jacket, and tapered pants. Soft, stretchy, and stylish for any occasion.'
},
{
  id: 'ts3',
  name: 'Urban Black Tracksuit',
  description: 'All-black minimal design perfect for urban style.',
  category: 'tracksuits',
  image: tracksuit3,
  longDescription: 'Designed for comfort and style, this urban tracksuit features a clean black aesthetic with breathable mesh lining.'
},
{
  id: 'ts4',
  name: 'Color Block Tracksuit',
  description: 'Stylish color-blocked design for bold personalities.',
  category: 'tracksuits',
  image: tracksuit4,
  longDescription: 'A vibrant color block pattern on smooth fabric. It features ribbed cuffs and elastic waistband for a secure fit.'
},
{
  id: 'ts5',
  name: 'Slim Fit Navy Tracksuit',
  description: 'Sleek and tailored for a modern look.',
  category: 'tracksuits',
  image: tracksuit5,
  longDescription: 'This slim-fit navy tracksuit offers a sharp silhouette while maintaining top-tier comfort with its stretchable material.'
},
{
  id: 'ts6',
  name: 'Athletic Red Tracksuit',
  description: 'Bold red set for standout athletes.',
  category: 'tracksuits',
  image: tracksuit6,
  longDescription: 'Feel confident and perform your best with this athletic red tracksuit. Lightweight and fast-drying.'
},
{
  id: 'ts7',
  name: 'Olive Green Jogger Tracksuit',
  description: 'Comfort meets military-inspired style.',
  category: 'tracksuits',
  image: tracksuit7,
  longDescription: 'Crafted for both training and lounging, this olive green jogger set features a snug fit and soft interior.'
},
{
  id: 'ts8',
  name: 'Classic White Tracksuit',
  description: 'Clean, fresh, and timeless in all white.',
  category: 'tracksuits',
  image: tracksuit8,
  longDescription: 'White from head to toe, this classic tracksuit brings an elevated streetwear vibe. Easy to pair and effortless to wear.'
},
{
  id: 'ts9',
  name: 'Blue Gradient Tracksuit',
  description: 'Eye-catching gradient blend in blue tones.',
  category: 'tracksuits',
  image: tracksuit9,
  longDescription: 'A modern gradient design transitions from navy to sky blue. Perfect for expressive, on-the-go individuals.'
},
{
  id: 'ts10',
  name: 'Beige Comfy Tracksuit',
  description: 'Cozy beige set ideal for lounging or light activity.',
  category: 'tracksuits',
  image: tracksuit10,
  longDescription: 'This beige tracksuit is ultra-soft and perfect for relaxed days. Ribbed edges and a relaxed fit ensure comfort.'
},


// Sweatshirts
  {
    id: 'ss1',
    name: 'Cozy Crewneck Sweatshirt',
    description: 'Classic crewneck with ultra-soft fleece.',
    category: 'sweatshirts',
    image: sweatshirt1,
    longDescription: 'Our Cozy Crewneck Sweatshirt is made from plush fleece, offering warmth and comfort. Ribbed cuffs and hem ensure a snug fit.'
  },
  {
    id: 'ss2',
    name: 'Oversized Pullover Sweatshirt',
    description: 'Relaxed-fit pullover for a laid-back look.',
    category: 'sweatshirts',
    image: sweatshirt2,
    longDescription: 'This oversized pullover is perfect for layering. Features a drop-shoulder design and soft, brushed interior.'
  },
  {
    id: 'ss3',
    name: 'Graphic Print Sweatshirt',
    description: 'Statement sweatshirt with bold graphic artwork.',
    category: 'sweatshirts',
    image: sweatshirt3,
    longDescription: 'Stand out in our Graphic Print Sweatshirt. It combines comfort with creativity, featuring eco-friendly inks on durable cotton fabric.'
  },
  {
    id: 'ss4',
    name: 'Fleece Quarter-Zip Sweatshirt',
    description: 'Sporty quarter-zip with cozy fleece lining.',
    category: 'sweatshirts',
    image: sweatshirt4,
    longDescription: 'A go-to for chilly days, this fleece-lined quarter-zip sweatshirt offers warmth without bulk. Great for active or casual wear.'
  },
  {
    id: 'ss5',
    name: 'Tie-Dye Crewneck Sweatshirt',
    description: 'Trendy tie-dye pattern for a retro vibe.',
    category: 'sweatshirts',
    image: sweatshirt5,
    longDescription: 'Hand-dyed for uniqueness, each Tie-Dye Crewneck Sweatshirt is a one-of-a-kind. Made from breathable cotton for year-round wear.'
  },
  {
    id: 'ss6',
    name: 'Mock Neck Sweatshirt',
    description: 'Elevated sweatshirt with a modern mock neck.',
    category: 'sweatshirts',
    image: sweatshirt6,
    longDescription: 'Our Mock Neck Sweatshirt blends structure and softness. A sleek choice for styling with joggers or denim.'
  },
  {
    id: 'ss7',
    name: 'Minimal Logo Sweatshirt',
    description: 'Clean design with a subtle logo detail.',
    category: 'sweatshirts',
    image: sweatshirt7,
    longDescription: 'This minimal sweatshirt features a discreet logo and a soft interior lining. A wardrobe essential that pairs with anything.'
  },
  {
    id: 'ss8',
    name: 'Zip-Up Hoodie Sweatshirt',
    description: 'Versatile hoodie with a full zip front.',
    category: 'sweatshirts',
    image: sweatshirt8,
    longDescription: 'The Zip-Up Hoodie is made for convenience and comfort, featuring kangaroo pockets and rib-knit trim for a great fit.'
  },
  {
    id: 'ss9',
    name: 'Vintage Wash Sweatshirt',
    description: 'Washed-out tone for a lived-in look.',
    category: 'sweatshirts',
    image: sweatshirt9,
    longDescription: 'This sweatshirt is pre-washed for a soft, broken-in feel. Slight fading adds character and vintage appeal.'
  },
  {
    id: 'ss10',
    name: 'Cropped Sweatshirt',
    description: 'Fashion-forward cropped design.',
    category: 'sweatshirts',
    image: sweatshirt10,
    longDescription: 'Stay on-trend with our Cropped Sweatshirt. Made from premium fabric and finished with a raw edge hem for modern flair.'
  },


  // Footwear
  {
    id: 'fw1',
    name: 'Lightweight Running Shoes',
    description: 'Breathable running shoes for all-day comfort.',
    category: 'footwear',
    image: footwear1, 
    longDescription: 'Engineered for performance, these running shoes feature a cushioned sole, mesh upper, and lightweight design.'
  },
  {
    id: 'fw2',
    name: 'Classic White Sneakers',
    description: 'Timeless sneakers with a clean, versatile look.',
    category: 'footwear',
    image: footwear2,
    longDescription: 'These sneakers offer a minimalist design, durable rubber sole, and comfortable fit for everyday wear.'
  },

  // Vests
  {
    id: 'v1',
    name: 'Puffer Vest',
    description: 'Insulated puffer vest for extra warmth.',
    category: 'vests',
    image: vest1,
    longDescription: 'Stay warm without the bulk. This puffer vest features lightweight insulation and a water-resistant shell.'
  },
  {
    id: 'v2',
    name: 'Classic Denim Vest',
    description: 'Denim vest with a rugged, timeless look.',
    category: 'vests',
    image: vest2,
    longDescription: 'A versatile layering piece, this denim vest is durable and stylish for any season.'
  },
  {
  id: 'v3',
  name: 'Quilted Utility Vest',
  description: 'Functional quilted vest with multiple pockets.',
  category: 'vests',
  image: vest3,
  longDescription: 'Perfect for layering and outdoor use, this quilted utility vest offers warmth and convenience with its functional pocket design.'
},
{
  id: 'v4',
  name: 'Fleece-Lined Vest',
  description: 'Soft fleece interior for added comfort.',
  category: 'vests',
  image: vest4,
  longDescription: 'This vest combines a wind-resistant outer shell with a fleece lining, making it ideal for chilly days.'
},
{
  id: 'v5',
  name: 'Reversible Puffer Vest',
  description: 'Two-in-one reversible style.',
  category: 'vests',
  image: vest5,
  longDescription: 'Switch up your style with this reversible puffer vest. Lightweight insulation and two distinct looks in one garment.'
},
{
  id: 'v6',
  name: 'Athletic Training Vest',
  description: 'Breathable vest designed for workouts.',
  category: 'vests',
  image: vest6,
  longDescription: 'Engineered for performance, this vest offers stretch fabric and mesh ventilation for active wear.'
},
{
  id: 'v7',
  name: 'Wool Blend Vest',
  description: 'Classic wool vest with a tailored fit.',
  category: 'vests',
  image: vest7,
  longDescription: 'This wool blend vest provides sophistication and warmth, great for both formal and casual settings.'
},
{
  id: 'v8',
  name: 'Tactical Vest',
  description: 'Durable vest with modular attachments.',
  category: 'vests',
  image: vest8,
  longDescription: 'A rugged tactical vest built for utility, featuring adjustable straps and MOLLE webbing for custom load-outs.'
},




  // T-Shirts
  {
    id: 'tsh1',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable t-shirt for everyday wear.',
    category: 't-shirts',
    image: shirt1,
    longDescription: 'Made from 100% premium cotton, this t-shirt offers a classic fit and all-day comfort.'
  },
  {
    id: 'tsh2',
    name: 'Graphic Print T-Shirt',
    description: 'T-shirt with bold, eye-catching graphics.',
    category: 't-shirts',
    image: shirt2,
    longDescription: 'Express your style with this graphic print tee. Features a soft feel and durable print.'
  },
{
  id: 'tsh3',
  name: 'Oversized Streetwear Tee',
  description: 'Loose-fit tee with urban style.',
  category: 't-shirts',
  image: shirt3,
  longDescription: 'This oversized t-shirt delivers comfort and a trendy streetwear look. Great for casual layering.'
},
{
  id: 'tsh4',
  name: 'Slim Fit V-Neck Tee',
  description: 'V-neck style with a modern slim cut.',
  category: 't-shirts',
  image: shirt4,
  longDescription: 'A sleek alternative to the classic crew, this V-neck tee hugs the body with a soft stretch fit.'
},
{
  id: 'tsh5',
  name: 'Performance Dry-Fit Tee',
  description: 'Moisture-wicking for active days.',
  category: 't-shirts',
  image: shirt5,
  longDescription: 'Ideal for workouts or warm weather, this dry-fit tee features breathable fabric that keeps you cool and dry.'
},
{
  id: 'tsh6',
  name: 'Tie-Dye T-Shirt',
  description: 'Colorful, retro tie-dye design.',
  category: 't-shirts',
  image: shirt6,
  longDescription: 'Bring vintage vibes with this soft tie-dye tee, handmade with unique color swirls and cotton comfort.'
},
{
  id: 'tsh7',
  name: 'Pocket T-Shirt',
  description: 'Classic tee with chest pocket detail.',
  category: 't-shirts',
  image: shirt7,
  longDescription: 'Functional and stylish, this pocket tee offers simplicity with a handy front pocket and sturdy stitching.'
},
{
  id: 'tsh8',
  name: 'Longline Curved Hem Tee',
  description: 'Extended length with curved hem.',
  category: 't-shirts',
  image: shirt8,
  longDescription: 'A modern twist on the basic tee. The longline design and curved hem offer an elevated casual look.'
},
{
  id: 'tsh9',
  name: 'Henley Neck T-Shirt',
  description: '3-button Henley neckline for a rugged style.',
  category: 't-shirts',
  image: shirt9,
  longDescription: 'A comfortable option with a touch of edge. This Henley tee is great for layering or wearing solo.'
},
{
  id: 'tsh10',
  name: 'Ringer T-Shirt',
  description: 'Retro tee with contrasting collar and cuffs.',
  category: 't-shirts',
  image: shirt10,
  longDescription: 'Channel classic athletic vibes with this ringer tee, made from soft fabric and vintage-style details.'
},

  // Pants
  {
    id: 'p1',
    name: 'Slim Fit Chinos',
    description: 'Modern chinos with a tailored fit.',
    category: 'pants',
    image: pant1,
    longDescription: 'These slim fit chinos are made from stretch cotton for comfort and mobility. Perfect for work or weekends.'
  },
  {
    id: 'p2',
    name: 'Classic Dress Pants',
    description: 'Professional dress pants for formal occasions.',
    category: 'pants',
    image: pant2,
    longDescription: 'Elegant dress pants with a classic cut and premium fabric. Perfect for business or formal events.'
  },
{
  id: 'p3',
  name: 'Jogger Pants',
  description: 'Casual joggers with elastic cuffs.',
  category: 'pants',
  image: pant3,
  longDescription: 'These jogger pants feature a relaxed fit, drawstring waist, and cuffed ankles—ideal for lounging or streetwear.'
},
{
  id: 'p4',
  name: 'Cargo Pants',
  description: 'Utility-style pants with multiple pockets.',
  category: 'pants',
  image: pant4,
  longDescription: 'Stay prepared with these rugged cargo pants, featuring spacious pockets and durable fabric for active wear.'
},
{
  id: 'p5',
  name: 'Wide Leg Trousers',
  description: 'Flowy trousers with a relaxed silhouette.',
  category: 'pants',
  image: pant5,
  longDescription: 'Combining comfort and elegance, these wide-leg trousers are perfect for work or smart-casual outings.'
},
{
  id: 'p6',
  name: 'Techwear Tactical Pants',
  description: 'Futuristic pants with adjustable straps.',
  category: 'pants',
  image: pant6,
  longDescription: 'Built for function and fashion, these techwear pants feature multiple zippers, pockets, and adjustable leg straps.'
},
{
  id: 'p7',
  name: 'Corduroy Pants',
  description: 'Textured corduroy for a vintage feel.',
  category: 'pants',
  image: pant7,
  longDescription: 'Add retro charm to your look with these corduroy pants. Soft, warm, and ideal for cooler weather.'
},
{
  id: 'p8',
  name: 'Pleated Trousers',
  description: 'Smart trousers with front pleats.',
  category: 'pants',
  image: pant8,
  longDescription: 'Timeless and tailored, these pleated trousers offer a polished silhouette for formal or business wear.'
},
{
  id: 'p9',
  name: 'Linen Drawstring Pants',
  description: 'Lightweight pants with a relaxed fit.',
  category: 'pants',
  image: pant9,
  longDescription: 'Perfect for warmer days, these breathable linen pants feature a drawstring waist and breezy cut.'
},
{
  id: 'p10',
  name: 'Fleece Sweatpants',
  description: 'Warm and cozy for lounging.',
  category: 'pants',
  image: pant10,
  longDescription: 'Stay snug in these fleece-lined sweatpants, complete with a relaxed fit and elastic waistband.'
},

 

  // Shorts
{
  id: 'sh3',
  name: 'Denim Cutoff Shorts',
  description: 'Classic cutoffs with a rugged finish.',
  category: 'shorts',
  image: short1,
  longDescription: 'A warm-weather staple, these denim cutoff shorts offer a timeless look with a frayed hem and durable construction.'
},
{
  id: 'sh4',
  name: 'Cargo Utility Shorts',
  description: 'Functional shorts with extra pockets.',
  category: 'shorts',
  image: short2,
  longDescription: 'Perfect for outdoor adventures, these cargo shorts provide storage and comfort with a sturdy cotton build.'
},
{
  id: 'sh5',
  name: 'Chino Shorts',
  description: 'Smart-casual shorts with a polished look.',
  category: 'shorts',
  image: short3,
  longDescription: 'Tailored for versatility, these chino shorts are great for both casual outings and semi-formal wear.'
},
{
  id: 'sh6',
  name: 'Swim Trunks',
  description: 'Water-friendly shorts with quick-dry fabric.',
  category: 'shorts',
  image: short4,
  longDescription: 'Dive into comfort with these stylish swim trunks. Featuring mesh lining and a drawstring waist for a secure fit.'
},
{
  id: 'sh7',
  name: 'Bike Shorts',
  description: 'Stretchy shorts built for mobility.',
  category: 'shorts',
  image: short5,
  longDescription: 'Ideal for cycling or gym sessions, these bike shorts offer a snug fit and flexible fabric for freedom of movement.'
},
{
  id: 'sh8',
  name: 'Lounge Shorts',
  description: 'Ultra-soft shorts for relaxing at home.',
  category: 'shorts',
  image: short6,
  longDescription: 'Experience maximum comfort with these lounge shorts, made from plush fabric and designed for laid-back days.'
},
{
  id: 'sh9',
  name: 'Linen Blend Shorts',
  description: 'Breathable linen blend for hot days.',
  category: 'shorts',
  image: short7,
  longDescription: 'Stay breezy and stylish with these lightweight linen blend shorts, perfect for summer outings.'
},
{
  id: 'sh10',
  name: 'Performance Training Shorts',
  description: 'Engineered for intense workouts.',
  category: 'shorts',
  image: short8,
  longDescription: 'These performance shorts feature sweat-wicking fabric, stretch panels, and reflective details for your toughest sessions.'
},
{
  id: 'sh11',
  name: 'Printed Beach Shorts',
  description: 'Vibrant prints perfect for beachwear.',
  category: 'shorts',
  image: short9,
  longDescription: 'Make a splash with colorful printed beach shorts, complete with quick-dry material and fun designs.'
},
{
  id: 'sh12',
  name: 'Techwear Tactical Shorts',
  description: 'Futuristic design with functionality.',
  category: 'shorts',
  image: short10,
  longDescription: 'These techwear shorts feature zip pockets, water-resistant fabric, and an urban edge perfect for streetwear lovers.'
},


  // Swimsuit
  {
    id: 'sw1',
    name: 'Classic Swim Trunks',
    description: 'Quick-dry swim trunks with drawstring waist.',
    category: 'swimsuit',
    image: swimsuit1,
    longDescription: 'Enjoy the water in these classic swim trunks. Quick-drying fabric and mesh lining for comfort.'
  },
  {
    id: 'sw2',
    name: 'Sporty One-Piece Swimsuit',
    description: 'One-piece swimsuit with sporty design and support.',
    category: 'swimsuit',
    image: swimsuit2,
    longDescription: 'This one-piece swimsuit offers a flattering fit, supportive straps, and chlorine-resistant fabric.'
  },
  {
  id: 'sw3',
  name: 'Tropical Print Swim Shorts',
  description: 'Vibrant swim shorts with palm leaf print.',
  category: 'swimsuit',
  image: swimsuit3,
  longDescription: 'Make a splash in these tropical print swim shorts. Lightweight and fast-drying with a secure drawstring waistband.'
},
{
  id: 'sw4',
  name: 'High-Waisted Bikini Set',
  description: 'Retro-inspired bikini with high-rise bottoms.',
  category: 'swimsuit',
  image: swimsuit4,
  longDescription: 'This high-waisted bikini set combines vintage charm with modern support, featuring stretch fabric and a flattering cut.'
},
{
  id: 'sw5',
  name: 'Racerback Swim Tankini',
  description: 'Two-piece with athletic support and modest coverage.',
  category: 'swimsuit',
  image: swimsuit5,
  longDescription: 'A perfect blend of style and function, this racerback tankini provides comfortable coverage and sporty flair.'
},
{
  id: 'sw6',
  name: 'Board Shorts',
  description: 'Longer swimwear ideal for surfing or beach activities.',
  category: 'swimsuit',
  image: swimsuit6,
  longDescription: 'Built for action, these board shorts feature a secure waistband and stretch fabric for full range of motion.'
},
{
  id: 'sw7',
  name: 'Cut-Out Monokini',
  description: 'Trendy one-piece with side cut-outs.',
  category: 'swimsuit',
  image: swimsuit7,
  longDescription: 'Turn heads with this cut-out monokini. The design offers bold style while maintaining support and comfort.'
},
{
  id: 'sw8',
  name: 'Swim Jammers',
  description: 'Streamlined fit for training or competition.',
  category: 'swimsuit',
  image: swimsuit8,
  longDescription: 'Engineered for speed, these swim jammers offer muscle compression, chlorine resistance, and a hydrodynamic profile.'
},
{
  id: 'sw9',
  name: 'Floral Halter Bikini',
  description: 'Bold floral bikini with tie-up halter neck.',
  category: 'swimsuit',
  image: swimsuit9,
  longDescription: 'Show off your summer vibes with this floral halter bikini, featuring soft cups and adjustable straps.'
},
{
  id: 'sw10',
  name: 'Sun Protection Swim Shirt',
  description: 'UV-protective rash guard for extra sun coverage.',
  category: 'swimsuit',
  image: swimsuit10,
  longDescription: 'Protect your skin with this lightweight swim shirt, designed for comfort and UPF 50+ sun protection.'
},



  // Caps
  {
    id: 'c1',
    name: 'Classic Baseball Cap',
    description: 'Adjustable baseball cap with embroidered logo.',
    category: 'caps',
    image: cap1,
    longDescription: 'A timeless accessory, this cap features a curved brim and adjustable strap for a custom fit.'
  },
  {
    id: 'c2',
    name: 'Flat Brim Snapback',
    description: 'Modern snapback cap with flat brim.',
    category: 'caps',
    image: cap2,
    longDescription: 'This snapback cap offers a structured fit and bold style for any outfit.'
  },

  // Socks
  {
    id: 's1',
    name: 'Everyday Crew Socks',
    description: 'Soft, breathable crew socks for daily wear.',
    category: 'socks',
    image: sock1,
    longDescription: 'Our crew socks are made from a cotton-rich blend, providing comfort and durability all day long.'
  },
  {
    id: 's2',
    name: 'Athletic Ankle Socks',
    description: 'Low-cut ankle socks with arch support.',
    category: 'socks',
    image: sock2,
    longDescription: 'Designed for performance, these ankle socks feature moisture-wicking fabric and cushioned soles.'
  },
  {
  id: 's3',
  name: 'No-Show Liner Socks',
  description: 'Invisible comfort for low-cut shoes.',
  category: 'socks',
  image: sock3,
  longDescription: 'Perfect for sneakers or loafers, these no-show socks stay hidden while offering all-day comfort and grip.'
},
{
  id: 's4',
  name: 'Thermal Winter Socks',
  description: 'Thick socks for cold weather.',
  category: 'socks',
  image: sock4,
  longDescription: 'Keep your feet warm in chilly temperatures with these thermal-insulated socks, made with a cozy wool blend.'
},
{
  id: 's5',
  name: 'Compression Running Socks',
  description: 'Supportive fit for active lifestyles.',
  category: 'socks',
  image: sock5,
  longDescription: 'These compression socks enhance circulation and reduce fatigue, making them ideal for long runs or workouts.'
},
{
  id: 's6',
  name: 'Patterned Crew Socks',
  description: 'Stylish patterns for everyday fun.',
  category: 'socks',
  image: sock6,
  longDescription: 'Express yourself with colorful patterned crew socks made with soft yarn and reinforced heels.'
},
{
  id: 's7',
  name: 'Dress Socks',
  description: 'Elegant socks for formal occasions.',
  category: 'socks',
  image: sock7,
  longDescription: 'Sleek and breathable, these dress socks complement any suit or business attire with comfort and class.'
},
{
  id: 's8',
  name: 'Eco-Friendly Bamboo Socks',
  description: 'Sustainable softness made from bamboo fibers.',
  category: 'socks',
  image: sock8,
  longDescription: 'Ultra-soft and naturally antibacterial, these bamboo socks are gentle on your skin and the environment.'
},
{
  id: 's9',
  name: 'Outdoor Hiking Socks',
  description: 'Cushioned and durable for trails.',
  category: 'socks',
  image: sock9,
  longDescription: 'Built for the outdoors, these hiking socks feature extra padding and moisture control for long treks.'
},
{
  id: 's10',
  name: 'Toe Socks',
  description: 'Individual toe separation for flexibility.',
  category: 'socks',
  image: sock10,
  longDescription: 'These innovative toe socks promote natural foot movement and reduce friction between toes.'
},

];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 8);
};