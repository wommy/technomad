---
layout: post
title: "road-to-subdirectory"
date: 2019-08-26 12:28:30 -0400
---

hey guys,

so i know i havent posted in a while, but alot has and is happening  
but ill get to that later, for right now, 

im trying to detail bumping \_posts into its own repo, via submodules  

the link i followed that got me to where i am now is  
https://help.github.com/en/articles/splitting-a-subfolder-out-into-a-new-repository

things i need todo:  
_	require the submodule back into technomad\_jekyll

so how do i do this

i gotta split the folder out   
then require the submodule in such a way that i can auto build it?

the true test of this working will be if i can trigger two different builds with the same content\_submodule

i dunno if i even want to do this now, but here goes nothing

i got it working following  
https://chrisjean.com/git-submodules-adding-using-removing-and-updating/

one thing i forgot to add  
in the last update, i pushed the `olde` branch to master  
in this new one i want to add the jekyll build as a subdirectory/domain?

so i fixed it,  
i had to delete `dev` branch and recreate it from jekyll

my next todo is to create a baseurl to push jekyll to blog/

looks like i need to upgrade from jekyll3 to jekyll4  
but why? arent i trying to transition to 11ty?

like i thought, debian only has ruby-v2.3 and i need v2.4,  
so im installing rbenv, which seems lighter than rvm

i followed this link:  
https://linuxize.com/post/how-to-install-ruby-on-debian-9/

this fucking rbenv install is taking forever  
i cancelled it because i thought it froze, verbose output isnt default  

i got other things i could be doing other than watching things (not)compile

=== 1645 -  got jekyll-v4 to work, took links:  
https://github.com/bundler/bundler/issues/4260

going to update to buster sooner or later:  
https://www.reddit.com/r/Crostini/comments/9rhauo/upgrade_from_stretch_to_buster_compilation_of/  
https://www.reddit.com/r/Crostini/comments/bzx2qd/debian_buster_to_be_released_on_july_6th_2019/  
https://www.aboutchromebooks.com/news/linux-debian-10-buster-upgrade-chromebooks-chrome-os-project-crostini-how-to/

=== 1713 - jk, borked it somehow,  
_	reinstall crostini, debian buster

going to AA
