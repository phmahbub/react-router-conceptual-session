import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Book from './components/Book'
import BookDetails from './components/BookDetails'
import Books from './components/Books'
import Home from './components/Home'
import Main from './components/Main'
import NewFile from './components/NewFile'

function App() {
  const router = createBrowserRouter([
    {
    path:'/', 
    element:<Main></Main>,
    children:[
      {path:'/home', element:<Home/>},
      {path:'/', element:<Home/>},
      {path:'/books', element:<Books/>,
    loader:()=>{
      return fetch('https://api.itbook.store/1.0/new')
    }},
      {path:'/book/:id', element:<BookDetails/>,
    loader:({params})=>{
      return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
    }},
      {path:'/about', element:<About/>},
      {path:'/newfile', element:<NewFile></NewFile>},
    ]
    },
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
