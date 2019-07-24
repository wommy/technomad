---
layout: post
title: "olde2nueue"
date: 2019-07-22 15:35:05 -0400
---

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, inital-scale=1" />
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Tommy Williams</title>
		<style type="text/css">
			header, main{ margin:.5rem, 2rem; }
			a{
				display:list-item;
				list-style:decimal inside;
			}
		</style>
		<meta name="author" content="Tommy Williams, Wommy Tilliams">
		<meta name="description" content="Tommy Williams's Website - Website Design / Development">
		<meta name="keywords" content="Tommy, Williams, Wommy, Tilliams, Website, Websites, Design, Develop, Development, Make, Create">
	</head>
	<body style='margin:0;font-family:sans-serif;'>
		<header style='float:right;'>
			<h2>portfolio</h2>
			<nav>
				<a href="//aparadi.se/">aparadi.se</a>
				<a href="//wommytilliams.com/8c/">eightcell</a>
			</nav>
			<h2>contact</h2>
			<p>to hire me for website work</p>
			<nav>
				<a href="mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com">email</a>
				<!-- <a href="tel:+13128189011">Phone</a> -->
			</nav>
			<h2>social media</h2>
			<p>to get an idea of who i am</p>
			<nav>
				<a href="//facebook.com/Froggie92">facebook</a>
				<a href="//twitter.com/Froggie92">twitter</a>
				<a href="//instagram.com/wommytilliams">instagram</a>
				<a href="//plus.google.com/118102255716845472363/">google+</a>
				<a href="//reddit.com/user/Froggie92/">reddit</a>
			</nav>
		</header>
		<main style='max-width: 70%;'>
			<h1>welcome! tommy williams is</h1>
			<ul>
				<li>designer: i design solutions to your problems</li>
				<li>developer: i develop code to achieve that design</li>
			</ul>
			<div>
				<h3>i can build your website from scratch or work off your template</h3>
				<h3>i can design phone apps, but cannot develop or publish them</h3>
			</div>
			<div>
				<h3>most of my work is on the front end: what the user sees and interacts with</h3>
				<ul>
					<li>html</li>
					<li>css</li>
					<li>javascript</li>
					<li>adobe photoshop / illustrator</li>
				</ul>
			</div>
			<div>
				<h3>i also take on back end work: databases and scripts of more complex sites</h3>
				<ul>
					<li>php</li>
					<li>mysql</li>
					<li>ruby on rails</li>
				</ul>
			</div>
			<div>
				<h3>i emphasize</h3>
				<ul>
					<li>mobile: as good as, if not better than the desktop site</li>
					<li>user interface / experience: the user understands what to do and enjoys doing it</li>
					<li>rapid development: focus on delivering a working prototype asap over long planning phases</li>
					<li>clean / efficient code: other developers can easily interpret and edit my code</li>
				</ul>
			</div>
			<div>
				<h3>i am more familiar with:</h3>
				<ul>
					<li>mac over pc</li>
					<li>android over iphone</li>
				</ul>
			</div>
		</main>
		<footer style='display:none;'>
			To Do
			☐ Resume
			☐ Bio
			🗹 Icons
			☐ SEO
				☐ http://moz.com/learn/seo/meta-description
				☐ http://googlewebmastercentral.blogspot.com/2014/03/introducing-new-webmaster-academy_18.html
			🗹 Split Social Media from Contact
			🗹 Inspiration / Websites I like
				🗹 http://itemsandthings.com/
			🗹 Github Version Control
			☐ Rework Bio to say: Templates suck, you should hire me to upgrade
			☐ Social Media rebranding
				☐ twitter
				☐ fb - wommy tilliams
			☐ Add
				☐ https://depaul.digication.com/toms_portfolio/Final_Media_Piece
				☐ https://docs.google.com/document/d/16n7Eqc_12aQHAs6kDREl4x1FXbrcznPb0EQKfNwfpac/edit
			🗹 Email @wommytilliams.com
		</footer>
	</body>
</html>
{% endhighlight %}

this is the blogpost where i speak to where and how im going to up olde to nueue.

i dunno how many posts its gonna take to explain what i would do and how i would do it, but this is the second already. one might call it a series

anyway, i plan on using gists to explain the changes, but i dunno how to do that yet.

TODO:
- use gists for changelog documentation

so first things first, im the realest

structure of the olde was 

head
	style
header
content
todo

nueue is gonna give us a few more options

{% highlight html%}
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, inital-scale=1">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>{head.title}</title>
		<style type="text/css">
			{head.style.theme}
			{head.style.user}
		</style>
		{%- if head.meta %}
		{% for each in head.meta %}
		<meta name="{each}" content="head.meta.{each}">
		{% endfor %}
		{% endif %}
	</head>
	<body style='font-family:sans-serif;'>
		{%- if header %}
		<header {% if header.style %} style='{header.style}'{% endif %}>
			{header.content}
		</header>
		{% endif %}
		<main{% if main.style %} style='{main.style}'{% endif %}>
			{main.content}
		</main>
		{%- if footer %}
		<footer{% if footer.style %} style='{footer.style}'{% endif %}>
			{footer.content}
		</footer>
		{% endif %}
	</body>
</html>
{% endhighlight %}

options, youre also given options

you cant see it above here buuut

this can take a obj: json, yaml; you name it. 

## object 

```
head
	.title
	.style
		.theme
		.user
	.meta
		.author
		.description
		.keywords
body
	[.header, .main, .footer]
		.style
		.content
```

## style
```
a{
	display: list-item;
	list-style: decimal inside;
}
```

## header

```
<h2>portfolio</h2>
<nav>
	<a href="//aparadi.se/">aparadi.se</a>
	<a href="//wommytilliams.com/8c/">eightcell</a>
</nav>
<h2>contact</h2>
<p>to hire me for website work</p>
<nav>
	<a href="mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com">email</a>
	<!-- <a href="tel:+13128189011">Phone</a> -->
</nav>
<h2>social media</h2>
<p>to get an idea of who i am</p>
<nav>
	<a href="//facebook.com/Froggie92">facebook</a>
	<a href="//twitter.com/Froggie92">twitter</a>
	<a href="//instagram.com/wommytilliams">instagram</a>
	<a href="//plus.google.com/118102255716845472363/">google+</a>
	<a href="//reddit.com/user/Froggie92/">reddit</a>
</nav>
```
```
for this, the pattern is:
	
	title,
	subtitle:
	[array]
	
	--- with a template like this
	
	h2
	p
	nav
		[ a ]

	--- with the data being

	portolio
		aparadi.se
		eightcell

	contact
	to hire me for website work
		email

	social media
	to get an idea of who i am
		facebook
		twitter
		instagram
		google+
		reddit
```

## main

```
<h1>welcome! tommy williams is</h1>
<ul>
	<li>designer: i design solutions to your problems</li>
	<li>developer: i develop code to achieve that design</li>
</ul>
<div>
	<h3>i can build your website from scratch or work off your template</h3>
	<h3>i can design phone apps, but cannot develop or publish them</h3>
</div>
<div>
	<h3>most of my work is on the front end: what the user sees and interacts with</h3>
	<ul>
		<li>html</li>
		<li>css</li>
		<li>javascript</li>
		<li>adobe photoshop / illustrator</li>
	</ul>
</div>
<div>
	<h3>i also take on back end work: databases and scripts of more complex sites</h3>
	<ul>
		<li>php</li>
		<li>mysql</li>
		<li>ruby on rails</li>
	</ul>
</div>
<div>
	<h3>i emphasize</h3>
	<ul>
		<li>mobile: as good as, if not better than the desktop site</li>
		<li>user interface / experience: the user understands what to do and enjoys doing it</li>
		<li>rapid development: focus on delivering a working prototype asap over long planning phases</li>
		<li>clean / efficient code: other developers can easily interpret and edit my code</li>
	</ul>
</div>
<div>
	<h3>i am more familiar with:</h3>
	<ul>
		<li>mac over pc</li>
		<li>android over iphone</li>
	</ul>
</div>
```
```
for the main, the data pattern is very simple: 

	title: [array]

the template that looks like:

	div
		h3
		ul
			[ li ]

the data is:

	most of my work is on the front end: what the user sees and interacts with:
		html
		css
		javascript
		adobe photoshop / illustrator

	i also take on back end work: databases and scripts of more complex sites:
		php
		mysql
		ruby on rails
	
	i emphasize:
		mobile: as good as, if not better than the desktop site
		user interface / experience: the user understands what to do and enjoys doing it
		rapid development: focus on delivering a working prototype asap over long planning phases
		clean / efficient code: other developers can easily interpret and edit my code
	
	i am more familiar with:
		mac over pc
		android over iphone
```

## footer

```
To Do
☐ Resume
☐ Bio
🗹 Icons
☐ SEO
	☐ http://moz.com/learn/seo/meta-description
	☐ http://googlewebmastercentral.blogspot.com/2014/03/introducing-new-webmaster-academy_18.html
🗹 Split Social Media from Contact
🗹 Inspiration / Websites I like
	🗹 http://itemsandthings.com/
🗹 Github Version Control
☐ Rework Bio to say: Templates suck, you should hire me to upgrade
☐ Social Media rebranding
	☐ twitter
	☐ fb - wommy tilliams
☐ Add
	☐ https://depaul.digication.com/toms_portfolio/Final_Media_Piece
	☐ https://docs.google.com/document/d/16n7Eqc_12aQHAs6kDREl4x1FXbrcznPb0EQKfNwfpac/edit
🗹 Email @wommytilliams.com
```

i need to make this work somehow

template with a config

i have no clue what to do next

i need to somehow sort thru my bookmarks

i need to make a weekly newsletter?
