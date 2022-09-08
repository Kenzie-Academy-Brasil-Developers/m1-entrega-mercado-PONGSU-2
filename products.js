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
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
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
    imageDescription: "",
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
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
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
      products[i].imageDescription = 'imagem ausente'
    } else {
      products[i].imageDescription = `Foto de um(a) ${products[i].title}`
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

function createSections() {
  for (let i = 0; i < categorys.length; i++) {
    let product_section = document.createElement('section')
    product_section.classList.add('products-section')

    let section_tittle = document.createElement('h1')
    section_tittle.innerText = categorys[i]
    product_section.appendChild(section_tittle)

    let section_products = document.createElement('div')
    section_products.classList.add(`products-content`)
    section_products.id = categorys[i]
    product_section.appendChild(section_products)

    let products_list = document.createElement('ul')
    section_products.appendChild(products_list)

    for (let idx = 0; idx < products.length; idx++) {
      if (products[idx].category == categorys[i]) {
        let product = document.createElement('li')
        product.classList.add('product')
        product.innerHTML += `<img src="${products[idx].image}" alt="${products[idx].imageDescription}" title="" class="product-img"/>`
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

    main.appendChild(product_section)
  }
}

createSections()