import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var BurgerPage = React.createClass({
	//every react component has a method called `.render()` that describes (via its return value)
	//what elements that component will contain. in other words, it returns the tree structure,
	//written in jsx, that the element will contain.
	render: function(){
		return ( //important! you can only return *one element* here. that element can have children but no siblings
			<div className="burger-page">{/* if i write a lowercase jsx element, React will treat it as an html tag*/}
				<Banner />{/*if I write an uppercase jsx element, React will assume that it is a custom component and look for
				its definitely(Banner is defined below.)*/}
				<PageBody />
			}

			</div>
			)
	}
})
var Banner = React.createClass({
	render: function(){
		return (
			<div className="banner">
				<h1>THE BURGER STORE</h1>
				<NavBar />
			</div>
			)
	}
})

var NavBar = React.createClass({
	render: function(){
		return (
			<div className="nav-bar">
				<a href="#home">home</a>
				<a href="#location">location</a>
				<a href="#menu">menu</a>
			</div>
		)
	}
})

var PageBody = React.createClass({
	render: function(){
		return (
			<div className="page-body">
				<img src="https://i.ytimg.com/vi/a40xP-CvBAw/maxresdefault.jpg"/>
				<p>Burgers are better with cheese</p>
			</div>
		)
	}
})
var app = function() {
	var libraryName = 'react'
	//ReactDOM.render() takes two inputs:
		//1. A React component
		//2. A node on the actual DOM - the place we want to mount our React node tree.
  ReactDOM.render(<BurgerPage />, document.querySelector('.container'))
  //this is where I MOUNT my components. to mount is to sync up your virtual DOM tree with the actual DOM. a react
  //component is mounted if it's a currently part of the web document. it is unmounted if its just floating around in
  //javascriptland.
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..