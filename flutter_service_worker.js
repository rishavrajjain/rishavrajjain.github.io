'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4351593491f848a0ec781582ead47379",
"index.html": "82c4b757c4d1d90b7d1d63ec5613963c",
"/": "82c4b757c4d1d90b7d1d63ec5613963c",
"main.dart.js": "6a39ca3087c02b0c4391bb58dabf7852",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "43440590f916b942ed67a5b0ab258a53",
".git/ORIG_HEAD": "84e203e1b5df0ee24ad283f99ba9739f",
".git/config": "d4e75434ea4114e43564a6ff86a20d86",
".git/objects/92/492d6c9023271cad2f89b113dfd12b4bc1fdd3": "7a31fc9c1e856ef525d1122d62593e57",
".git/objects/92/302564f8353892b6ab5e35e75eea1f562874a0": "8458311db8a25b68affd0a84f31740fc",
".git/objects/68/a51553906d8bf0c5c1ccfcfdda8142b5dc88b1": "cd4c8f6cb93470238cf1ea5692901964",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/02197f67a78030b024df88200d6c92f8061dc9": "09a86dc24bb916a901bec93cd9e2d2eb",
".git/objects/9b/de173884442d812111b7a55ac2c5064f835889": "02088982ac0c05b903f1a32db9fe487e",
".git/objects/04/113069bd1bc8d7a02e7f9d473a605b06ec22ea": "14d553a4f0886f0be2eaca984947b38b",
".git/objects/04/49f43574924c7d8a2706a2d512a19c06f37b0c": "09466fb20c19b899900c4382ee5dd2c8",
".git/objects/69/12ff12867fbf34f820ca302db0a0ead6741ffb": "12cbff5b531d0b824b4d99d9bf5f27c9",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/f3d48436f7f7c515bfc3f81c5880d066e3f0f1": "2d6b0b9324acc9e5177803ceeb76a626",
".git/objects/58/d5cad5dd3fa72fedd8903b9beadbe709b58d61": "1e68ad21ecafdaf9ffe3b329b80deec2",
".git/objects/67/a2c0e8578275cc76c4057365384b7d4040a373": "234dc632397ee6ec2752af3faa1c2b6f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/6db51510fb376ae38580c5a9a2e03e7fae96a0": "3a6db027e536d9a3fd8f846af0c77dfd",
".git/objects/60/d618c0465c4dffb006c501d761d9836f39cd64": "4f82143c255a0798ed9bdafd229eb863",
".git/objects/9d/fa5708271b539b7130b2f4f21e5ff53d189d69": "51e958c4a4907a7beb481605cd4245cc",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/eafa8f953e77808e316e481f5d02249ae0763e": "26bd6afedb546b58ee0f4b551172facf",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d7/c52612f64907c6f098433d1c5c0b1cd3a0d928": "fa2e3ee46138e2fc50c13544a7e2b788",
".git/objects/a2/714b1a30fdd8715794ee7437462c8ccd9ffe0c": "010eeeaf1495e2169b80f400932e177b",
".git/objects/a5/378526e91c4781771d91598a47b9e991509170": "87d08bdd9aaa96a669bb544cb38e0309",
".git/objects/d1/458604470df60c969c2f4ba235d1b92f44d9c0": "61e3702e4041c807687391ea088bcd27",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/b5453c8f007b1d0494a421c381cd227393218e": "77135376a1dd14144619de7d6ac2962b",
".git/objects/f4/4ad40bf9a2a2c25020eca27328ebae9e8d1987": "23d1da82d4838e052f3f821a7606b648",
".git/objects/f3/75e2d982d5ab4e67e525911e98db1fc4bb6136": "0d1bb8d04bd7af4f820824ce2b40677c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/00529eb3c57a0cc65f30aa2cfbd15afb34d8c5": "d2f72424c93a5ac0040284e8122a9929",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fd/d75d620b707e23152f73c552add999e069c666": "6f2f13467006cd4e664a658248b77e64",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/adb4dda580e383334bc161f7e22b17fcd70b1a": "5245a36c36a4dc7ccbc12e4babf21c53",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/ed/c5fb0a7a8d1544237beb567723c1e2b3c085c0": "a56e7195a71873a3f19c6d4b2885d10c",
".git/objects/c6/56bf9af60c1e70dbe7b980c667b8ae2c04d2ec": "20bd3051f03d25e795b4b536bc389607",
".git/objects/c6/bc904632e395b6a0ac013c06d9374f77668a3a": "f8c3e24d767f45e1a9c910f45dcd26bb",
".git/objects/ec/af22b487022e8af647d41ab16fabe161e03f65": "cc9111d043d1fe4c5373c8e3fa18528f",
".git/objects/20/2436d251345a9370351dd8b037095dbbea9618": "e66bc0bdc478d772e6b04b38d009b954",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/0db4afca13d416394c9ba27af00006fb7b5f8c": "a59d4ac51832e1ac1c2343f7477b3cae",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/11/dd47f73e5abaee89bd0cc2d1d4784442f0e3b7": "569cdc207def5a351022f2b72fbb5d66",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/6bc482576e62e3580908b02eca77bb1274d442": "41298da1aa4e901a983161eba6bf5492",
".git/objects/73/7a4eaec80d5a5d7b61811b9c2c984591ac35ce": "6b256fa3ef32f543216fe62f3cc8a266",
".git/objects/74/030cae6ede7e0242f57bbd847c9da096cfb873": "66dccabaf6cc18ac5813da9bd2502247",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/e8bba4a39dc9e7c8671ec49de035754a686d44": "654db5c05a7b95b398159c4705321a0b",
".git/objects/7b/6f4859cfc2dcfa33cc3960c5b977c1c57ac4e1": "4ee507eb2414266c04413e5319fa6ca0",
".git/objects/8f/bdffb4a9fdab54958dd18047c62b79b557a7a8": "4b6a7beba73eeee65b1bef9e7c7205b9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/b251bbd195cbf411c5b8d3da89edcfc7536103": "3f8d23a162128fb0ed1075447e0a83c1",
".git/objects/21/3ae0f16bdb6fc052357f3ce3d289270c6406d1": "08e8daeb784841d68fd25c568b75cb63",
".git/objects/4d/caab269f9d4e2f4b4111a45230fd84a083c4ca": "678cb76711a37532c1729c6b950eff48",
".git/objects/2a/6ff5f9a675f87dbb7f2e742a7a0351e8681aba": "e3d3af1883de6f0f65692d88910cf6cb",
".git/objects/2f/ee120001fcc41ce670541a7aa7324b2451b94d": "367bee1ad359c40f1b42f11857498fe1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/957cae2e6997c01629a6e3f4e793722a25a3a0": "a7c5f5b9d56e5049eebb81e742cb01e4",
".git/objects/9f/7a5fc232db3d464bcd218879af1a0ed3f9151c": "7493f934ad70f1525e582e70a4be00a9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/eb6a02e368bc22eaa1d81386d84de70f0528cf": "d1789f558f9b9b0199f22687e5b17012",
".git/objects/31/5a4287cc73c518aab0c85d51c8eb877cc6129c": "77631b5cd824a2c9218ecfcf087d7083",
".git/objects/62/8f188152f2e6e0267f94d41b320cf7c16aaba4": "cad5d8465b56405978ba4e790a4ab36a",
".git/objects/96/343256292b2517d0f8df09c033e98dc6ed9c87": "88e6769bd2326230f219de6cd4317443",
".git/objects/54/0b8557196438dc65760e56ff26c607d1d04af7": "68b7c122f198878722d9bafdf664c04b",
".git/objects/6d/d18ebbd4106398e478dceb2cb655ee1e3283c3": "c06955e59a1eb4bcb9846f7d4bcfd37a",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/bd1745b03615b20f8d3cf7b38ffe7871112910": "4362deed26e92cf6b9a476e248962261",
".git/objects/6c/5d19cd0f9c695b7ade48ffca3e0cd3c70bf4c2": "310860f4a396c03e690db41a151dc43c",
".git/objects/97/ae528ad42c7a9c5790c58f80af109cc852fdbf": "5c6a8e72eb63c944de76e894d31a21e7",
".git/objects/63/27c4e3a6a35f0dece1dbfce993988446f8eb6e": "a503f7a02a14633d233133250ca59f51",
".git/objects/d3/3991e069c6e476229e7ffaaf9cb0e3db642324": "7a29ecc02d377f714642aaa4a90489dc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/662437e89813803d73d4cc2448e56953f309c6": "a5ff8a8c05e445a64b170f4f1efbfa26",
".git/objects/ba/0f32111a2e1b1c40a04eb93e871ff0e8b74255": "4f9ae9ff173917b9eb772777ffe3c73b",
".git/objects/a7/8d878c66060af863a06bdfc008124dee8ab6f5": "4536fc4352160adcdfc11b333a609ae8",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/b6/e3d5e03c1c8034399a7dc96592d5b9818777ff": "f6503dda0cfa632048b74d1d62187840",
".git/objects/a9/89788fef4377b8e60264057a46c52f2c27ebd6": "5960081de6aa4ee74843917eecfb2df2",
".git/objects/d2/ce864a0d9ed4dc8d4df5b4de5f9104bde3af16": "41067968a39f239da8ab2db65a2a09a5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/a6113fc22f7f84b45723fb194978aff9ba300b": "03cd9f78ae51d230bd8b4839ada5dc31",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/54196989bb9bf69dad64d22bb8ae92c0528e33": "ae8087382334d71711d4b169638f4357",
".git/objects/cc/c80683fd1a171a7ab33b311d1cb298e21565f6": "277641301950d88f1c9683cd8fd5ba67",
".git/objects/f7/a8c686fcdf72e1189db4bca93db86f1e3d918f": "a0b51cdae8af3f631a4f25b602431da7",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/e7834ef26773b7a2b07c61977aafdc6d0c33bc": "5b49dae31d670865d98ca3a3e2aeaca4",
".git/objects/ff/89b8d63aa89db0a01939566f7da7832f3f9e2a": "962b0bb471561a03a29b71e50aa8d394",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ce/4f09c06a49fa110a1e5838b4401c6045a1e1bd": "67a3ceef07b03bedc601a0ea29121726",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/e0/c74ae3d19bb29c697d563edbd8f49c9fb204be": "6ce110eaa6b2984d2554033da167b22b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/4677ef4da3118813aa26e9dd8e574b1b4a8920": "c3fbf2299d57abfed2a407f319aaab70",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/8e682759c10ffe2ac7fbb2f2d57d09bee92b4c": "9554ad5e9ede061caeebff2cf78fe766",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/d5ff54cad4adfdfdc69e28b15e96e109429ba0": "fc25e89393902b136712d31e3fdc7989",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2e/83766ffb2050ad496530481d46f62bb1b5956f": "9b88bf4ca0f14b54088a9f98053a4e1e",
".git/objects/8b/fc8f95eb46d7fff1c270ef28e54ad5129d0168": "b1a95de14dd6640727276768a0891353",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/10d711cbefdadecf5dc6642636b7b1b8ea03a6": "ae4253adec79a649a1ea26bd5c97c1b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d5f361f0d4585398ac16ddf23d80eec1",
".git/logs/refs/heads/main": "3e8501dfe5b0a1965bd48c5366db71c0",
".git/logs/refs/remotes/origin/main": "1c7cd73778310718262676e535ce404d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "632033282063637c8be6cab7a5f56c73",
".git/refs/remotes/origin/main": "632033282063637c8be6cab7a5f56c73",
".git/index": "d2f957541aecbdd8cd150f2398594ed4",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "75457fdaeff4fc907629d8039abe7bcb",
"assets/AssetManifest.json": "e92851924b0eaf92d7be22da8f308d8c",
"assets/NOTICES": "9073c016be77867ed909ee781ba46e5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dc953a8e05db0cc1102f894e1d027302",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fe771e52c5cbd46bf9d69b77de94e4b5",
"assets/fonts/MaterialIcons-Regular.otf": "7adf9b712416768375a1e5d4f699592d",
"assets/assets/images/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/icons/steps.png": "3c0a0084eb6bf70752bae7545cc694ce",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/sleep.png": "6196f7d5ca8c361bce775098b428c4bf",
"assets/assets/icons/distance.png": "ed13215b061db489e5d452f3c0a74fd4",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/burn.png": "51a00d14b99445134c8a11128b008510",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
