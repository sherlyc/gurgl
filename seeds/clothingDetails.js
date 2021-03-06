
   exports.seed = function (knex, Promise) {
   // Deletes ALL existing entries
   return knex('clothing').del()
   .then(function () {
   return knex('clothing').insert([
   {
   id: 119,
   size_id: 32,
   style_id: 6,
   brand_id: 5,
   condition_id: 22,
   status_id: 51,
   title:'If you can read this!',
   description: 'Very cute neutral babygrow, in nice condition.  Please note there is slight pilling on rear. Fit  comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
   photo1: '/images/babyg_1.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 120,
   size_id: 35,
   style_id: 6,
   brand_id: 2,
   condition_id: 21,
   status_id: 51,
   title:'Silent night',
   description: 'Amazing quality, gold text slightly glittery. Perfect little christmas outfit. Looks like its never been worn.',
   photo1: '/images/babyg_2.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 121,
   size_id: 34,
   style_id: 6,
   brand_id: 1,
   condition_id: 24,
   status_id: 51,
   title:'Yoga guru',
   description: 'So adorable! The best choice for all you gym mums out there in pretty good condition.  Please note there is a tiny stain at the neck. Seems longer than other onesie suits. Be a great summer option.',
   photo1: '/images/babyg_3.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 122,
   size_id: 31,
   style_id: 6,
   brand_id: 5,
   condition_id: 22,
   status_id: 51,
   title:'Peachy petite',
   description: 'Very peachy babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Thick cotton - lovely for colder days.',
   photo1: 'https://www.oliverbonas.com/static/media/catalog/product/c/1/c1074512_oliver-bonas_gift_ma-petite-baby-grow.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 123,
   size_id: 35,
   style_id: 8,
   brand_id: 3,
   condition_id: 22,
   status_id: 51,
   title:'9 months',
   description: 'So funny! What a talking point -  in nice condition. Has small dye mark on cuffs. Fit comes up larger than expected. Would look super cute with jeans and a hoody for winter.',
   photo1: 'http://cdn.shopify.com/s/files/1/1140/3192/products/2012_baby_babygrow_just-done-9-months-inside_lack-_-white_1_grande.png?v=1458568176',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 124,
   size_id: 31,
   style_id: 6,
   brand_id: 5,
   condition_id: 22,
   status_id: 51,
   title:'Dressed to impress',
   description: 'Special occasion coming up? Dress your premmy guest of honour in this. Please note it is more creamy coloured than it is white. Fit best for small prems. Suitable for even black tie events.',
   photo1: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/h/the-tiny-universe-boys-ivory-the-velvet-tuxedo-babygrow-72320-fb0c4ee943c42ac844df78ee1cd62ba6deb25710.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 125,
   size_id: 35,
   style_id: 6,
   brand_id: 2,
   condition_id: 21,
   status_id: 51,
   title:'When I grow up',
   description: ' ... A spread-operator? Somewhat ambiguous but conversation starting suit. There is a small amount of stretching around the neck, but it still fits snuggly and looks gorgeous on. Short sleeves make it better for warmer months.',
   photo1: 'https://cdn.notonthehighstreet.com/system/product_images/images/001/155/842/original_personalised-baby-grow-when-i-grow-up.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 126,
   size_id: 37,
   style_id: 3,
   brand_id: 5,
   condition_id: 23,
   status_id: 51,
   title:'Tweedy pie',
   description: 'Very grown up little dress, in really nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as a warm layer or for use in colder weather.',
   photo1: '/images/dress_1.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 127,
   size_id: 35,
   style_id: 3,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'I spotted it first!',
   description: 'Perfect for easy summer afternoons, this breezy spotted print dress is crafted in lightweight jersey and features a coordinating nappy cover. Please note there is a grass stain near the hem.',
   photo1: '/images/dress_2.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 128,
   size_id: 37,
   style_id: 3,
   brand_id: 5,
   condition_id: 22,
   status_id: 51,
   title:'Pocket of perfect',
   description: 'Navy and almost nautical, this striped dress is fairly lightweight jersey and features buttons that undo. Please note there is a pink mark near the pocket',
   photo1: '/images/dress_3.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 129,
   size_id: 32,
   style_id: 3,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'Summer stripes',
   description: 'Great for warm summer afternoons, or layered with leggings and a long sleeve t-shirt for when its cooler. Please note the elastic on the waste is a little worn, so it fits loosely, great for littlies who do not like being too wrapped up.',
   photo1: '/images/dress_4.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 130,
   size_id: 30,
   style_id: 6,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'Rainbows for the win',
   description: 'Long sleeved suit, that seems narrow. Lovely thick jersey, so your little rainbow can be as warm as toast! Room to grow if your bubba is going to be tall. Really impressed by the condition of this item.',
   photo1: 'https://littlepeagreen.files.wordpress.com/2012/04/frugi_rainbow_spot-babygrow-2.png',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 131,
   size_id: 30,
   style_id: 6,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'Ute will love this!',
   description: 'Little blue VW combie on the front. Hand sewn by a boutique supplier. Very cute, you can just tell the love that goes into creating these little NZ made vests. A great addition to you little ones wardrobe.',
   photo1: 'https://cdn.notonthehighstreet.com/system/product_images/images/000/491/279/original_Blue_campervan_vest.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 132,
   size_id: 34,
   style_id: 6,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'Pink geek',
   description: 'Oh my goodness so pink, honestly the most adorable thing I have seen in ages. It does have a little hole in the back but otherwise in great condition. If your little one knows how to make a statement then this is the outfit for you!',
   photo1: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4a3fc06eb1b04726bf024759db185f2f/b82257af-c06c-4669-bd60-949786611550.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 133,
   size_id: 37,
   style_id: 6,
   brand_id: 3,
   condition_id: 21,
   status_id: 51,
   title:'Maths Nerd',
   description: 'I do not think you have to be a nerd to love this onesie. Or to get the joke... This top is a lovely soft shade of blue and feels like brushed jersey cotton. The paint has chipped off the poppers, which is not noticeable when pants or skirt are added.',
   photo1: 'https://images-na.ssl-images-amazon.com/images/I/51OKFQZff6L._AC_UL320_SR244,320_.jpg',
   photo2: ''
   },
   {
   id: 134,
   size_id: 35,
   style_id: 5,
   brand_id: 8,
   condition_id: 21,
   status_id: 51,
   title: 'Son Goku Pyjamas',
   description: '(Dragon) Ball your little one up in this super cute onesie pyjama set inspired by the hit anime series, Dragon Ball Z. Summer weight light cotton is ideal for keeping your little Super Saiyan comfy over the warmer months of the year.',
   photo1: 'https://ae01.alicdn.com/kf/HTB1xxVoLFXXXXXQXXXXq6xXFXXXf/Romper-for-Children-Cloak-Romper-font-b-baby-b-font-font-b-goku-b-font-costume.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 135,
   size_id: 34,
   style_id: 5,
   brand_id: 9,
   condition_id: 22,
   status_id: 51,
   title: 'Otterly Adorable',
   description: 'This baby unisex pyjama set is just so otterly cute! Crafted from a super soft cotton jersey the set consists of a scoop neck raglan top with cute otter print and matching pants with elasticised waistband',
   photo1: 'http://www.peteralexander.co.nz/PJ/images/productsnz/large/854129_paleblue_l_nz.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 136,
   size_id: 33,
   style_id: 5,
   brand_id: 9,
   condition_id: 21,
   status_id: 51,
   title: 'Dinosaur PJ Set',
   description: 'Your baby will dream of playing dinosaurs in this cute Peter Alexander pyjama set. Crafted from a comfy cotton jersey fabric it consists of a scoop neck tee with placement dinosaur print, matching pants with draw cord.',
   photo1: 'http://www.peteralexander.co.nz/PJ/images/productsnz/medium/853960_blue_m_nz.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 137,
   size_id: 33,
   style_id: 5,
   brand_id: 9,
   condition_id: 22,
   status_id: 51,
   title: 'Teddy Bear Dressing Gown',
   description: 'The Peter Alexander best selling teddy gown now comes in a perfect tiny version for baby girls! Crafted from a super soft polyester fabric designed for daywear this baby gown features penny logo and cuffed built in sleeves for ultimate comfort.',
   photo1: 'http://www.peteralexander.com.au/PJ/images/products/large/853942_grey_l.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 138,
   size_id: 35,
   style_id: 5,
   brand_id: 2,
   condition_id: 22,
   status_id: 51,
   title: 'Bearly sleepy',
   description: 'Your little one will snuggle up to sweet dreams in this matching flannel pyjama set that features playful prints for an adorable bedtime look. Cotton, button down front with elastic waistband pants.',
   photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/0/67286270-1-f.jpg',
   photo2: '/images/photo_2.svg'
   },
   {
   id: 139,
   size_id: 33,
   style_id: 5,
   brand_id: 2,
   condition_id: 23,
   status_id: 51,
   title: 'Batman All-in-one',
   description: 'Cosy and comfy, this bodysuit is a great pick for your little dark knight for a great nights sleep. Cotton and viscose, crew neck, long sleeves, front zipper and ribbed cuffs. Small stain on front.',
   photo1: 'http://www.kmart.co.nz/wcsstore/Kmart/images/ncatalog/f/8/67353538-1-f.jpg',
   photo2: '/images/photo_2.svg'
   }
   ])
})
}
