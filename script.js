const form = document.getElementById('form')
const input = document.getElementsByClassName('input')
const todoUl = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))
