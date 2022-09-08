const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Foto de varios cachos de bananas maduras empilhados",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Uma foto com 9 mamões juntos e focados, a coloração predominante deles é verde com algumas regiões amareladas",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Foto de uma maça verde, existe um reflexo da mesma em seu inferior, e ao fundo uma imagem desfocada que lembra galhos e folhas de arvore vistos de baixo contra a luz solar",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "Na foto Uma garrava de vinho Monte Sasso-Primitivo di Manduria, de rótudo amarronzado, sobre uma mesa de madeira. Ao lado direito sobre a mesa uma especie de churrasqueira portatil com chamas altas. Do lado esquerdo sobre a mesa existe um pano branco com rosa. Ao fundo bastante desfocado uma vegetacão onde predomina a grama, mas é possivel perceber alguns arbustos e a parte inferior do tronco de uma arvore",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "Uma foto tirada de cima mostrando uma pilha de cocos verdes todos juntos",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "Foto de dois sabonetes em formato de paralelepipedo, um rosa a esquerda posicionado na vertical com uma leve inclinação e um verde, envolvido por um laço tambem verde e posicionado na horizontal, também com leve inclinação. Ao fundo uma superficie clara e lisa",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Um recipiente grande de detergente 'Botanical Origin' de cor vermelha com a tampa branca, posicionado a direita da foto. A esquerda uma peça de madeira branca, com a parte superior ondulada, nessa peça está apoiado um talher que em sua ponta se ve parte de um macarrão enrolado. O fundo é liso de cor lilas",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "Na foto aparece apenas uma mão e antebraço vindo da parte superior esquerda, na mão uma luva cirurgica azul claro, segurando um borrifador também azul que por sua vez contem um líquido transparente. O borrififador está apontado para o chão de um comodo feito todo de madeira.",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function fixProductsImages() {
  for (let i = 0; i < products.length; i++) {
    if (products[i].image == undefined) {
      products[i].image = './img/products/no-img.svg'
      products[i].imageDescription = "Produto sem imagem"
    }
  }
}
fixProductsImages()

let main = document.getElementsByClassName('container')[0]

let categorys = []

function getCategorys() {
  for (let i = 0; i < products.length; i++) {
    if (categorys.includes(products[i].category) == false) {
      categorys.push(products[i].category)
    }
  }
  return categorys
}
getCategorys()

let section_fruits = document.getElementsByClassName('products-content fruits')[0]
let section_drinks = document.getElementsByClassName('products-content drinks')[0]
let section_hygiene = document.getElementsByClassName('products-content hygiene')[0]

function fillSections() {
  for (let i = 0; i < categorys.length; i++) {

    let products_list = document.createElement('ul')

    for (let idx = 0; idx < products.length; idx++) {
      if (products[idx].category == categorys[i]) {
        let product = document.createElement('li')
        product.classList.add('product')
        product.innerHTML += `<img src="${products[idx].image}" alt="${products[idx].imageDescription}" title="${products[idx].imageDescription}" class="product-img"/>`
        let product_main = document.createElement('div')
        product_main.classList.add('product-main')

        let product_title = document.createElement('h1')
        product_title.classList.add('product-title')
        product_title.innerText = products[idx].title

        let product_category = document.createElement('h5')
        product_category.classList.add('product-category')
        product_category.innerText = products[idx].category

        let product_price = document.createElement('strong')
        product_price.classList.add('product-price')
        product_price.innerText = `R$ ${products[idx].price.toFixed(2)}`

        product.appendChild(product_main)
        product_main.appendChild(product_title)
        product_main.appendChild(product_category)
        product_main.appendChild(product_price)
        products_list.appendChild(product)
      }
    }
    if (categorys[i] == 'Frutas') {
      section_fruits.appendChild(products_list)
    } else if (categorys[i] == 'Bebidas') {
      section_drinks.appendChild(products_list)
    } else if (categorys[i] == 'Higiene') {
      section_hygiene.appendChild(products_list)
    }

  }
}

fillSections()
