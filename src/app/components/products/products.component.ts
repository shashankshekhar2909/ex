import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productDetils = [
    {
      id: 1,
      title: "Indian Spices",
      details:[
        {
          name: "Cardamom",
          description: "The smell of the Cardamom is medicinal and has a hint of pine smoke. The flavor is almost peppery & eucalyptus like and very familiar to Grains of Paradise. We put forth our Cardamom which is used as taste enhancer in food dishes. We offer this cardamom in different sizes of packets at affordable price.",
          imageUrl: '../../assets/images/products/cardamom.png'
        },
        {
          name: "Chillie",
          description: "This is also called chilli pepper and belongs to the family of solanaceae. Chili pepper is native to country Mexico. Chilies contain certain amount of vitamin c and carotene. Research says that humans consuming this spicy chilli regularly are less likely to die of lifestyle disorder known as diabetes. We are doing servicing for Indian spices exporters in and from India.",
          imageUrl: '../../assets/images/products/chilly.png'
        },
        {
          name: "Pepper",
          description: "This belongs to the family of Piperaceae. Usually, it is dried and used as a spice. Pepper is native to South India. It has got antibacterial properties. It is a source of manganese, vitamin-C and dietary fiber. Black pepper is a good anti-inflammatory agent.",
          imageUrl: '../../assets/images/products/pepper.png'
        },
        {
          name: "Ginger",
          description: "Ginger fruit or ginger is used as spice. This is almost used as a folk medicine. An oral use of this spice is used to treat nausea. This is one of the flowering plants. It is one of the best ingredients in Indian society. It is to be said that young ginger rhizomes are more fleshy.",
          imageUrl: '../../assets/images/products/ginger.jpeg'
        },
        {
          name: "Turmeric",
          description: "This perennial plant belongs to ginger family. Normally, it is used in included in Indian cuisine for healthy benefits. It is widely used in cooking. Turmeric makes poor fabric dye. In the concept of Ayurveda, it is used to treat disorders like throat infection and common cold.",
          imageUrl: '../../assets/images/products/turmuric.jpeg'
        },
        {
          name: "Coriander",
          description: "It is an annual herb. This is one of the plants in the earth with complete edible parts. This is native to south western Asia. Coriander leaves are used widely in cooking. The leaves of coriander seeds are rich in Vitamin A. Roasted coriander seeds are eaten as a snack.",
          imageUrl: "../../assets/images/products/coriander.jpeg"
        },
        {
          name: "Bishops weed",
          description: "This belongs to the family Apiaceae. Bishop's weed has been used in Ayurvedic medicine as an antiseptic and a preservative, as well as for respiratory ailments. It is used in the Unani system of medicine as an enhancer of the body's resistance.",
          imageUrl: "../../assets/images/products/bishop_s weed.jpeg"
        },
        {
          name: "Cinnamon",
          description: "It is a spice from inner bark of tree species from genus cinnamomum. It can be used in both sweet and savory food. It is known commonly as cinnamon. Global production of cinnamon is 35,000 tons. Sri Lanka, Vietnam and India are major producers of this plant.",
          imageUrl: "../../assets/images/products/cinnamon.jpeg"
        },
        {
          name: "Celery",
          description: "It is a marshland plant. Celery belongs to the family Apiaceae. This plant’s extracts is used in medicinal industry. It is consumed around the world as vegetable. Celery seeds are used as spice in India. Celery salt is available in most of the countries. It is used in weight loss diets.",
          imageUrl: "../../assets/images/products/celery.jpeg"
        },
        {
          name: "Mint",
          description: "It is known as mentha. It is aromatic in nature. Leaves are warm and used in tea, beverages and in ice creams. Do you know one thing? Mint is an essential ingredient in touareg tea. This tea is popular in African and Arab nations. Mint essential oil is used in breath fresheners.",
          imageUrl: "../../assets/images/products/mint leaves.jpeg"
        },
        {
          name: "Garlic",
          description: "This is commonly known as Alliumsativum. It is mostly included in traditional medicine. Garlic originated from China. Garlic is used in food for its pungent flavor. The cloves of garlic are used for medicinal purposes. The entire parts of garlic plant are edible.",
          imageUrl: "../../assets/images/products/garlic.jpeg"
        },
        {
          name: "Mace",
          description: "“Nutmeg” is one of the two spices- the other being mace- derived from species of tree in the genus Myristica. The most important commercial species is Myristicafragrans, an evergreen tree indigenous to the Banda Islands in the Moluccas of Indonesia.",
          imageUrl: "https://example.com/mace.jpg"
        },
        {
          name: "Curry leaves",
          description: "Curry leaves tree is a tropical tree in the family Rutaceae. This tree is native to India. Its leaves are edible and included in food. Curry leaves are used in rituals and pujas. This leaf is used in process of soap making and body lotions. Curry leaves tree grows up to 31 feet. Curry leaves are mostly used in Ayurvedic medicine.",
          imageUrl: "https://example.com/curry_leaves.jpg"
        },
        {
          name: "Star anise",
          description: "Star anise is the star-shaped fruit of an evergreen plant known scientifically as Illicium verum. Originating in China, star anise has a licorice or anise-like flavor, although it is not related to the true anise plants native to the Mediterranean basin and Middle East. Star anise is primary source of shikimic acid.",
          imageUrl: "https://example.com/star_anise.jpg"
        },
        {
          name: "Saffron",
          description: "It is a spice from the flower crocus sativus. It grows up to 30 cm. It contains a carotenoid pigment called crocin. Dried saffron is composed of 12% water, 65% carbohydrates, 6% fat and 11% protein. Saffron is described as reminiscent of honey. Its taste has been noted as sweet. Saffron has got a good taste.",
          imageUrl: "https://example.com/saffron.jpg"
        },
        {
          name: "Vanilla",
          description: "Four commercial preparations of vanilla are whole pod, powder, extract and vanilla sugar. Vanilla is widely used in the ice cream flavor. True vanilla is much expensive. It is the second most expensive spice after saffron. Overall, it is widely used in commercial, domestic and aromatherapy.",
          imageUrl: "https://example.com/vanilla.jpg"
        },
        {
          name: "Asafoetida",
          description: "The key element of the plant is the resin that makes a volatile oil. Asafoetida is an herbal plant which is an expectorant allowed in treatment for headaches, an antidote, and in many varied uses including aid for digestion. Asafoetida is proves to be utilized in treating some mental disorders.",
          imageUrl: "https://example.com/asafoetida.jpg"
        },
        {
          name: "Nutmeg",
          description: "Nutmeg is a popular spice that has a long list of associated health benefits, including its ability to relieve pain, soothe indigestion, strengthen cognitive function, detoxify the body, boost skin health, alleviate oral conditions, reduce insomnia and increase immune system function.",
          imageUrl: "https://example.com/nutmeg.jpg"
        },
        {
          name: "Tamarind",
          description: "The health benefits of tamarind have been well-established and include the ability to reduce inflammation throughout the body, improve eye health, boost respiratory health, heal skin conditions, improve the digestive system, relieve pain, increase the strength of the immune system and reduce fever.",
          imageUrl: "https://example.com/tamarind.jpg"
        },
        {
          name: "Clove",
          description: "Cloves offer health benefits which include providing aid in digestion, fighting against cancer, protecting the liver, boosting the immune system, control diabetes, preserving bone quality and containing anti-mutagenic properties, as well as fighting against oral diseases and headaches, while displaying aphrodisiac properties as well.",
          imageUrl: "https://example.com/clove.jpg"
        },
        {
          name: "Pepper long",
          description: "It has been called as Indian long pepper. It belongs to the family of Piperaceae. Fruits of this plant are confused with chili peppers. Long pepper is a common ingredient in European and Indian cuisine. It is one of the main ingredients in national dish of Pakistan.",
          imageUrl: "https://example.com/pepper_long.jpg"
        }
      ]
    },
    {
      id:2,
      title:'Indian Herbs',
      details:[
        {
          name: "Aloe Vera",
          description: "Aloe Vera is one of the most famous plants in the world, and it has been used frequently in history for its medicinal properties. The Aloe Vera plant is easy to grow even in cold climates and many people grow it as a house plant. Aloe Vera extracts can be converted as a juice, applied as a topical lotion or taken in dried extract capsules.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Amla",
          description: "The Indian gooseberry, known locally as Amla, is a tree that is famous for its nutrient rich fruits. It has been a common ingredient in the ancient Indian medicinal practice of Ayurveda. It is a potent source of Vitamin C and also contains iron and calcium.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Holy basil",
          description: "Holy basil is considered an adaptogen. An adaptogen is natural substance that helps your body adapt to stress and promotes mental balance. The concept of an adaptogen lies in holistic approach. But scientific research shows that holy basil has pharmacological properties to help your mind cope with many types of stress.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Lemongrass",
          description: "Lemongrass, also called fever grass, is a perennial plant with thin, long leaves that is indigenous to many Asian countries. As the name implies, lemongrass smells like lemon, but it tastes milder and sweeter. This herb is used in various Asian cuisines as a flavoring agent due to its strong flavor.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:3,
      title:'Dry Fruits',
      details:[
        {
          name: "Figs",
          description: "Figs are the fruit of the ficus tree, which is part of the mulberry family. Figs have a unique, sweet taste, soft and chewy texture and are littered with slightly crunchy, edible seeds. Fresh figs are delicate and perishable, so are often dried to preserve. This produces a sweet and nutritious dried fruit that can be enjoyed around the year. Dry Fruit Importer and Exporter must carry out the quality of all products.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dates",
          description: "The benefits of dates include relief from constipation, intestinal disorders, heart problems, anemia, diarrhea, abdominal cancer and many other conditions. Dates are good for gaining weight also. Dates are rich in several vitamins, minerals and fiber too.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Raisins",
          description: "The health benefits of raisins include relief from constipation, acidosis, anemia, fever, and sexual dysfunction. Raisins have also been known to help in attempts to gain weight in a healthy way, as well as its positive impact on eye health, dental care, and bone quality.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Apricots",
          description: "Apricots are those beautifully orange colored fruits full of beta-carotene and fiber that are one of the first signs of summer. Although dried and canned apricots are available year-round, fresh apricots with a plentiful supply of vitamin C are found in North America from May through August.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dry woodapple",
          description: "The taste of the fruit, regrettably, leaves something to be preferred, just like numerous plants with recovery qualities, yet all the parts of the tree are utilized in a number of purposes, which includes fragrances, soap, and also home furniture manufacturing. In India, Wood apple pulp is used in Ayurveda medicine as a tonic for the liver and the heart.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Dry lime rind",
          description: "Lime rind is just the outer yellow skin. It is obtained by removing only the color area and not the white flesh just beneath the skin, using a fine zester. It has a nice refreshing aroma due to the presence of lime oil, being volatile while removing the rind. The bitter white portion is not taken in the rind; hence the taste is sour to tangy.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:4,
      title:'Nuts-Nut Products',
      details:[
        {
          name: "Cashew nuts",
          description: "Cashews are high in calories. 100 g of nuts provide 553 calories. They are packed with soluble dietary fiber, vitamins, minerals and numerous health-promoting phytochemical that help protect from diseases and cancers. Cashew nuts are a good source of essential minerals.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Walnuts",
          description: "Benefits of walnuts include a reduction of bad cholesterol in the body, an improvement in metabolism, and control of diabetes. Other important health benefits of walnuts stem from the fact that these nuts possess anti-inflammatory properties, aid in weight management, and help as a mood booster.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pistachios",
          description: "The health benefits of pistachios include a healthy heart, weight management, protection against diabetes and hypertension, and improved digestion. The vitamins, minerals and protein found in pistachio are all very good for health.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Almonds",
          description: "The health benefits of almonds are extensive, and they are frequently used as a healthy solution for relief from constipation, respiratory disorders, cough, heart disorders, anemia, and diabetes. It also helps in maintenance of healthy hair, skin care and dental care.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Sunflower seeds",
          description: "Sunflower seeds are abest source of vitamin E, the body's primary fat-soluble antioxidant. Vitamin E travels throughout the body neutralizing free radicals that would otherwise damage fat-containing structures and molecules, such as cell membranes, brain cells, and cholesterol.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Watermelon seeds",
          description: "Watermelon seeds are full of nutrients like protein, essential fatty acids, vitamins and minerals. Some of the important surprising benefits of eating watermelon seeds are described as the following. Seeds are loaded with calorie and fatty acid. It is proved that watermelon seeds are good for the heart.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pumpkin seeds",
          description: "Delicious pumpkin seeds are high in calories; about 559 calories per 100 g. In addition, they are packed with fiber, vitamins, minerals, and numerous health promoting antioxidants. Pumpkin seeds contain necessary minerals. Some of the minerals are copper and potassium.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:5,
      title:'Fresh Fruits',
      details:[
        {
          name: "Bananas",
          description: 
          "Having a banana at breakfast every day adds a nutrient to your body to support normal heart function. Bananas are rich in a mineral electrolyte called potassium. Adding a banana to your diet also helps keep your eyes healthy. Bananas have a small amount of vitamin A, a fat-soluble vitamin that is vital for protecting your eyes and normal vision.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Lemon",
          description: 
          "The health benefits of lemon include the treatment of throat infections, indigestion, dental problems, fever, internal bleeding, rheumatism, burns, obesity, respiratory disorders, cholera and high blood pressure, while it also promotes hair and skin care. Known for its therapeutic properties for many generations, lemons help to strengthen your immune system and cleanse your stomach, and it is considered a blood purifier.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Mangoes",
          description: 
          "Mango leaves help normalize insulin levels in the blood. The traditional home remedy involves boiling leaves in water, soaking them through the night and then consuming the filtered decoction in the morning. Mango fruit also has a relatively low glycemic index so moderate quantities will not spike your sugar levels.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Sweet lime",
          description:
          "Sweet lime is also known as the Mosambi. It is a citrus fruit (belongs to the Citrus family) which first originated in the regions of Mediterranean Southeast Asia. Sweet lime or Mosambi juice is a very famous juice all through India, Pakistan and Bangladesh and can be found in almost every season.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Oranges",
          description: 
          "Drinking orange juice regularly prevents kidney diseases and reduces the risk of kidney stones. According to two studies in Japan, eating mandarin oranges reduces liver cancer. This may be due in part to vitamin A compounds known as carotenoids.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Apples",
          description: 
          "An apple won’t replace your toothbrush, but biting and chewing an apple stimulates the production of saliva in your mouth, reducing tooth decay by lowering the levels of bacteria. A new study performed on mice shows that drinking apple juice could keep Alzheimer’s away and fight the effects of ageing on the brain.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Guavas",
          description: 
          "Due to the rich fiber content and low glycemic index, guavas prevent the development of diabetes. While the low glycemic index inhibits a sudden spike in sugar levels, the fiber content ensures the sugar levels are well regulated. Guavas are rich in Vitamin A.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Papayas",
          description: 
          "Papayas are rich in fiber, vitamin C and antioxidants that prevent cholesterol build-up in your arteries. Too much cholesterol build-up can block the arteries completely, causing a heart attack. Papaya extracts have also been found to reduce lipid and triglycerides in diabetic rats.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pomegranates",
          description: 
          "Laboratory studies have shown that pomegranate extract can slow down cancer cell reproduction, and even induce apoptosis (cell death) in cancer cells. Pomegranate extract has been shown to inhibit the reproduction of breast cancer cells, and may even kill some of them.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:6,
      title:'Fresh Vegetables',
      details:[
        {
          name: "Gherkins",
          description: 
          "Gherkin is a small type of cucumber with almost all the nutrients present in a cucumber. It is served cold, as the cooking strips its intense flavor. Most of us are aware of gherkin taste but gherkins are rich in sodium, potassium, Vitamin A, folate, calcium and iron",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Onions",
          description: 
          "Onions are very good at hair follicle nourishment and help restore lost nutrients to your scalp. Onions are rich in sulfur, which is known to minimize breakage and thinning. Onions lend a healthy shine to hair, which can become permanent when used regularly.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Tomatoes",
          description: 
          "Tomatoes can reduce the amount of damage done to your body by smoking cigarettes or inhaling second-hand smoke. Tomatoes contain coumaric acid and chlorogenic acid that protect the body from carcinogens produced by cigarette smoke.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Cabbages",
          description:
          "The high potassium content helps by opening up blood vessels, easing the flow of blood. A warm compress made with cabbage leaves can help relieve the pain of a headache. Crush cabbage leaves, place in a cloth, and apply on the forehead.", 
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Potatoes",
          description: 
          "Potatoes are one of the most common and important food sources on the planet, and they contain a wealth of health benefits that make them all the more essential as a staple dietary item for much of the world’s population. The health benefits include their ability to improve digestion, reduce cholesterol levels and boost heart health.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Cucumber",
          description: 
          "Cucumbers contain an anti-inflammatory flavonol called fisetin that appears to play an important role in brain health. In addition to improving your memory and protecting your nerve cells from age-related decline, fisetin has been found to prevent progressive memory and learning impairments in mice with Alzheimer's disease.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Corn",
          description: 
          "Health benefits of corn include controlling diabetes, preventing heart ailments, lowering hypertension and preventing neural-tube defects at birth. Corn or maize is one of the most popular cereals in the world and forms the staple food in many countries, including the United States and many African countries.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Turnip",
          description: 
          "Turnips are very low-calorie root vegetables and carry just 28 calories per 100 g. Nonetheless, turnips are an excellent source of antioxidants, minerals, vitamins and dietary fiber. Diced turnips can be added to poultry, lamb, and pork. Turnips and top greens are very safe to eat, including in pregnant women.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Pumpkin",
          description: 
          "It is one of the very low-calorie vegetables. 100 g fruit provides just 26 calories and contains no saturated fats or cholesterol; however, it is rich in dietary fiber, anti-oxidants, minerals, and vitamins. Vegetables are one of the food items recommended by dieticians in cholesterol-controlling and weight-reduction programs.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Drumstick",
          description: 
          "The green vegetable features large quantities of iron, Vitamins as well as calcium. Drumsticks are recognized to offer healthy and strong bones and are also believed to purify the blood. Drumstick leaves particularly are said to be a blood purifier. For better outcomes, I have smashed drumstick leaves along with milk.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Ladies finger",
          description: 
          "Okra is known to aid in the prevention of diabetes. It is rich in fiber which helps in the prevention of this disease. The dietary fiber content of okra/lady’s finger is known to be high, and hence, many health specialists recommend it for digestive benefits.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Cluster beans",
          description: 
          "Cluster beans lower your bad cholesterol levels, thereby improving your heart health and lowering the risk of a heart attack. They also contain fiber, folic acid and potassium, which prevent you from developing heart complications. The iron in these beans increases your body's hemoglobin production.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Leguminous beans",
          description: 
          "Studies have shown that people who eat more legumes have a lower risk of heart disease, and the phytochemicals found in beans might be partially to thank since they protect against it. Beans contain a wide range of cancer-fighting plant chemicals, specifically, isoflavones and phytosterols.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Green Capsicum",
          description: 
          "Vitamin C which is present in Capsicum is vital for maintaining a healthy immune system and for building strong collagen to support skin and joints. It is instrumental in lowering the risk of arthritis and reducing inflammation. Vitamin K aids in the formation of blood clots.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Ridge Gourd",
          description: 
          "Luffa fruit is smoothly cylindrical and about 24 inches (61 cm) in length and 3 inches in diameter. In general, the fruit features thin and smooth green skin, white flesh and smooth, black, flat ovate seeds with a length of 1-12 cm. concentrated near its core. The taste of the fruit resembles zucchini.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Green Chilies",
          description: 
          "Green chillies are rich sources of antioxidants and this makes them act like janitors of the body. They can protect the body against free radical damage giving you natural immunity to cancer and also slowing down the aging process. Green chili peppers are also rich in Vitamin E which is essential for producing certain natural skin oils.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Beetroot",
          description: 
          "The health benefits of beets include the treatment of anemia, indigestion, constipation, piles, kidney disorders, dandruff, gall bladder disorders, cancer, and heart disease. It also helps to prevent macular degeneration, improve blood circulation, aid in skin care, prevent cataracts and soothe respiratory problems.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Cauliflower",
          description: 
          "Cauliflower is a heart-healthy vegetable. This means it helps in maintaining the heart and the cardiovascular system. Cauliflower also contains antioxidants. Antioxidants by themselves have many benefits -they act as an anti-inflammatory agent and they help build a healthy immune system.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Carrot",
          description: 
          "The high level of beta-carotene in carrots acts as an antioxidant and prevents cell damage done to the body through regular metabolism. It helps slow down the ageing of cells. Carrots are known by herbalists to prevent infection. They can be used on cuts-shredded raw or boiled and mashed.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Brinjal",
          description: 
          "As brinjals are low in carbohydrates and high in fiber content, they are known to be good for people suffering from diabetes. This is because the high fiber helps in controlling blood sugar levels in the body by controlling the absorption of glucose from food.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Red chillies",
          description: 
          "Red chili peppers have been shown to help decrease blood cholesterol levels, triglyceride levels, as well as platelet aggregation. As well, it raises the body's capability to dissolve fibrin, which is an essential substance for the formation of blood clots.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Bitter gourd",
          description: 
          "Bitter gourd fights viruses and bacteria and strengthens your immunity. It prevents allergies and indigestion. The antioxidants work as powerful defense mechanisms against illness and also help fight free-radical damage that can cause various types of cancer.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
      ]
    },
    {
      id:7,
      title:'Natural Honey',
      details:[
        {
          name: "Organic wild honey",
          description:
          "It can be used as a substitute for sugar in many foods and drinks. It contains about 69% glucose and fructose, enabling it to be used as a sweetener that is better for your overall health than normal white sugar. Though it has more calories than sugar when honey is consumed with warm water, it helps in digesting the fat stored in your body.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Natural Kashmir honey",
          description: 
          "Pure Honey is very good for health in many ways. Firstly, it is an unprocessed food. Secondly, it is a food which digests easily and naturally, this is because Pure Honey is composed primarily of simple and natural sugars without additives, preservatives or chemicals. Pure Honey has a long shelf life.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Herbal honey",
          description: 
          "Studies have shown that herbal honey possesses natural antioxidant and therapeutic properties that can prevent cognitive decline and dementia and enhance the brain's cholinergic system and circulation. One of the better-known health benefits of herbal honey is that it can help treat sore throats.",
          imageUrl: "https://example.com/pepper_long.jpg"
        },
        {
          name: "Multi floral honey",
          description: 
          "Honey is a natural remedy for many ailments and also helps in the regulation of fats. Honey is truly a remarkable substance, made even more extraordinary by the process with which it is made. This blend of sugar, trace enzymes, minerals, vitamins, and amino acids is quite unlike any other sweetener on the planet.",
          imageUrl: "https://example.com/pepper_long.jpg"
        }
      ]
    },
    {
      "id": 9,
      "title": "Handicrafts",
      "details": [
        {
          "name": "Coconut tree products",
          "description": "These products are made with the coir extracted from the fibrous outer cover of the fruit of the Coconut tree. Our coconut handicraft items showcase the crafted piece in high finish details as well as mesmerizing designs. Some of its features include intricate designs and attractive looks, unique finished looks, perfect blend of appealing charm. Our Coconut tree handicrafts add a rich finish effect to interior spaces.",
          "imageUrl": "https://example.com/coconut_products.jpg"
        },
        {
          "name": "Bamboo tree products",
          "description": "Hundreds of products can be made from bamboo. From household items to the entire house, bamboo products are nothing new to society. Bamboo has been made into decorative and functional products over the years. It is to be admitted that Bamboo can make some elegant and exotic decorations for the home. Bamboo can also be coloured so that it can fit into any décor. Bamboo can also be used to make functional products like storage boxes and ladders.",
          "imageUrl": "https://example.com/bamboo_products.jpg"
        },
        {
          "name": "Palm tree products",
          "description": "We are involved in delivering beautiful palm tree handicraft items and Palm leaf decorative products. The leaves of palm trees when dried are used to make attractive products. The palm leaves are utilized in making a variety of products such as presentation boxes, plain boxes, hats, trays, baskets and more.",
          "imageUrl": "https://example.com/palm_products.jpg"
        },
        {
          "name": "Coir Fibre",
          "description": "Coconut fibre, also known as Coir Fibre, is used for making a mattress, rugs, carpets, decorative items and dry flowers. Our renowned company is considered among the prominent traders, exporters and suppliers of Coco Fiber Natural. The coco fibres are obtainable in the best quality packing as per the requirements of the customers.",
          "imageUrl": "https://example.com/coir_fibre.jpg"
        },
        {
          "name": "Coir mats",
          "description": "Offered to clients at the best rate possible, the Coir Rubber Mat is amongst the primary preferences in the market. We are a leader in offering the best quality Rubber Molded Coir Mat to our clients. By keeping our sync with the evolutions taking place in this industry arena, we have been occupied in the realm of presenting Coir Matting.",
          "imageUrl": "https://example.com/coir_mats.jpg"
        },
        {
          "name": "Coir ropes",
          "description": "Specially twisted for better performance, strength and durability in the competitive market, our Coir Rope is offered in irresistible shades, widths, highly distinguished characteristics, and excellent finish. Curled Coir Rope is made out of matured brown coir fibre. The raw material used to produce Curled Coir Rope is processed using sophisticated technology.",
          "imageUrl": "https://example.com/coir_ropes.jpg"
        },
        {
          "name": "Coir matting",
          "description": "Coir Matting is made out of the highest quality 100% coir fibre extracted from the outer husks of coconut making it highly durable, environmentally friendly and long-lasting. This coco matting effectively brushes off the dirt and mud from the shoes and prevents the grime from tracking inside.",
          "imageUrl": "https://example.com/coir_matting.jpg"
        },
        {
          "name": "Coco chips",
          "description": "Coco- Chips offered by our company are churns of coconut husk. They are processed with rigorous procedures and standards to produce an advanced hydroponic substrate. Coco Chips are a prime organic growing medium. It is a superior alternative to alternate growing mediums.",
          "imageUrl": "https://example.com/coco_chips.jpg"
        },
        {
          "name": "Coir rugs",
          "description": "We have gained a remarkable position in the market that is involved in offering Coir Fancy Matting. Most customers prefer to purchase quality products, so we are involved in providing Coir Rugs. We are supplying Durries (Rugs/ floor Mat) with a wide assortment in Size and quality to meet global needs.",
          "imageUrl": "https://example.com/coir_rugs.jpg"
        },
        {
          "name": "Coir Matting for roof surface cooling",
          "description": "Made on traditional handlooms or power looms. Available in natural bleach, solid colours and a multitude of designs/patterns made by weave and colour combinations and with or without latex backing. The quality of the matting is determined by the type of yarn and weave used.",
          "imageUrl": "https://example.com/roof_surface_cooling.jpg"
        },
        {
          "name": "Acoustic barriers",
          "description": "We offer a complete range of certified, high-performance noise barriers to solve noise pollution. These barriers are offered at an affordable price to our clients and hence receive huge appreciation. We are engaged in offering Noise Barriers to our reliable patrons as per their given specifications to ensure their high level of satisfaction.",
          "imageUrl": "https://example.com/acoustic_barriers.jpg"
        },
        {
          "name": "Coco peat",
          "description": "Coco peat is the 'coir fibre pith' produced as a bi-product when coconut husks are processed for the extraction of the long fibres from the husk. Coco peat is the binding material that comes from the fibre fraction of the coconut husk. Coco coir/peat is a multi-purpose soil conditioner and growing medium. It is consistent and uniform in texture.",
          "imageUrl": "https://example.com/coco_peat.jpg"
        },
        {
          "name": "Coir geotextiles",
          "description": "Coir Geotextiles protect the land surface and promote quick vegetation. Geotextiles are a wonderful treasure of natural eco-friendly, erosion-control blankets in woven and non-woven preparations. Biodegradable geotextiles help soil stabilization and renew vegetation in varying slopes.",
          "imageUrl": "https://example.com/coir_geotextiles.jpg"
        },
        {
          "name": "Coco logs",
          "description": "Coconut Coir Logs are a completely biodegradable erosion control option for hills, banks, shorelines, and other erosion-prone areas. Easy to place, use, and install, these logs create a natural control area that helps establish growth and control erosion. Request a quote now.",
          "imageUrl": "https://example.com/coco_logs.jpg"
        },
        {
          "name": "Coir Fiber beds",
          "description": "Plant Pallets are 100% Biodegradable, coir beds for growing seedlings and saplings. The special structure of plant pallets enables easy transportation of pallets with plants to the sites, where we need vegetation. Call us now to get a quote.",
          "imageUrl": "https://example.com/coir_fiber_beds.jpg"
        },
        {
          "name": "Coir Fiber disks (tree cover)",
          "description": "Coir discs are designed to reduce the wastage of coir pith. We are offering the best quality Coco Disk. Our offered coco disk is processed using high-grade factor inputs with the help of the latest technology. It is widely used in the agriculture sector.",
          "imageUrl": "https://example.com/coir_fiber_disks.jpg"
        },
        {
          "name": "Coir composite boards",
          "description": "Coir medium-density fiberboard is a panel product manufactured from coir combined with synthetic resin. The panels are manufactured to a specific gravity by the application of heat and pressure by a process in which the inter-fibre bond is substantially created by the added binder.",
          "imageUrl": "https://example.com/coir_composite_boards.jpg"
        },
        {
          "name": "Coir fenders",
          "description": "With good experience in this domain, we are capable of providing Coir Ship Fenders. A relatively cheap ship fender made from coir. Our organization is well-known in the industry for catering to a distinguished segment of Coir Fenders. These products are made from high-quality components.",
          "imageUrl": "https://example.com/coir_fenders.jpg"
        },
        {
          "name": "Coco poles or plant climbers",
          "description": "We are engaged in offering an extraordinary range of Coco Poles. These poles are high in demand because of their striking features such as strength, high water and retention capacity. Coir poles act as an ideal support for climbing plants that send out aerial roots. Call us for a quote.",
          "imageUrl": "https://example.com/coco_poles.jpg"
        },
        {
          "name": "Coco pots",
          "description": "Coir cups are designed for growing plants replacing the use of plastic and cement pots. Coir pots are the most eco-friendly pots. These can be used directly to plant small plants or can be used to develop small seedlings/saplings before transplanting them into larger pots.",
          "imageUrl": "https://example.com/coco_pots.jpg"
        },
        {
          "name": "Coir baskets",
          "description": "Being a quality-conscious firm, we offer an exceptional range of Coco Wall Baskets. This product is manufactured by making use of the best quality coco fibres. As an affluent name in this domain, we hold expertise in providing high-quality Coir Pot Basket.",
          "imageUrl": "https://example.com/coir_baskets.jpg"
        },
        {
          "name": "Coir tiles",
          "description": "Coir makes ideal flooring, especially in areas that receive high traffic as it is very resistant to wear and tear. It is a great alternative to carpets and also to other natural plant coverings that are too fine to withstand heavy wear. Our Coir Tiles come in innovative designs so that they can make the floors look classy.",
          "imageUrl": "https://example.com/coir_tiles.jpg"
        },
        {
          "name": "Coir yarn",
          "description": "We offer our esteemed clients a quality range of Twisted Coir Yarn, which is known for having long durability and a natural glow. Our superior quality coconut coir yarns are extracted from coconut husks. We are amongst the notable names in the industry delivering an environment-friendly range of coir yarn. Our entire product range is delivered in varied thicknesses and ensures high strength.",
          "imageUrl": "https://example.com/coir_yarn.jpg"
        }
      ]
    },    
    {
      "id": 8,
      "title": "Healthy Millets",
      "details": [
        {
          "name": "Kodo millet - varagu",
          "description": "The benefits of eating Kodo Millet are: 1) Helps keep diabetes under check 2) Controls Obesity 3) Helps heal wounds and has a tranquilizing effect. It is a very hardy crop that is drought tolerant and can survive on marginal soils where other crops may not survive and can supply 450–900 kg of grain per hectare.",
          "imageUrl": "https://example.com/kodo_millet.jpg"
        },
        {
          "name": "Sorghum - jowar/solam",
          "description": "Sorghum is a genus of plants in the grass family. Seventeen of the twenty-five species are native to Australia, with the range of some extending to Africa, Asia, Mesoamerica, and certain islands in the Indian and Pacific Oceans. One species is grown for grain, while many others are used as fodder plants, either intentionally cultivated or allowed to grow naturally, in pasture lands.",
          "imageUrl": "https://example.com/sorghum.jpg"
        },
        {
          "name": "Proso millet - panivaragu",
          "description": "Beneficial in anti-ageing: Proso millet has a high antioxidant content. Antioxidants are substances which remove free radicals from your body. Free radicals are produced in virtually every process in the body. These molecules damage the cells and fatigue them causing them to age.",
          "imageUrl": "https://example.com/proso_millet.jpg"
        },
        {
          "name": "Little millet",
          "description": "The benefits of eating little millet are: 1) Helps lower risk of type 2 diabetes 2) Reduces chances of heart attacks 3) Improves digestion 4) Protects from breast cancer and 5) Protects from childhood asthma. Millet and other whole grains are a rich source of magnesium, a mineral that acts as a cofactor for more than 300 enzymes, including enzymes involved in the body's use of glucose.",
          "imageUrl": "https://example.com/little_millet.jpg"
        },
        {
          "name": "Barnyard millet - kuthiraivali",
          "description": "Barnyard millet is high in fiber. It is a good source of zinc and manganese. It helps to maintain body temperature. It is rich in antioxidants and high in carbohydrates. The bran layer has good fat and minerals. Millets are predominantly starch. It is a good source of B-complex vitamins. The protein content is comparable to that of wheat and maize.",
          "imageUrl": "https://example.com/barnyard_millet.jpg"
        },
        {
          "name": "Foxtail millet - thinai",
          "description": "Fox millets are high in calories, giving strength and energy for farmers to work actively in fields. Thinai is a vegan food and also a gluten-free cereal. Thinai is rich in proteins and low in fat. Thinai has a good amount of fibre content, calcium, iron, potassium, magnesium and carbohydrates.",
          "imageUrl": "https://example.com/foxtail_millet.jpg"
        },
        {
          "name": "Finger millet - ragi",
          "description": "Finger Millet, also known as Ragi, is cultivated in drier parts of the world mainly in Asia and Africa. Ragi has a distinct taste and is widely used in Southern Indian and Ethiopian dishes. Ragi is a rich source of Calcium, Iron, Protein, Fiber and other minerals.",
          "imageUrl": "https://example.com/finger_millet.jpg"
        },
        {
          "name": "Pearl millet - bajra/kambu",
          "description": "Pearl millet is very powerful in controlling diabetes. Because of its high fibre content, it tends to digest slowly and release glucose at a slower rate than other foods. This helps in maintaining healthy blood sugar levels for a long period.",
          "imageUrl": "https://example.com/pearl_millet.jpg"
        }
      ]
    }
  ]
  constructor(private route: ActivatedRoute) { }
  id:any = 0;
  selectedProduct:any = null;
  selectedItem:any = null;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.selectedProduct = this.productDetils.filter(item => item.id==this.id);
      console.log(this.selectedProduct);
      this.selectedItem = this.selectedProduct[0];
    });
  }

  selectItem = (index:any) => {
    this.selectedItem = this.selectedProduct[index];
  }
}
