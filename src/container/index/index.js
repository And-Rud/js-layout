import {
  createElement,
  createNav,
  createPost,
} from '../../script/layout'
// Page-1
const page = document.querySelector('.container')

const header = createElement('div', 'head')
const time = createElement('span', 'time', '9:41')
const img_h = createElement(
  'img',
  'img',
  null,
  '/png/Group.png',
)

const nav = createNav()

const title = createElement('h1', 'title', 'Мій блог')

const post = createPost()

const footer = createElement('div', 'footer')
const line = createElement('div', 'line')

page.append(header)
header.append(time)
header.append(img_h)

page.append(nav)

page.append(title)

page.append(post)

footer.append(line)
page.append(footer)
// Page-2
const page2 = document.querySelector('.container2')
const header2 = createElement('div', 'head')
const time2 = createElement('span', 'time', '9:41')
const img_h2 = createElement(
  'img',
  'img',
  null,
  '/png/Group.png',
)

const nav2 = createNav()

const title2 = createElement('h1', 'title', 'Коммьюніті')

const m1 = createElement('div', 'menu__fm', 'База занань')
const m2 = createElement('div', 'menu__sm', 'Інформація')
const menu = createElement('div', 'menu')

const logo_img = createElement(
  'img',
  null,
  null,
  '/png/logo.png',
)

const h1 = createElement(
  'h1',
  'h-comunity',
  'Що таке база знань?',
)

const text = createElement(
  'div',
  't-comunity',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
)

const button = createElement(
  'button',
  'b-comunity',
  `Перейти до ком'юніті у Телеграм`,
)

const footer2 = createElement('div', 'footer2')
const line2 = createElement('div', 'line')

header2.append(time2)
header2.append(img_h2)
page2.append(header2)

page2.append(nav2)

page2.append(title2)

menu.append(m1, m2)
page2.append(menu)

page2.append(logo_img)

page2.append(h1)

page2.append(text)

page2.append(button)

footer2.append(line2)
page2.append(footer2)
