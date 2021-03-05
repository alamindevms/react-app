var players =
    [{
  "id": 1,
  "url" : "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564",
  "name": "Lionel Messi",
  "salary": "$420252.35"
}, {
  "id": 2,
  "url" : "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093",
  "name": "Cristiano Ronaldo",
  "salary": "$522226.42"
}, {
  "id": 3,
  "url":"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecead3f0ca011000726427e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1669%26cropY1%3D79%26cropY2%3D1750",
  "name": "Andres Iniesta",
  "salary": "$614446.94"
}, {
  "id": 4,
  "url":"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F557b4040e4b017853ecea724%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D84%26cropX2%3D741%26cropY1%3D0%26cropY2%3D657",
  "name": "Radamel Falcao",
  "salary": "$777684.18"
}, {
  "id": 5,
  "url":"https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_auto/v1602497931/dev/vznsyjtgjlynshck6e2i.jpg",
  "name": "Andrea Pirlo",
  "salary": "$637251.06"
}, {
  "id": 6,
  "url":"https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2021/02/03/2021-01-29t153016z_904753982_rc2rhl9vn3sj_rtrmadp_3_soccer-england-mci-shu-preview.jpg?itok=gpmCY429&timestamp=1612287768",
  "name": "Sergio Aguero",
  "salary": "$932010.68"
}, {
  "id": 7,
  "url":"data:image/jpeg;base64,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",
  "name": "Neymar",
  "salary": "$713312.85"
}, {
  "id": 8,
  "url":"https://s.hs-data.com/bilder/spieler/gross/124973.jpg",
  "name": "Sergio Busquets",
  "salary": "$695712.85"
}, {
  "id": 9,
  "url":"https://upload.wikimedia.org/wikipedia/commons/4/4a/Xabi_Alonso_Training_2017-03_FC_Bayern_Muenchen-3_%28cropped%29.jpg",
  "name": "Xabi Alonso",
  "salary": "$473320.38"
}, {
  "id": 10,
  "url":"https://s.hs-data.com/bilder/spieler/gross/29391.jpg",
  "name": "Thiago Silva",
  "salary": "$988560.46"
}, {
  "id": 11,
  "url":"https://resources.premierleague.com/premierleague/photos/players/250x250/p20664.png",
  "name": "David Silva",
  "salary": "$919204.17"
}, {
  "id": 12,
  "url":"https://s.hs-data.com/bilder/spieler/gross/1337.jpg",
  "name": "Gianluigi Buffon",
  "salary": "$487358.88"
}, {
  "id": 13,
  "url":"https://i.pinimg.com/originals/f9/69/9e/f9699ea54403eeb1a70282869aa9b56d.jpg",
  "name": "Sergio Ramos",
  "salary": "$794314.35"
}, {
  "id": 14,
  "url":"https://sm.imgix.net/16/41/vincent-kompany_1.jpg",
  "name": "Vincent Kompany",
  "salary": "$670921.92"
}, {
  "id": 15,
  "url":"https://s.hs-data.com/bilder/spieler/gross/6071.jpg",
  "name": "Philipp Lahm",
  "salary": "$397097.19"
}]

export default players;