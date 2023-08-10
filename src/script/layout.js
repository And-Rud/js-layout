export const createElement = (
  tag,
  className,
  text,
  src,
) => {
  const elem = document.createElement(tag)
  if (className) {
    elem.className = className
  }
  if (text) {
    elem.innerHTML = text
  }
  if (src) {
    elem.src = src
  }
  return elem
}

const HEADER_BUTTON_LIST = [
  { width: 24, height: 24, src: '/svg/arrow-back.svg' },
  { width: 24, height: 24, src: '/png/img.png' },
]

export const createNav = () => {
  const nav = createElement('div', 'nav')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'but')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)
    nav.insertAdjacentElement('beforeend', button)
  })
  return nav
}

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: true,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewed: false,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: true,
  },
]

export const createPost = () => {
  const postList = createElement('div', 'content')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'message message__bgcolor'
        : 'message',
    )
    const postHeader = createElement('div', 'head-mess')

    const categoryList = createElement('span')

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'button',
        `button button__${category.id}`,
        category.text,
      )

      categoryList.append(categorySpan)
      console.log(categoryList)
    })
    const dateSpan = createElement(
      'span',
      'date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)
    const infoP = createElement(
      'p',
      'text-mess',
      postData.info,
    )
    post.append(postHeader, infoP)
    postList.append(post)
  })
  return postList
}
