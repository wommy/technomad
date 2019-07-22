---
layout: post
title: "olde"
date: 2019-07-19 18:38:53 -0400
---

im choosing to post the [olde version of this site, technomad v1.0](/olde), which i believe was created in spring of 2014. im going to try to break this code down line by line, i hope you get as much out of this as i do.

im going to try to break this into (5) distinct parts: [Head](#head), [Style](#style), [Header](#header), [Content](#content), [TODO](#todo)

## head

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width" />
<meta name="keywords" content="Tommy, Williams, Wommy, Tilliams, Website, Websites, Design, Develop, Development, Make, Create">
<meta name="description" content="Tommy Williams's Website - Website Design / Development">
<meta name="author" content="Tommy Williams, Wommy Tilliams">
<style type="text/css">
body{
	font-family:tahoma,sans-serif;
	margin:0;
	font-variant:small-caps;

	display: flex;
	flex-direction:row-reverse;
}
section, aside{
	margin:1rem;
}
aside{
	width:20rem;
}
a{
	display:list-item;
	list-style:decimal inside;
}
</style>
<title>Tommy Williams</title>
{% endhighlight %}

the first thing that strikes me is that theres no `head` tag: i was and still am a big fan of minimalism, and around this time i learned that the `head` can be omitted as long as its last element or the first element in the `body` isnt a `comment`. i strategically put the `title` at the end of the `head`, so that the `style` wasnt confused as part of the `body`.

the second aspect that comes to attention, of which i'm proud of as i got most of them, are the tags that could be argued are required on today's templates: html5's `doctype`, `html lang='en'`, `viewport` has the `width=device-width` part, but is missing the `initial-scale=1`. lastly the `<meta http-equiv="x-ua-compatible" content="ie=edge">` is missing altogether.

the next thing to mention is my amalgum of `meta` tags: `keywords`, `description`, `author`; in my naivety, i thought this was all i needed for `SEO`, as later we'll talk about my distinct lack of `h1`, `h2`, or `h3` tags, but for my experience level, looking back, i'm glad i was at least trying.

lastly, i have an `in-head` `style`; there are (3) ways to do `style`: 

1. `external style`, the norm, when you separate all your css into separate `style` file(s) which you `link` to in the `head`. 

	for such few lines, I thought this was overkill: i have always aimed to have as simple `style` logic as possible; i was way ahead of the curve here as today [PWAs](https://developers.google.com/web/progressive-web-apps/) in-head critical `style` as part of the [app shell](https://developers.google.com/web/fundamentals/architecture/app-shell) paradigm.

2. `in head style`: today this is reserved for the critical css, but unheard of during this era.

	 my logic at the time was scrolling up was easier than juggling two files, but now I realize that i had one less server hit, as `external` stylesheets have an inhereit loading time. this totally fits the use-case for my 'critical' 4 `selectors` and 7 `declarations`.

3. `inline style`: when you tack a `style attribute` onto an individual element. 

	back in this era, nothing was a bigger faux pa, but today, inlining style is key to reusuable component-based architecture. imagine writing what you believe is a reusable piece of code, and because of css inheritance logic, the same code renders differently in two different places. this was a problem for years with ginormous overengineered solutions battling for dominance. so also imagine the solution wasn't to add another more, but to take away something that was considered standard. 

im probably going to cut this out into its own blog_post

but enought about css and style history. I added some comments to analyze my 18 lines of style:

## style

{% highlight css %}
body{
/* set font-family to sans-serif, for better screen readability, 
tahoma just being the flavor of the month
today i would use system-ui */
	font-family:tahoma,sans-serif;

/* reset the body's default margin of 1 to 0 
doing this inline might be a little fancier */
	margin:0;

/* humble brag about an obsecure css property, 
i should have picked a neat monocase font, 
but it hit my page load time and i didnt know about prefetch */
	font-variant:small-caps;

/* display knowledge of the time's cutting-edge technology: flex */
	display: flex;

/* an attempt to appear sophisticated, floats would have worked fine */
	flex-direction:row-reverse;
}
section, aside{
/* give the two main sections a margin */
	margin:1rem;
}
aside{
/* should have used a min-width here */
	width:20rem;
}
a{
/* i hated the bloat wrapping nav links in ul tags brought with
this solved that plus i got to flex on some css knowledge */
	display:list-item;

/* more obsecure knowledge bragging, preference */
	list-style:decimal inside;
}
{% endhighlight %}

I thought explaining my reasoning here would be informative but it just ended up displaying a type of arrogance

## header

{% highlight html %}
<aside>
	portfolio
	<nav>
		<a href="//aparadi.se/">aparadi.se</a>
		<a href="//wommytilliams.com/8c/">eightcell</a>
	</nav>
	<br>
	to hire me for website work<br>
	contact
	<nav>
		<a href="mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com">email</a>
		<!-- <a href="tel:+13128189011">Phone</a> -->
	</nav>
	<br>
	to get an idea of who i am<br>
	stalk me on social media
	<nav>
		<a href="//facebook.com/Froggie92">facebook</a>
		<a href="//twitter.com/Froggie92">twitter</a>
		<a href="//instagram.com/wommytilliams">instagram</a>
		<a href="//plus.google.com/118102255716845472363/">google+</a>
		<a href="//reddit.com/user/Froggie92/">reddit</a>
	</nav>
</aside>
{% endhighlight %}

just after learning about semantic html, i created an aside instead of a header.

i didnt really understand the box model at this time, having opted to skip straight to flexbox. i still do think this tagless html - xml? - looks very clean; i was all about aestetics then and still am a bit today. sidenote: i got super into haml, jade, and pug because of their brief, declaritive, and visually pleasing nature, all that began here. but ill talk all about that later

that being said, i strongly regret using the `br` tags, i should have made blocks and set the titles as `h2` tags. on the other hand, im quite proud of myself for using `nav` tags as wrappers for `a` tags, and for prepending external link's `href`'s with `//`, something i still do today.

the header was split into three categories: portfolio, contact, and social media:

### portfolio

the place where i planned on showcasing all the work that i had done. while is it meager, i was on the money by starting this when i did; i wish i had kept up with it because ive lost dozens of sites that ive spent innumerable hours on. the biggest problem here was the lack of a CMS, or even a separate data file that i can innumerate over.

- aparadi.se was my friend jorris's site for a film project he did
- eightcell is a project for my friend truman that has since folded.

### contact

i commented out my phone number after getting too many phone calls from what i believe to be web crawlers; i naively thought that this would work out in my favor. the mailto was a nice touch.

### social media

in this last section, i put up my social media links, facebook, twitter, instagram, google+, and reddit. I should have used this time to create corresponding business accounts, combined this category with contact above; it would have been super easy, and five years worth of work on my brand would have done me immeasurable help. 

## content

{% highlight html %}
<section>
	welcome<br>
	<br>
	tommy williams is<br>
	- designer: i design solutions to your problems<br>
	- developer: i develop code to achieve that design<br>
	<br>
	i can build your website from scratch or work off your template<br>
	i can design phone apps, but cannot develop or publish them<br>
	<br>
	most of my work is on the front end: what the user sees and interacts with<br>
	- html<br>
	- css<br>
	- javascript<br>
	- adobe photoshop / illustrator<br>
	<br>
	i also take on back end work: databases and scripts of more complex sites<br>
	- php<br>
	- mysql<br>
	- ruby on rails<br>
	<br>
	i emphasize<br>
	- mobile: as good as, if not better than the desktop site<br>
	- user interface / experience: the user understands what to do and enjoys doing it<br>
	- rapid development: focus on delivering a working prototype asap over long planning phases<br>
	- clean / efficient code: other developers can easily interpret and edit my code<br>
	<br>
	i am more familiar with<br>
	- mac over pc<br>
	- android over iphone<br>
	<br>
</section>
{% endhighlight %}

here begins my main

once again i dont like the br's

lastly old habits die hard, as i had a commented out todolist

## TODO

{% highlight html %}
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
{% endhighlight %}

i do really like how the page is laid out, i could do better, but for 5 years old, its not bad

if i had to redo this document today i'd do something like as follows: [olde2nueue](../22/olde2nueue.html)