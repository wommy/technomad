---
layout: post
title: changelog
categories: [dev]
tags: [dev]
published: True
datetime: 2015-08-06 18:45:35

---
{% highlight fancy %}
2015-08-11 12:12:15
	goal : add include: nav-side : trying to query feed : hopefully dynamic
		achieved
			side nav include [http://stackoverflow.com/questions/20872861/jekyll-display-posts-by-category]
			  for tags > nav a,{name/href/content}=%tag|first // creates a new nav and one link, title node
			  for posts in tag > for posts in post > if post.url a,href=%post.url,content=%post.title // sorts: tag > post > if-url:%title  
			changed index.html
				<ul class="post-list">
			    <!-- {% for post in site.posts %}
			      <li>
			        <span class="post-meta">{{ post.date | date: "%Y %m %d" }}</span>
			        <h2>
			          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
			        </h2>
			        {{ post.content }}
			      </li>
			    {% endfor %} -->
			    <<< TO >>>
			    <!-- http://stackoverflow.com/questions/26196559/jekyll-post-order > http://stackoverflow.com/questions/19086284/jekyll-liquid-templating-how-to-group-blog-posts-by-year/20777475#20777475 -->  
			    {% for post in site.posts %}
			      {% assign currentdate = post.date | date: "%Y %m %d" %}
			      {% if currentdate != date %}
			        {% unless forloop.first %}</ul>{% endunless %}
			        <h1 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h1>
			        <ul>
			        {% assign date = currentdate %}
			      {% endif %}
			        <li>[<a href="{{ post.tags }}">{{ post.tags }}</a>] <a href="{{ post.url }}">{{ post.title }}</a></li>
			      {% if forloop.last %}</ul>{% endif %}
			    {% endfor %}
					for post
						assign currentdate from post.date | date: "%Y %m %d"
						if currentdate isnt date
							unless forloop.first /ul
							h1#'y%post.date|date:'%Y
						// TBC
2015-08-06 18:46:02
	changed
		jekyll-sublime settings
	added
		posts clients
		collection drafts
	reformat date
		index 
			"%b %-d, %Y" > "%Y %m %d"
	post content
		{% raw %}{{ post.content }}{% endraw %}
	change feed to tag
		{% raw %}{% for post in site.tags.client %}{% endraw %}
	TODO
		post index
{% endhighlight fancy %}	
