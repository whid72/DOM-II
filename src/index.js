// import { body } from 'msw/lib/types/context';
// import './less/index.less'

// Your code goes here!

const navBar = document.querySelector(".nav");

navBar.addEventListener('mouseover', e => {
    e.target.style.color = 'red';
    console.log('23')
})

window.addEventListener('load', e => {
    e.target.body.style.textAlign = 'center'
})

const main = document.querySelector('.home');

main.addEventListener('click', e => {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
})

window.addEventListener('wheel', e => {
    e.target.style.fontSize = '32px';
})

window.addEventListener('keydown', e => {
    e.target.style.backgroundColor = 'orange'; 
})

const p = document.querySelector('p');

p.addEventListener('mouseover', e => {
    e.target.style.fontSize = '13rem';
})

window.addEventListener('error', () => {
    alert('Warning! YOUR COMPUTER SUCKS!')
})

window.addEventListener('keyup', () => {
    alert('You Suck')
})

window.addEventListener('mousemove', () => {
    alert('Stop moving');
})

window.addEventListener('volumechange', () => {
    alert('why?');
})